import { useState } from 'react'
import type { FormEvent } from 'react'
import {
  ChevronRight,
  Check,
  FileText,
  Handshake,
  Info,
  Link2,
  Mail,
  MessageSquare,
  Send,
  Star,
} from 'lucide-react'

import Reveal from '@/components/Reveal'
import { GithubIcon } from '@/components/icons'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { site } from '@/data/site'

const contactCards = [
  {
    title: 'Download Resume',
    description:
      'Get my complete resume featuring detailed work experience, technical skills, education background, and professional certifications.',
    href: '#',
    icon: FileText,
  },
  {
    title: 'Explore My Links',
    description:
      'Find every link in one place, including projects, social profiles, writing, and other ways to get in touch without searching across platforms.',
    href: '#',
    icon: Link2,
  },
  {
    title: 'Project Planning',
    description:
      'Book a free planning session to discuss your project requirements, technical feasibility, timeline, and the best approach for delivery.',
    href: '#',
    icon: Handshake,
  },
]

export default function Contact() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const text = [
      '*NEW PROJECT INQUIRY*',
      '',
      `*Email:* ${email || 'Not provided'}`,
      '',
      `*Message:* ${message || 'Not provided'}`,
    ].join('\n')

    window.open(
      `${site.whatsapp}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    )

    setSubmitted(true)
    setEmail('')
    setMessage('')
  }

  return (
    <section id="contact" className="scroll-mt-20 border-t border-border py-24">
      <div className="container">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-foreground">
            02 / Contact
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s build something worth shipping.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Have a tool to build, a bug that won&apos;t quit, or a project that
            needs a maintainer? Contact me.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="h-full">
            <Card className="h-full bg-card/80">
              <CardHeader className="flex-row items-center justify-between space-y-0">
                <Star className="h-4 w-4 text-accent-foreground" />
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      Email address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground"
                    >
                      <MessageSquare className="h-3.5 w-3.5" />
                      Project details
                    </Label>
                    <Textarea
                      id="message"
                      className="min-h-[80px]"
                      placeholder="Tell me about your project, goals, and timeline."
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      required
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <Button type="submit" className="flex-[4]">
                      <Send className="mr-2 h-4 w-4" />
                      Send message
                    </Button>
                    <Button asChild variant="outline" className="flex-1 border-2 border-muted-foreground/40 px-2">
                      <a
                        href={site.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open GitHub profile"
                      >
                        <GithubIcon className="h-4 w-4" />
                        <span className="hidden sm:inline">GitHub</span>
                      </a>
                    </Button>
                  </div>

                  {submitted && (
                    <p className="flex items-center gap-2 text-sm text-accent-foreground">
                      <Check className="h-4 w-4" />
                      WhatsApp opened in a new tab. Send the message there to
                      finish.
                    </p>
                  )}

                  <div className="flex items-start gap-2 rounded-md border border-border bg-secondary/50 p-3 text-xs text-muted-foreground">
                    <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-foreground" />
                    You will be redirected to WhatsApp to confirm your inquiry
                    after submitting the form.
                  </div>
                </form>
              </CardContent>
            </Card>
          </Reveal>

          <div className="space-y-3">
            {contactCards.map((card, index) => {
              const Icon = card.icon
              return (
                <Reveal key={card.title} delay={index * 80}>
                  <a
                    href={card.href}
                    className="group flex items-center gap-4 rounded-xl border border-border bg-card/80 p-5 transition-all duration-300 hover:border-muted-foreground/50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.55)]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-primary/20 bg-primary/10 text-accent-foreground">
                      <Icon className="h-[1.125rem] w-[1.125rem]" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold">
                        {card.title}
                      </span>
                      <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                        {card.description}
                      </span>
                    </span>
                    <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-accent-foreground" />
                  </a>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
