import { PDFDocument, type PDFFont, type PDFPage, StandardFonts, rgb } from "pdf-lib"

import { projects, type Project, type ProjectAward } from "@/data/projects"
import { skills } from "@/data/skills"

export const runtime = "nodejs"

type PdfState = {
  page: PDFPage
  y: number
}

type DrawHelpers = {
  createInitialState: () => PdfState
  addGap: (state: PdfState, amount: number) => PdfState
  drawWrapped: (
    state: PdfState,
    text: string,
    size: number,
    font: PDFFont,
    color: ReturnType<typeof rgb>,
    indent?: number,
    extraGap?: number,
  ) => PdfState
  drawSectionTitle: (state: PdfState, title: string) => PdfState
  drawBullet: (state: PdfState, text: string, extraGap?: number) => PdfState
}

const PAGE_WIDTH = 595.28
const PAGE_HEIGHT = 841.89
const PAGE_MARGIN = 40
const HEADER_GAP = 22
const TITLE_SIZE = 20
const LINE_HEIGHT = 16

const profileSummary = [
  "Full-stack Developer and Technical Leader with production delivery experience across web products, backend systems, and startup execution.",
  "Founder of lab68dev and active builder of products recognized on Unikorn and Forg.",
]

const contactDetails = [
  "Location: Ho Chi Minh City, Vietnam",
  "Education: RMIT University Vietnam",
  "Status: Available for opportunities",
  "Website: https://duongphudong2001.vercel.app/",
  "GitHub: https://github.com/DongDuong2001",
  "LinkedIn: https://www.linkedin.com/in/duong-phu-dong/",
  "X (Twitter): https://x.com/F4P1E404",
  "Unikorn: https://unikorn.vn/u/duong-phu-dong",
  "Forg: https://forg.to/@duongphudong",
  "Product Hunt: https://www.producthunt.com/@duong_phu_dong",
]

const activeRadar = [
  "Java (Spring Boot backend services)",
  "Python (FastAPI high-performance APIs)",
  "TypeScript (type-safe frontend systems)",
  "Next.js (App Router product delivery)",
  "PostgreSQL (data modeling and performance)",
]

const familiarTooling = ["CI/CD Pipeline", "Docker", "Kafka", "Redis"]

const learningNext = [
  "AI/ML (applied models for product features)",
  "Design Patterns (scalable architecture and code quality)",
  "Advanced System Architecture (distributed system design at scale)",
]

const educationHistory = [
  {
    degree: "Bachelor of Software Engineering",
    institution: "RMIT University - SGS Campus",
    period: "Currently Studying",
    status: "In Progress",
    highlights: [
      "Focused on software engineering and full-stack development.",
      "Building expertise in algorithms and data structures.",
      "Gaining practical delivery experience through coursework projects.",
    ],
  },
  {
    degree: "High School Diploma",
    institution: "Urban International School - Canada",
    period: "Completed",
    status: "Completed",
    highlights: [
      "Developed strong foundations in mathematics and sciences.",
      "Built problem-solving skills for engineering pathways.",
      "Prepared for university-level computer science studies.",
    ],
  },
]

const activityHighlights = [
  "2026 - Capstone A, RMIT University Vietnam (Education)",
  "2026 - Project Leader, Project Luvcraft, Project Pluto Company",
  "2026 - Building Graft (Go backend tooling)",
  "2026 - Building SlideGlint (desktop product workflow)",
  "2025 - Founder of lab68dev (freelance startup)",
  "2025 - Project Leader - Backend, NCT SatEvent",
  "2025 - GameJam participant, RMIT University",
  "2024 - Gemini API Competition (Medical Web App)",
  "2023 - VNISA ASEAN Information Security competition (Top 55)",
]

const interests = [
  "Chess",
  "Specialty Coffee",
  "Film Photography",
  "Hiking and Outdoors",
  "Open Source",
  "Reading",
  "Motorsport",
]

