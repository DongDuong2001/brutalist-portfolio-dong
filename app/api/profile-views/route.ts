import { NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"

export const runtime = "nodejs"

type ProfileViewStore = {
  total: number
  seenSessionIds: Set<string>
}

const globalForProfileViews = globalThis as typeof globalThis & {
  __profileViewStore?: ProfileViewStore
  __profileViewsTableReady?: Promise<void>
}

const databaseUrl = process.env.DATABASE_URL
const sql = databaseUrl ? neon(databaseUrl) : null

function getStore(): ProfileViewStore {
  if (!globalForProfileViews.__profileViewStore) {
    globalForProfileViews.__profileViewStore = {
      total: 0,
      seenSessionIds: new Set<string>(),
    }
  }

  return globalForProfileViews.__profileViewStore
}

async function ensureProfileViewTable() {
  if (!sql) return

  if (!globalForProfileViews.__profileViewsTableReady) {
    globalForProfileViews.__profileViewsTableReady = (async () => {
      await sql`
        CREATE TABLE IF NOT EXISTS profile_session_views (
          session_id TEXT PRIMARY KEY,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
      `
    })()
  }

  await globalForProfileViews.__profileViewsTableReady
}

async function getDbTotal(): Promise<number> {
  if (!sql) return 0

  await ensureProfileViewTable()
  const rows = await sql`SELECT COUNT(*)::int AS total FROM profile_session_views`
  const total = (rows[0] as { total?: number | string } | undefined)?.total
  return Number(total ?? 0)
}

async function insertDbSession(sessionId: string): Promise<boolean> {
  if (!sql) return false

  await ensureProfileViewTable()
  const inserted = await sql`
    INSERT INTO profile_session_views (session_id)
    VALUES (${sessionId})
    ON CONFLICT (session_id) DO NOTHING
    RETURNING session_id
  `

  return inserted.length > 0
}

function jsonNoStore(body: unknown, init?: ResponseInit) {
  const response = NextResponse.json(body, init)
  response.headers.set("Cache-Control", "no-store")
  return response
}

export async function GET() {
  if (sql) {
    const total = await getDbTotal()
    return jsonNoStore({ total })
  }

  const store = getStore()
  return jsonNoStore({ total: store.total })
}

export async function POST(request: Request) {
  const sessionId = request.headers.get("x-session-id")?.trim()

  if (!sessionId) {
    return jsonNoStore({ error: "Missing x-session-id header" }, { status: 400 })
  }

  if (sql) {
    const counted = await insertDbSession(sessionId)
    const total = await getDbTotal()
    return jsonNoStore({ total, counted })
  }

  const store = getStore()
  let counted = false

  if (!store.seenSessionIds.has(sessionId)) {
    store.seenSessionIds.add(sessionId)
    store.total += 1
    counted = true

    // Keep memory bounded for long-lived processes.
    if (store.seenSessionIds.size > 10000) {
      const oldest = store.seenSessionIds.values().next().value
      if (oldest) {
        store.seenSessionIds.delete(oldest)
      }
    }
  }

  return jsonNoStore({ total: store.total, counted })
}
