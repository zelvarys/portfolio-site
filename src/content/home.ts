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

export type HomepageCopy = typeof homeContent