function getAwards(project: Project): ProjectAward[] {
  if (project.awards && Array.isArray(project.awards)) return project.awards
  if (project.award) return [project.award]
  return []
}

function wrapTextByWidth(text: string, maxWidth: number, font: PDFFont, size: number): string[] {
  if (!text.trim()) return [""]

  const words = text.split(/\s+/)
  const lines: string[] = []
  let currentLine = ""

  for (const word of words) {
    const next = currentLine ? `${currentLine} ${word}` : word
    const nextWidth = font.widthOfTextAtSize(next, size)

    if (nextWidth <= maxWidth) {
      currentLine = next
      continue
    }

    if (currentLine) lines.push(currentLine)
    currentLine = word
  }

  if (currentLine) lines.push(currentLine)
  return lines
}

function createDrawHelpers(options: {
  pdfDoc: PDFDocument
  regularFont: PDFFont
  boldFont: PDFFont
  titleColor: ReturnType<typeof rgb>
  bodyColor: ReturnType<typeof rgb>
  mutedColor: ReturnType<typeof rgb>
  headerTitle: string
  headerSubtitle?: string
  includeGeneratedAt?: boolean
  pageWidth?: number
  pageHeight?: number
  pageMargin?: number
  lineHeight?: number
}): DrawHelpers {
  const {
    pdfDoc,
    regularFont,
    boldFont,
    titleColor,
    bodyColor,
    mutedColor,
    headerTitle,
    headerSubtitle,
    includeGeneratedAt = true,
    pageWidth = PAGE_WIDTH,
    pageHeight = PAGE_HEIGHT,
    pageMargin = PAGE_MARGIN,
    lineHeight = LINE_HEIGHT,
  } = options

  const drawPageHeader = (state: PdfState): PdfState => {
    state.page.drawText(headerTitle, {
      x: pageMargin,
      y: state.y,
      size: TITLE_SIZE,
      font: boldFont,
      color: titleColor,
    })

    state.y -= TITLE_SIZE + 6

    if (headerSubtitle) {
      state.page.drawText(headerSubtitle, {
        x: pageMargin,
        y: state.y,
        size: 11,
        font: regularFont,
        color: bodyColor,
      })

      state.y -= 14
    }

    if (includeGeneratedAt) {
      const generatedAt = new Intl.DateTimeFormat("en-GB", { dateStyle: "medium" }).format(new Date())

      state.page.drawText(`Generated: ${generatedAt}`, {
        x: pageMargin,
        y: state.y,
        size: 10,
        font: regularFont,
        color: mutedColor,
      })

      state.y -= HEADER_GAP
    } else {
      state.y -= 10
    }

    state.page.drawLine({
      start: { x: pageMargin, y: state.y },
      end: { x: pageWidth - pageMargin, y: state.y },
      thickness: 1,
      color: mutedColor,
    })

    state.y -= 16
    return state
  }

  const ensureSpace = (state: PdfState, heightNeeded: number): PdfState => {
    if (state.y - heightNeeded >= pageMargin) return state

    const nextState: PdfState = {
      page: pdfDoc.addPage([pageWidth, pageHeight]),
      y: pageHeight - pageMargin,
    }

    return drawPageHeader(nextState)
  }

  const drawWrapped = (
    state: PdfState,
    text: string,
    size: number,
    font: PDFFont,
    color: ReturnType<typeof rgb>,
    indent = 0,
    extraGap = 0,
  ): PdfState => {
    const maxWidth = pageWidth - pageMargin * 2 - indent
    const lines = wrapTextByWidth(text, maxWidth, font, size)
    const requiredHeight = lines.length * lineHeight + extraGap

    state = ensureSpace(state, requiredHeight)

    for (const line of lines) {
      state.page.drawText(line, {
        x: pageMargin + indent,
        y: state.y,
        size,
        font,
        color,
      })
      state.y -= lineHeight
    }

    if (extraGap > 0) state.y -= extraGap
    return state
  }

  const drawSectionTitle = (state: PdfState, title: string): PdfState => {
    state = drawWrapped(state, title.toUpperCase(), 12, boldFont, titleColor, 0, 3)
    state.page.drawLine({
      start: { x: pageMargin, y: state.y + 2 },
      end: { x: pageWidth - pageMargin, y: state.y + 2 },
      thickness: 0.8,
      color: mutedColor,
    })
    state.y -= 8
    return state
  }

  const addGap = (state: PdfState, amount: number): PdfState => {
    state = ensureSpace(state, amount)
    state.y -= amount
    return state
  }

  const drawBullet = (state: PdfState, text: string, extraGap = 0): PdfState =>
    drawWrapped(state, `- ${text}`, 10, regularFont, bodyColor, 8, extraGap)

  const createInitialState = () => {
    const initialState: PdfState = {
      page: pdfDoc.addPage([pageWidth, pageHeight]),
      y: pageHeight - pageMargin,
    }

    return drawPageHeader(initialState)
  }

  return { createInitialState, addGap, drawWrapped, drawSectionTitle, drawBullet }
}

