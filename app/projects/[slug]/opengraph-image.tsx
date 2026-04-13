import { ImageResponse } from "next/og"

import { getProjectBySlug } from "@/data/projects"

export const runtime = "edge"
export const alt = "Project Open Graph image"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

type OgProps = {
  params: Promise<{ slug: string }>
}

export default async function Image({ params }: OgProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  const title = project?.title ?? "Project Not Found"
  const description = project?.description ?? "Requested project does not exist in the portfolio index."
  const tech = project?.tech.slice(0, 4).join("  |  ") ?? "Portfolio"
  const year = project?.year ?? ""

  return new ImageResponse(
    (
      <div tw="flex h-full w-full flex-col justify-between border-[16px] border-black bg-[#f5f4f0] p-[54px] text-black">
        <div tw="flex items-center justify-between">
          <div tw="flex border-4 border-black px-[14px] py-[8px] text-[24px] font-bold tracking-[0.08em]">
            PROJECT CASE STUDY
          </div>

          <div tw="flex border-[3px] border-black bg-[#f59e0b] px-[14px] py-[8px] text-[20px] font-bold">
            {year}
          </div>
        </div>

        <div tw="flex flex-col gap-[22px]">
          <div tw="flex max-w-[95%] text-[72px] font-extrabold leading-[1.04]">{title}</div>
          <div tw="flex max-w-[95%] text-[29px] leading-[1.24]">{description.slice(0, 170)}</div>
        </div>

        <div tw="flex items-center justify-between">
          <div tw="flex max-w-[78%] border-[3px] border-black px-[14px] py-[10px] text-[22px]">
            {tech}
          </div>
          <div tw="flex text-[22px] font-bold">duongphudong2001.vercel.app</div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
