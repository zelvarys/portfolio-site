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
  kicker: "05 / WHEN THE LAPTOP CLOSES",
  title: "Beyond the IDE.",
  description: "What I’m up to when I’m not writing code: the books on my desk, the questions I can’t stop chasing, the rooms where tech happens, and the game that keeps me thinking.",
  previewLabel: "STORY PREVIEW",
  categories: ["Reading", "Events", "Chess"],
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
      id: "chess", category: "CHESS", title: "Thinking a few moves ahead.",
      body: "Chess is how I practise patience and pattern recognition away from the keyboard. Every game asks me to read the board, test an assumption and commit to a plan, then adapt when the other person has a better idea. It keeps me curious, competitive and comfortable with thinking two steps ahead.",
      image: "/images/gallery/playing-chess.jpg", imageAlt: "Victor playing chess", imagePosition: "50% 45%",
      caption: "The board is where I slow down.", preview: false,
      link: { label: "Challenge me to a game", href: "https://www.chess.com/member/Zelvarys" },
    },
  ] satisfies OutsideStory[],
}

export const capabilitiesContent = {
  kicker: "03 / FROM THE FIRST PIXEL TO THE LAST API",
  title: ["One engineer.", "The whole product."],
  description: "Most products need a polished interface, a backend that holds up and a product deployed correctly. I do all three, so nothing gets lost between hand-offs.",
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
      id: "backend", number: "02", label: "BACKEND ENGINEERING", title: "The strength beneath.",
      description: "Backend systems that hold up under real users: clear APIs, dependable data models, queues, and services that stay reliable as traffic grows.",
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
