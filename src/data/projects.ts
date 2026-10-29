export interface ProjectLinks {
  github: string
  npm?: string
  pypi?: string
  live?: string
}

export interface Project {
  name: string
  tagline: string
  description: string
  tags: string[]
  links: ProjectLinks
  featured?: boolean
}

export const projects: Project[] = [
  {
    name: 'zelvar-validate',
    tagline: 'Type-safe validation for JS and TS',
    description:
      'Fast validation library with chainable rules, async and conditional checks, nested schemas, and batch validation. Ships ESM and CommonJS builds with full TypeScript declarations for Node.js and modern browsers.',
    tags: ['TypeScript', 'npm package', 'Validator', 'ESM + CJS'],
    links: {
      github: 'https://github.com/zelvarys/zelvar-validate',
      npm: 'https://www.npmjs.com/package/zelvar-validate',
    },
    featured: true,
  },
  {
    name: 'repo-insights',
    tagline: 'Real tool adoption, not guesses',
    description:
      'Analytics platform for maintainers that scans GitHub repositories to reveal whether contributors actually use the tools you ship: ESLint, tests, CI, and more. React and Express front to back, with BullMQ workers, PostgreSQL, Redis, and 13 detectors.',
    tags: ['TypeScript', 'React', 'Express', 'Postgres', 'Redis'],
    links: {
      github: 'https://github.com/zelvarys/repo-insights',
    },
  },
  {
    name: 'depaudit-cli',
    tagline: 'One command, every dependency issue',
    description:
      'Dependency auditor for Python and Node projects that finds unpinned, unused, duplicate, and outdated packages, and flags dependencies that shadow Python standard library modules. Supports JSON output and runs cleanly in CI.',
    tags: ['Python', 'Command-line tool', 'CI integration'],
    links: {
      github: 'https://github.com/zelvarys/depaudit-cli',
      pypi: 'https://pypi.org/project/zelvarys-depaudit/',
    },
  },
  {
    name: 'whatsapp-bot',
    tagline: 'A WhatsApp bot that does everything',
    description:
      'Feature-rich Baileys bot with Gemini-powered AI tools, media downloaders for YouTube, TikTok, and Facebook, solo and multiplayer games, a points and ranking system, and a broad set of everyday utility commands.',
    tags: ['JavaScript', 'Node.js', 'Baileys', 'Gemini API', 'yt-dlp'],
    links: {
      github: 'https://github.com/zelvarys/whatsapp-bot',
    },
  },
  {
    name: 'portfolio-site',
    tagline: 'A portfolio designed and built from scratch',
    description:
      'Custom developer portfolio designed and built from scratch with React, TypeScript, and Vite. It features responsive layouts, a dark theme, a component-based structure, smooth navigation, and a production build optimized for static hosting.',
    tags: ['TypeScript', 'React', 'Vite', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/zelvarys/portfolio-site',
      live: 'https://zelvarys.github.io/portfolio',
    },
  },
]
