export type Project = {
  slug: string
  title: string
  summary: string
  category: string
  technologies: string[]
  image: string
  liveUrl?: string
  liveLabel?: string
  repoUrl?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: "repositron",
    title: "Repositron – Repository Health CLI",
    summary: "An interactive CLI that signs in with GitHub, lists repositories you own or have contributed to in the last year, and scans one on demand for health, activity, dependency drift, CI reliability, bus factor and tool adoption — all locally, with no database, hosted backend or worker.",
    category: "CLI tool",
    technologies: ["TypeScript", "React", "Ink", "Node.js", "Zod", "npm"],
    image: "projects/repositron-terminal.svg",
    repoUrl: "https://github.com/zelvarys/repositron-dt",
    featured: true,
  },
  {
    slug: "whatsapp-bot",
    title: "WhatsApp Bot – AI & Utility Assistant",
    summary: "A Baileys-based WhatsApp assistant with AI chat, media downloads, solo and multiplayer games, points, rankings and everyday utility commands built to keep busy groups moving without extra setup.",
    category: "Automation",
    technologies: ["JavaScript", "Node.js", "Baileys", "Gemini API", "FFmpeg", "yt-dlp"],
    image: "projects/whatsapp-bot.png",
    repoUrl: "https://github.com/zelvarys/whatsapp-bot",
    featured: true,
  },
  {
    slug: "portfolio-site",
    title: "Portfolio Site – Developer Portfolio",
    summary: "The source for my responsive developer portfolio, built with React, TypeScript and Vite around a component-driven, editorial visual system that keeps content and motion easy to extend over time.",
    category: "Website",
    technologies: ["TypeScript", "React", "Vite", "Tailwind CSS"],
    image: "projects/portfolio-site.png",
    liveUrl: "https://zelvarys.github.io/portfolio",
    repoUrl: "https://github.com/zelvarys/portfolio-site",
    featured: true,
  },
  {
    slug: "zelvar-validate",
    title: "Zelvar Validate – Type-Safe Validation",
    summary: "A zero-dependency validation library with async, conditional, nested and batch support, shipped as ESM and CommonJS with full TypeScript types and a small, predictable API that stays out of your way.",
    category: "Open-source library",
    technologies: ["TypeScript", "Node.js", "npm", "JavaScript", "ESM", "CJS"],
    image: "projects/zelvar-validate.png",
    liveUrl: "https://www.npmjs.com/package/zelvar-validate",
    liveLabel: "View package",
    repoUrl: "https://github.com/zelvarys/zelvar-validate",
    featured: true,
  },
  {
    slug: "github-metrics",
    title: "GitHub Metrics – Profile Stats Cards",
    summary: "A Next.js service that turns GitHub profile data into customizable SVG stats cards with stars, contributions, top languages and monthly activity charts that are ready to embed on any profile.",
    category: "Developer tool",
    technologies: ["TypeScript", "Next.js", "React", "GitHub GraphQL", "SVG"],
    image: "projects/github-metrics.png",
    liveUrl: "https://github-metrics-incog.vercel.app",
    repoUrl: "https://github.com/zelvarys/github-metrics",
  },
]
