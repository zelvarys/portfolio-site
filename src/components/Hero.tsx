import { ArrowRight, Bot, Cloud, Laptop, Mail, Server } from 'lucide-react'

import Reveal from '@/components/Reveal'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const workAreas = [
  {
    title: 'Backend Development',
    description:
      'RESTful APIs, authentication, database design, and scalable server architectures.',
    icon: Server,
  },
  {
    title: 'Frontend Engineering',
    description:
      'Responsive interfaces, state management, and optimized user experiences.',
    icon: Laptop,
  },
  {
    title: 'DevOps & Deployment',
    description:
      'CI/CD pipelines, containerization, cloud hosting, and infrastructure management.',
    icon: Cloud,
  },
  {
    title: 'Automation',
    description:
      'Process scripting, data processing, web scraping, and workflow automation.',
    icon: Bot,
  },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pb-20 pt-28 sm:pt-32 lg:pb-28 lg:pt-40"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-fade" />

      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="animate-fade-in">
            <Badge
              variant="accent"
              className="gap-2 py-1 pl-2 pr-3 font-normal"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Available for freelance and full-time roles
            </Badge>

            <h1 className="mt-6 max-w-2xl text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Software engineer building{' '}
              <span className="text-[hsl(272_60%_62%)]">maintainable systems.</span>
            </h1>

            <div className="mt-6 max-w-xl space-y-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                I&apos;m Zelvarys, a software engineer who works across the
                stack. I build React and TypeScript interfaces, Node.js and
                Python services, and automation that connects the pieces. My
                focus is turning complex requirements into software that is
                clear, dependable, and easy to operate.
              </p>
              <p>
                I care about clean architecture, strong typing, and code that
                stays easy to understand and extend.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <a href="#projects" className="px-5">
                  View my work
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-muted-foreground/40"
              >
                <a href="#contact">
                  <Mail className="mr-1 h-4 w-4" />
                  Get in touch
                </a>
              </Button>
            </div>

          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <img
              src="/portfolio/assets/banner.png"
              alt="Zelvarys artwork"
              className="mx-auto w-[90%] object-contain"
              loading="eager"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {workAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <Reveal key={area.title} delay={index * 90} className="h-full">
                <div className="h-full rounded-xl border border-border bg-card/80 px-5 py-4 transition-all duration-300 hover:border-muted-foreground/50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.55)]">
                  <div className="flex items-center gap-2.5">
                    <Icon className="h-4 w-4 text-accent-foreground" />
                    <h3 className="text-sm font-semibold">{area.title}</h3>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {area.description}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
