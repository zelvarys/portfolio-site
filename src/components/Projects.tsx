import {
  ArrowUpRight,
  BarChart3,
  Bot,
  LayoutTemplate,
  Package,
  ShieldCheck,
  Terminal,
} from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'

import Reveal from '@/components/Reveal'
import { GithubIcon } from '@/components/icons'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { projects, type Project, type ProjectLinks } from '@/data/projects'

const projectIcons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  'zelvar-validate': ShieldCheck,
  'repo-insights': BarChart3,
  'depaudit-cli': Terminal,
  'whatsapp-bot': Bot,
  'portfolio-site': LayoutTemplate,
}

function ProjectLinksRow({
  name,
  links,
}: {
  name: string
  links: ProjectLinks
}) {
  return (
    <div className="flex items-center gap-1">
      <Button
        asChild
        variant="ghost"
        size="icon"
        className="h-8 w-8 text-muted-foreground hover:text-foreground"
      >
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} on GitHub`}
        >
          <GithubIcon className="h-4 w-4" />
        </a>
      </Button>
      {links.npm && (
        <Button
          asChild
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-muted-foreground hover:text-foreground"
        >
          <a
            href={links.npm}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} on npm`}
          >
            <Package className="h-4 w-4" />
          </a>
        </Button>
      )}
      {links.pypi && (
        <Button
          asChild
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-muted-foreground hover:text-foreground"
        >
          <a
            href={links.pypi}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} on PyPI`}
          >
            <Package className="h-4 w-4" />
          </a>
        </Button>
      )}
      {links.live && (
        <Button
          asChild
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-muted-foreground hover:text-foreground"
        >
          <a
            href={links.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${name} live site`}
          >
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </Button>
      )}
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const Icon = projectIcons[project.name] ?? Package

  return (
    <Card className="group flex h-full flex-col bg-card/80 transition-all duration-300 hover:border-muted-foreground/50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.55)]">
      <CardHeader className="flex-row items-center justify-between space-y-0 p-5 pb-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-primary/20 bg-primary/10 text-accent-foreground">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="font-mono text-lg font-semibold">{project.name}</h3>
        </div>
        <ProjectLinksRow name={project.name} links={project.links} />
      </CardHeader>
      <CardContent className="flex flex-1 flex-col p-5 pt-0">
        <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="font-normal"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function FeaturedProject({ project }: { project: Project }) {
  const Icon = projectIcons[project.name] ?? Package

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card/90 p-4 transition-all duration-300 hover:border-muted-foreground/50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.55)] sm:p-5 lg:p-6">
      <div className="pointer-events-none absolute -right-24 -top-24 z-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <Badge variant="accent" className="gap-1.5">
            <Icon className="h-3.5 w-3.5" />
            Featured project
          </Badge>
          <ProjectLinksRow name={project.name} links={project.links} />
        </div>

        <div className="mt-3 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h3 className="font-mono text-2xl font-bold tracking-tight sm:text-3xl">
              {project.name}
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="font-normal"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-background/70 p-4 font-mono text-xs shadow-inner">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
              </div>
              <span className="text-[10px] text-muted-foreground">
                example.ts
              </span>
            </div>
            <pre className="overflow-x-auto leading-relaxed">
              <code>
                <span className="text-muted-foreground">
                  {'// chainable, type-safe'}
                </span>
                {'\n'}
                <span className="text-accent-foreground">import</span>
                {' { validate } '}
                <span className="text-accent-foreground">from</span>
                {" 'zelvar-validate'"}
                {'\n\n'}
                <span className="text-accent-foreground">const</span>
                {' result = validate('}
                <span className="text-green-500">'user@example.com'</span>
                {')'}
                {'\n  .email().isValid()'}
                {'\n\n'}
                <span className="text-muted-foreground">{'// true'}</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const featured = projects.find((project) => project.featured)
  const rest = projects.filter((project) => !project.featured)

  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t border-border py-24"
    >
      <div className="container">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-foreground">
            01 / Projects
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Selected projects and tools
          </h2>
          <p className="mt-4 text-muted-foreground">
            A mix of products, services, and developer tools I&apos;ve designed
            and shipped.
          </p>
        </div>

        <div className="mt-10 space-y-5">
          {featured && (
            <Reveal>
              <FeaturedProject project={featured} />
            </Reveal>
          )}
          <div className="grid gap-5 sm:grid-cols-2">
            {rest.map((project, index) => (
              <Reveal
                key={project.name}
                delay={index * 80}
                className="h-full"
              >
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
