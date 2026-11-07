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
  link?: { label: string; href: string }
}

export const outsideContent = {
  kicker: "05 / WHEN THE LAPTOP CLOSES",
  title: "Beyond the IDE.",
  description: "What I’m up to when I’m not writing code: the language I’m learning, the rooms where tech happens, and the game that keeps me thinking.",
  previewLabel: "STORY PREVIEW",
  categories: ["Spanish", "Events", "Chess"],
  sideNote: "Rest is part of the work.",
  stories: [
    {
      id: "spanish", category: "SPANISH", title: "Learning Spanish, slowly.",
      body: "Mostly for the humbling experience of being a beginner again. I’m taking it one conversation at a time, mistakes and all, and getting a little better each week. It’s a reminder that the discomfort of not knowing is where most of the learning happens.",
      image: "/images/gallery/learning-spanish.jpg", imageAlt: "Victor learning Spanish", imagePosition: "50% 50%",
      caption: "Still learning the basics.", preview: false,
    },
    {
      id: "events", category: "EVENTS & COMMUNITY", title: "Builders sharing ideas.",
      body: "When I’m not building, I’m usually at a tech conference or meetup, in person or online. I go to learn what others are working on, swap ideas with people who see problems differently, and meet the builders I might work with next. Some of my best ideas started as a hallway conversation.",
      image: "/images/gallery/tech-community.png", imageAlt: "The tech community gathered at an event", imagePosition: "50% 35%",
      caption: "Ideas start with people.", preview: false,
    },
    {
      id: "chess", category: "CHESS", title: "Planning moves ahead.",
      body: "Chess is how I practise patience and pattern recognition away from the keyboard. Every game asks me to read the board, test an assumption and commit to a plan, then adapt when the other person has a better idea. It keeps me curious, competitive and comfortable with thinking two steps ahead.",
      image: "/images/gallery/playing-chess.jpg", imageAlt: "Victor playing chess", imagePosition: "50% 45%",
      caption: "The board is where I slow down.", preview: false,
      link: { label: "Challenge me to a game", href: "https://www.chess.com/member/Zelvarys" },
    },
  ] satisfies OutsideStory[],
}

export const capabilitiesContent = {
  kicker: "03 / FROM THE FIRST PIXEL TO THE LAST API",
  title: ["Tools behind it all", ""],
  description: "Most products need a polished interface, a backend that holds up and a product deployed correctly. I do all three, so nothing gets lost between hand-offs.",
  linkLabel: "Talk about your project",
  listLabel: "Explore the stack",
  countLabel: "layers",
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
