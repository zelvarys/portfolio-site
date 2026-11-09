/** Editable homepage copy. Keep presentation and interaction logic in components. */
export const homeContent = {
  brand: { slogan: ["Born to", "live", "create."] },
  navigation: [
    { label: "About", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Beyond the IDE", href: "#outside-the-ide" },
    { label: "Contact", href: "#contact" },
  ],
  header: { wordmark: "zelvarys", homeLabel: "zelvarys home", github: "GitHub", openMenu: "Open navigation", closeMenu: "Close navigation", mainNav: "Main navigation", mobileNav: "Mobile navigation" },
  hero: {
    kicker: "THE HUMAN BEHIND THE CODE",
    portrait: "/images/zelvarys-hero.png", portraitAlt: "Zelvarys",
    headline: ["Ideas into", "production", "software."], description: "I build complete products: web apps, APIs, databases and cloud infrastructure, and ship them to production.",
    workLink: "Explore my work",
    availability: "Open to remote roles & freelance projects", unavailable: "Currently focused on ongoing projects", connectLink: "Start a project",
    footnote: "Web apps, APIs, DevOps and cloud. Built end to end.",
    focus: {
      items: [
        { title: "Full-stack", detail: "Interfaces, APIs, data models and the product logic between them." },
        { title: "DevOps", detail: "CI/CD, containers, releases and the systems that keep them healthy." },
        { title: "Cloud", detail: "AWS, Linux and infrastructure built to deploy, scale and recover." },
      ],
    },
  },
  about: {
    cv: "Download my CV", githubProfile: "Find me on Github", email: "Contact me by email",
  },
  projects: { index: "02 / SELECTED WORK", title: ["Featured Projects", ""], description: "Developer tools, automation and websites built to make everyday work a little clearer, faster and more reliable.", live: "Visit website", code: "Source code", archive: "Explore the full collection", archiveClose: "Show selected projects", allLabel: "projects", imageAltSuffix: "project preview", featuredCount: 4, buildLabel: "BUILT WITH" },
  contact: {
    index: "07 / YOUR NEXT CHAPTER", title: ["Let’s get in touch", ""], description: "Do you want a new product, a feature that needs an expert hand, or a full-time role? Tell me what you’re working on, the stage you’re at and when you need it, and I’ll reply within 12 hours.", emailLabel: "DROP ME A LINE", whatsapp: "Chat on WhatsApp", cv: "Download my CV", linkedin: "Connect on LinkedIn", formTitle: "Tell me about your project.",
    form: { name: "Prospect name", email: "Email address", message: "What are you building?", namePlaceholder: "What should I call you?", emailPlaceholder: "you@example.com", messagePlaceholder: "The product, the timeline, and where you need help…", submit: "Send message", sending: "Opening WhatsApp…", success: "WhatsApp is opening with your message. If it doesn’t, you can email me directly." },
  },
  footer: {
    top: "Back to the top", copyright: "© 2026 Zelvarys. All rights reserved.",
  },
} as const

export const heroLogos = [
  { name: "JavaScript", slug: "javascript", x: 10, y: 12, size: 27, depth: 1.1 },
  { name: "TypeScript", slug: "typescript", x: 88, y: 9, size: 26, depth: .85 },
  { name: "React", slug: "react", x: 20, y: 25, size: 30, depth: 1.15 },
  { name: "Next.js", slug: "nextdotjs", x: 82, y: 23, size: 25, depth: .8 },
  { name: "Node.js", slug: "nodedotjs", x: 94, y: 38, size: 27, depth: 1.1 },
  { name: "Sass", slug: "sass", x: 6, y: 40, size: 27, depth: .9 },
  { name: "MongoDB", slug: "mongodb", x: 15, y: 55, size: 24, depth: 1.1 },
  { name: "PostgreSQL", slug: "postgresql", x: 90, y: 57, size: 27, depth: 1.1 },
  { name: "Docker", slug: "docker", x: 7, y: 75, size: 30, depth: .9 },
  { name: "Redis", slug: "redis", x: 94, y: 78, size: 25, depth: .85 },
  { name: "Git", slug: "git", x: 32, y: 8, size: 23, depth: .75 },
  { name: "Tailwind CSS", slug: "tailwindcss", x: 69, y: 5, size: 25, depth: .8 },
  { name: "Vue", slug: "vue", x: 6, y: 24, size: 22, depth: .7 },
  { name: "Vercel", slug: "vercel", x: 96, y: 21, size: 20, depth: .75 },
  { name: "Express", slug: "express", x: 5, y: 58, size: 24, depth: .7 },
  { name: "Cloudinary", slug: "cloudinary", x: 86, y: 93, size: 27, depth: .8 },
  { name: "Prisma", slug: "prisma", x: 21, y: 92, size: 22, depth: .75 },
  { name: "npm", slug: "npm", x: 49, y: 97, size: 26, depth: .75 },
  { name: "HTML", slug: "html5", x: 27, y: 40, size: 23, depth: .85 },
  { name: "CSS", slug: "css", x: 79, y: 43, size: 23, depth: .9 },
  { name: "Python", slug: "python", x: 20, y: 8, size: 26, depth: .9 },
  { name: "Vite", slug: "vite", x: 77, y: 13, size: 25, depth: .75 },
  { name: "Flask", slug: "flask", x: 9, y: 32, size: 26, depth: 1 },
  { name: "pip", slug: "pip", x: 92, y: 29, size: 27, depth: .8 },
  { name: "MySQL", slug: "mysql", x: 7, y: 48, size: 26, depth: .7 },
  { name: "Golang", slug: "golang", x: 91, y: 48, size: 25, depth: 1.05 },
  { name: "Gin", slug: "gin", x: 28, y: 18, size: 26, depth: .8 },
  { name: "Google Cloud", slug: "googlecloud", x: 74, y: 33, size: 28, depth: .85 },
  { name: "Kubernetes", slug: "kubernetes", x: 20, y: 34, size: 24, depth: .7 },
  { name: "Terraform", slug: "terraform", x: 6, y: 88, size: 23, depth: 1 },
  { name: "GitHub Actions", slug: "githubactions", x: 95, y: 68, size: 25, depth: .9 },
  { name: "AWS", slug: "amazonwebservices", x: 18, y: 70, size: 24, depth: .75 },
  { name: "Oracle", slug: "oracle", x: 81, y: 70, size: 23, depth: .85 },
  { name: "Render", slug: "render", x: 82, y: 84, size: 24, depth: 1.1 },
] as const

export type HomepageCopy = typeof homeContent
export type HeroLogo = typeof heroLogos[number]