async function generateProjectIndexPdf() {
  const pdfDoc = await PDFDocument.create()
  const regularFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold)
  const titleColor = rgb(0.05, 0.05, 0.05)
  const bodyColor = rgb(0.18, 0.18, 0.18)
  const mutedColor = rgb(0.4, 0.4, 0.4)

  const { createInitialState, addGap, drawWrapped } = createDrawHelpers({
    pdfDoc,
    regularFont,
    boldFont,
    titleColor,
    bodyColor,
    mutedColor,
    headerTitle: "DUONG PHU DONG - PROJECT INDEX",
  })

  let state = createInitialState()

  state = drawWrapped(
    state,
    "This one-page index summarizes project scope, stack, and links for recruiter review.",
    11,
    regularFont,
    bodyColor,
    0,
    8,
  )

  projects.forEach((project, index) => {
    state = drawWrapped(state, `${index + 1}. ${project.title} (${project.year})`, 12, boldFont, titleColor, 0, 2)
    state = drawWrapped(state, `Category: ${project.category}`, 10, regularFont, bodyColor)
    state = drawWrapped(state, `Tech: ${project.tech.join(", ")}`, 10, regularFont, bodyColor)
    state = drawWrapped(state, `Summary: ${project.description}`, 10, regularFont, bodyColor)

    if (project.link) {
      state = drawWrapped(state, `Live: ${project.link}`, 10, regularFont, mutedColor)
    }

    if (project.github) {
      state = drawWrapped(state, `Source: ${project.github}`, 10, regularFont, mutedColor)
    }

    state = addGap(state, 8)
  })

  return pdfDoc.save()
}

