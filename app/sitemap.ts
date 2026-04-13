import { type MetadataRoute } from "next"

import { projects, slugifyProjectTitle } from "@/data/projects"

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://duongphudong2001.vercel.app"

    const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
        url: `${baseUrl}/projects/${slugifyProjectTitle(project.title)}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
    }))

    return [
        {
            url: `${baseUrl}/`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        ...projectRoutes,
    ]
}
