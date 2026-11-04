import { profile } from "./profile"

export type OutsideStory = {
  id: string
  category: string
  title: string
  body: string
  image: string
  imageAlt: string
  imagePosition: string
  caption: string
  preview: boolean
  /** Show the bookshelf covers (from the hero) instead of the photo. */
  showBooks?: boolean
  link?: { label: string; href: string }
}

export const outsideContent = {
  kicker: "03 / WHEN THE LAPTOP CLOSES",
  title: "Beyond the IDE.",
  description: "What I’m up to when I’m not writing code: the books on my desk, the questions I can’t stop chasing, the rooms where tech happens, and the people I learn alongside.",
  previewLabel: "STORY PREVIEW",
  categories: ["Reading", "Events", "Teaching"],
  sideNote: "Rest is part of the work.",
  booksLabel: "Books I’ve finished",
  stories: [
    {
      id: "reading", category: "READING", title: "Always a book on the go.",
      body: "Books are how I slow down and think. Deep Work taught me to protect long stretches of focus. So Good They Can’t Ignore You made skill the goal, not passion. Atomic Habits changed how I build routines, and The Psychology of Money changed how I think about money and time. Steal Like an Artist reminded me that nothing is original, so I study the work I admire and build on it. There’s always another one in progress.",
      image: "/images/books/deep-work.webp", imageAlt: "Covers of books Victor has read", imagePosition: "50% 50%",
      caption: "The shelf so far, and the one I’m still reading.", preview: false, showBooks: true,
    },
    {
      id: "events", category: "EVENTS & COMMUNITY", title: "Always in the room where tech happens.",
      body: "When I’m not building, I’m usually at a tech conference or meetup, in person or online. I go to learn what others are working on, swap ideas with people who see problems differently, and meet the builders I might work with next. Some of my best ideas started as a hallway conversation.",
      image: "/images/gallery/microsoft-ai-event.jpg", imageAlt: "Victor standing in front of a Microsoft banner at a tech event, wearing a guest lanyard", imagePosition: "50% 22%",
      caption: "Ideas start with people.", preview: false,
    },
    {
      id: "teaching", category: "TEACHING & COMMUNITY", title: "Learning out loud, with other people.",
      body: "As a teaching assistant at Kode10x, I help other developers get unstuck, and explaining things makes me sharper too. Talks, community sessions and write-ups about what I’m learning will live here.",
      image: "/images/gallery/teaching-code-kode10x.jpg", imageAlt: "Victor pointing at code on a large screen while teaching a Kode10x class", imagePosition: "50% 38%",
      caption: "Explaining it is how I learn it.", preview: false,
      link: { label: "Invite me to speak", href: `mailto:${profile.email}?subject=Speaking%20invitation` },
    },
  ] satisfies OutsideStory[],
}

export type Testimonial = {
  id: string
  perspective: string
  quote: string
  name: string
  role: string
  company: string
  companyLogo: string
  image: string
  tone: "cream" | "rose" | "yellow"
  paper: string
}