async function generateHarvardPortfolioPdf() {
  const pdfDoc = await PDFDocument.create()
  const regularFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)
  const boldFont = await pdfDoc.embedFont(StandardFonts.TimesRomanBold)
  const italicFont = await pdfDoc.embedFont(StandardFonts.TimesRomanItalic)

  const titleColor = rgb(0.07, 0.07, 0.07)
  const bodyColor = rgb(0.09, 0.09, 0.09)
  const mutedColor = rgb(0.3, 0.3, 0.3)

  const { createInitialState, addGap, drawWrapped, drawSectionTitle, drawBullet } = createDrawHelpers({
    pdfDoc,
    regularFont,
    boldFont,
    titleColor,
    bodyColor,
    mutedColor,
    headerTitle: "DUONG PHU DONG",
    headerSubtitle: "Professional Summary",
    includeGeneratedAt: false,
    pageMargin: 50,
    lineHeight: 15,
  })

  let state = createInitialState()

  state = drawSectionTitle(state, "Core Profile")
  profileSummary.forEach((line) => {
    state = drawBullet(state, line, 1)
  })
  state = addGap(state, 8)

  state = drawSectionTitle(state, "Contact and Profiles")
  contactDetails.forEach((detail) => {
    state = drawBullet(state, detail)
  })
  state = addGap(state, 8)

  state = drawSectionTitle(state, "Technical Skills")
  skills.forEach((category) => {
    const skillNames = category.skills.map((skill) => skill.name).join(", ")
    state = drawWrapped(state, `${category.category}: ${skillNames}`, 10, regularFont, bodyColor, 0, 2)
  })
  state = addGap(state, 8)

  state = drawSectionTitle(state, "Tech Radar")
  state = drawWrapped(state, `Adopt: ${activeRadar.join("; ")}.`, 10, regularFont, bodyColor, 0, 1)
  state = drawWrapped(state, `Familiar with: ${familiarTooling.join(", ")}.`, 10, regularFont, bodyColor, 0, 1)
  state = drawWrapped(state, `Learning next: ${learningNext.join("; ")}.`, 10, regularFont, bodyColor, 0, 1)
  state = addGap(state, 8)

  state = drawSectionTitle(state, "Education")
  educationHistory.forEach((education) => {
    state = drawWrapped(state, `${education.degree} - ${education.institution}`, 11, boldFont, bodyColor, 0, 1)
    state = drawWrapped(state, `${education.period} | ${education.status}`, 10, italicFont, mutedColor, 0, 1)
    education.highlights.forEach((highlight) => {
      state = drawBullet(state, highlight)
    })
    state = addGap(state, 6)
  })

  state = drawSectionTitle(state, "Activity Roadmap")
  activityHighlights.forEach((activity) => {
    state = drawBullet(state, activity)
  })
  state = addGap(state, 8)

  state = drawSectionTitle(state, "Project Portfolio")
  projects.forEach((project, index) => {
    state = drawWrapped(state, `${index + 1}. ${project.title} (${project.year})`, 11, boldFont, bodyColor, 0, 1)
    state = drawWrapped(state, `Category: ${project.category}`, 10, regularFont, bodyColor)

    if (project.kpis) {
      state = drawWrapped(
        state,
        `Key metrics: Users ${project.kpis.users}; Launch ${project.kpis.launchTime}; Impact ${project.kpis.coreImpact}; Performance ${project.kpis.performance}.`,
        10,
        regularFont,
        bodyColor,
      )
    }

    state = drawWrapped(state, `Summary: ${project.description}`, 10, regularFont, bodyColor)
    state = drawWrapped(state, `Stack: ${project.tech.join(", ")}`, 10, regularFont, bodyColor)

    const awards = getAwards(project)
    if (awards.length > 0) {
      const awardsText = awards.map((award) => `${award.label} (${award.platform})`).join("; ")
      state = drawWrapped(state, `Recognition: ${awardsText}`, 10, regularFont, bodyColor)
    }

    if (project.link) {
      state = drawWrapped(state, `Live: ${project.link}`, 10, regularFont, mutedColor)
    }

    if (project.github) {
      state = drawWrapped(state, `Source: ${project.github}`, 10, regularFont, mutedColor)
    }

    state = addGap(state, 7)
  })

  state = drawSectionTitle(state, "Interests")
  state = drawWrapped(state, interests.join(", "), 10, regularFont, bodyColor)

  return pdfDoc.save()
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const isHarvardStyle = searchParams.get("style") === "harvard"
  const forceDownload = searchParams.get("download") === "1"

  const pdfBytes = isHarvardStyle ? await generateHarvardPortfolioPdf() : await generateProjectIndexPdf()
  const pdfBuffer = Buffer.from(pdfBytes)
  const filename = isHarvardStyle ? "duong-phu-dong-portfolio.pdf" : "project-index.pdf"
  const disposition = forceDownload ? "attachment" : "inline"

  return new Response(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `${disposition}; filename="${filename}"`,
      "Cache-Control": "no-store",
    },
  })
}
