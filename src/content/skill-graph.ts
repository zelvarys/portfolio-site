export type SkillEcosystem = "frontend" | "backend" | "deployment"
export type SkillGraphNode = {
  id: string
  label: string
  group: SkillEcosystem
  x: number
  y: number
  kind?: "hub" | "branch"
  icon?: string
}

const tool = (id: string, label: string, group: SkillEcosystem, x: number, y: number, icon = id, branch = false): SkillGraphNode =>
  ({ id, label, group, x, y, icon: `/icons/brands/${icon}.svg`, kind: branch ? "branch" : undefined })

/** Curated relationships and layout, ready to be supplied by the content adapter. */
export const skillGraph = {
  label: "Explore the technology graph",
  instructions: "Hover to trace · Tap to pin",
  panHint: "Swipe the map to explore",
  resetLabel: "Clear selection",
  connectionsLabel: "Connected to",
  defaultDetail: "Small tools. Shared ideas. Endless possibilities.",
  groups: [
    { id: "frontend" as const, label: "Frontend", note: "Interfaces that feel right.", number: "01" },
    { id: "backend" as const, label: "Backend", note: "The systems underneath.", number: "02" },
    { id: "deployment" as const, label: "Deployment", note: "From local to live.", number: "03" },
  ],
  nodes: [
    { id: "frontend", label: "Frontend", group: "frontend", x: 205, y: 320, kind: "hub" },
    tool("javascript", "JavaScript", "frontend", 235, 155, "javascript", true),
    tool("typescript", "TypeScript", "frontend", 85, 105),
    tool("react", "React", "frontend", 85, 235),
    tool("nextdotjs", "Next.js", "frontend", 65, 390),
    tool("vite", "Vite", "frontend", 365, 100),
    tool("npm", "npm", "frontend", 365, 225),
    tool("html5", "HTML", "frontend", 90, 535),
    tool("css", "CSS", "frontend", 240, 590),
    tool("tailwindcss", "Tailwind CSS", "frontend", 225, 460),
    tool("vue", "Vue", "frontend", 365, 555),
    tool("sass", "Sass", "frontend", 470, 260, "sass"),
    { id: "backend", label: "Backend", group: "backend", x: 610, y: 310, kind: "hub" },
    tool("nodedotjs", "Node.js", "backend", 540, 135, "nodedotjs", true),
    tool("express", "Express", "backend", 475, 55),
    tool("mongodb", "MongoDB", "backend", 660, 70),
    tool("prisma", "Prisma", "backend", 710, 180),
    tool("postgresql", "PostgreSQL", "backend", 785, 70),
    tool("redis", "Redis", "backend", 815, 290),
    tool("golang", "Golang", "backend", 470, 430, "golang", true),
    tool("gin", "Gin", "backend", 565, 535),
    tool("python", "Python", "backend", 690, 430, "python", true),
    tool("flask", "Flask", "backend", 700, 550),
    tool("pip", "pip", "backend", 790, 645),
    tool("mysql", "MySQL", "backend", 590, 675),
    { id: "deployment", label: "Deployment", group: "deployment", x: 1080, y: 320, kind: "hub" },
    tool("amazonwebservices", "AWS", "deployment", 950, 130, "amazonwebservices", true),
    tool("googlecloud", "Google Cloud", "deployment", 1220, 150, "googlecloud", true),
    tool("docker", "Docker", "deployment", 925, 235),
    tool("kubernetes", "Kubernetes", "deployment", 1230, 430),
    tool("terraform", "Terraform", "deployment", 860, 400),
    tool("githubactions", "GitHub Actions", "deployment", 1100, 100),
    tool("git", "Git", "deployment", 1230, 260),
    tool("vercel", "Vercel", "deployment", 900, 540),
    tool("oracle", "Oracle", "deployment", 1180, 570, "oracle"),
    tool("render", "Render", "deployment", 1120, 210),
    tool("cloudinary", "Cloudinary", "deployment", 1010, 660),
  ] satisfies SkillGraphNode[],
  edges: [
    ["frontend", "javascript"], ["frontend", "react"], ["frontend", "nextdotjs"],
    ["frontend", "html5"], ["frontend", "css"], ["frontend", "tailwindcss"], ["frontend", "vue"], ["frontend", "sass"],
    ["javascript", "typescript"], ["javascript", "react"], ["javascript", "vite"], ["javascript", "npm"], ["javascript", "vue"],
    ["react", "nextdotjs"], ["html5", "css"], ["css", "tailwindcss"], ["css", "sass"], ["vue", "vite"], ["vue", "npm"], ["vite", "npm"],
    ["javascript", "nodedotjs"], ["nextdotjs", "backend"], ["nextdotjs", "vercel"], ["vue", "vercel"],
    ["backend", "nodedotjs"], ["backend", "golang"], ["backend", "python"], ["backend", "redis"],
    ["backend", "mysql"], ["backend", "docker"],
    ["nodedotjs", "express"], ["nodedotjs", "mongodb"], ["nodedotjs", "prisma"], ["nodedotjs", "redis"],
    ["prisma", "postgresql"], ["python", "postgresql"],
    ["golang", "gin"], ["gin", "mysql"], ["gin", "postgresql"],
    ["python", "flask"], ["python", "pip"], ["flask", "mysql"], ["pip", "flask"],
    ["deployment", "amazonwebservices"], ["deployment", "docker"], ["deployment", "kubernetes"],
    ["deployment", "cloudinary"],
    ["git", "githubactions"], ["githubactions", "docker"], ["githubactions", "vercel"],
    ["docker", "kubernetes"], ["kubernetes", "amazonwebservices"], ["kubernetes", "googlecloud"], ["kubernetes", "oracle"],
    ["terraform", "amazonwebservices"], ["terraform", "googlecloud"], ["terraform", "oracle"],
    ["nodedotjs", "render"], ["githubactions", "render"],
  ] as [string, string][],
}

export type SkillGraphContent = typeof skillGraph