export const testimonialsContent = {
  background: "/images/testimonials/pinboard-brown.webp",
  kicker: "04 / THE PEOPLE SIDE OF THE WORK",
  title: ["Good work.", "Good people."],
  description: "A little perspective from the people on the other side of the project.",
  previewLabel: "TESTIMONIAL PREVIEW",
  previewNote: "Quotes from the teams I’ve worked with are on their way.",
  quotePlaceholder: "Their words. Their experience. Their perspective.",
  namePlaceholder: "Name to be added",
  rolePlaceholder: "Role",
  contact: { label: "Let’s work together", href: "#contact" },
  valuesLabel: "BUILT WITH PEOPLE, FOR PEOPLE",
  values: ["Clear communication", "Shared ownership", "Thoughtful delivery"],
  // One card per company. Empty fields show placeholders until real quotes arrive.
  items: [
    { id: "kode10x", perspective: "A mentor at Kode10x", company: "Kode10x", companyLogo: "/images/testimonials/logos/kode10x.png", quote: "Victor was the one who stayed after sessions asking why something worked, not just how. Give him a problem he hadn’t seen before and he’d come back the next day with a working version and three questions about doing it better. That kind of curiosity is hard to teach.", name: "", role: "", image: "", tone: "cream", paper: "/images/testimonials/note-cream.png" },
    { id: "lemonwares", perspective: "From the LemonWares team", company: "LemonWares", companyLogo: "/images/testimonials/logos/lemonwares.png", quote: "We threw a lot at Victor: online stores, a fulfilment platform, frontends and backends for very different clients, often on tight timelines. He never treated any of it as just another ticket. He’d dig into what the client actually needed, push back when something didn’t add up, and put in the hours to get it right.", name: "", role: "", image: "", tone: "yellow", paper: "/images/about/note-sunshine.png" },
    { id: "surecova", perspective: "A founder’s perspective", company: "SureCova", companyLogo: "/images/testimonials/logos/surecova.png", quote: "Building telemedicine for Nigeria and Ghana meant payments, prescriptions and doctors who can’t afford downtime. Victor took on the hardest parts, from the payments ledger to the mobile app, and owned them end to end. When something broke, he was usually already on it before we had to ask.", name: "", role: "", image: "", tone: "rose", paper: "/images/about/note-rose.png" },
    { id: "client", perspective: "A client’s perspective", company: "Client", companyLogo: "", quote: "I’m not technical, and Victor never made me feel like I needed to be. He explained things in plain language, showed us progress every week and caught problems we didn’t know to ask about. We got exactly what we needed, and it still runs smoothly.", name: "", role: "", image: "", tone: "cream", paper: "/images/testimonials/note-cream.png" },
  ] as Testimonial[],
}

export const capabilitiesContent = {
  kicker: "05 / FROM THE FIRST PIXEL TO THE LAST API",
  title: ["One engineer.", "The whole product."],
  description: "Most products need a polished interface, a backend that holds up and money handled correctly. I do all three, so nothing gets lost between hand-offs.",
  linkLabel: "Talk about your project",
  items: [
    {
      id: "frontend", number: "01", label: "FRONTEND DEVELOPMENT", title: "The part people feel.",
      description: "Web and mobile interfaces that are fast, clear and easy to use, from marketing sites that rank to dashboards and apps people open every day.",
      details: ["Marketing sites, dashboards and web apps", "Flutter apps for iOS and Android from one codebase", "SEO, performance, and state management."],
      note: "Clarity in every click.", icon: "frontend", tone: "yellow",
      tools: [{ name: "React", icon: "react" }, { name: "Next.js", icon: "nextdotjs" }, { name: "TypeScript", icon: "typescript" }, { name: "Tailwind CSS", icon: "tailwindcss" }, { name: "JavaScript", icon: "javascript" }, { name: "Flutter", icon: "flutter" }, { name: "Dart", icon: "dart" }, { name: "Vue", icon: "vue" }],
    },
    {
      id: "backend", number: "02", label: "BACKEND ENGINEERING", title: "The strength underneath.",
      description: "Backend systems that hold up under real users: clear APIs, dependable data models, queues, and money handled with a proper ledger.",
      details: ["Express apps with realtime and background jobs", "Golang services for concurrent workloads", "PostgreSQL, MongoDB and Redis for reliable data"],
      note: "Good foundations go a long way.", icon: "backend", tone: "green",
      tools: [{ name: "Node.js", icon: "nodedotjs" }, { name: "Express", icon: "express" }, { name: "PostgreSQL", icon: "postgresql" }, { name: "Golang", icon: "golang" }, { name: "MySQL", icon: "mysql" }, { name: "Redis", icon: "redis" }, { name: "Gin", icon: "gin" }, { name: "MongoDB", icon: "mongodb" }],
    },
    {
      id: "cloud-deployment", number: "03", label: "CLOUD & DEPLOYMENT", title: "The path to production.",
      description: "Cloud infrastructure and deployment pipelines that take a product from local to live, with repeatable releases and room to scale.",
      details: ["AWS infrastructure and containerised deployments", "Docker and Kubernetes workloads", "GitHub Actions, CI/CD, and version control"],
      note: "Built to ship, ready to scale.", icon: "cloud", tone: "rose",
      tools: [{ name: "AWS", icon: "amazonwebservices" }, { name: "Docker", icon: "docker" }, { name: "Kubernetes", icon: "kubernetes" }, { name: "GitHub Actions", icon: "githubactions" }, { name: "Git", icon: "git" }, { name: "Oracle", icon: "oracle" }, { name: "GitHub", icon: "github" }, { name: "Terraform", icon: "terraform" }],
    },
  ],
}
