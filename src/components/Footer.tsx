import { Code2, Mail, MessageCircle } from 'lucide-react'

import { GithubIcon } from '@/components/icons'
import { navItems, site } from '@/data/site'

const socials = [
  { label: 'GitHub', href: site.github, icon: GithubIcon },
  { label: 'Email', href: `mailto:${site.email}`, icon: Mail },
  { label: 'WhatsApp', href: site.whatsapp, icon: MessageCircle },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background/60 backdrop-blur-sm">
      <div className="container py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <a
              href="#home"
              className="flex h-8 w-8 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-accent-foreground"
              aria-label="Back to top"
            >
              <Code2 className="h-4 w-4" />
            </a>
            <div>
              <p className="font-mono text-sm font-semibold">zelvarys</p>
              <p className="text-xs text-muted-foreground">
                Software engineer building reliable products and practical
                tools.
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    social.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>
        </div>

      </div>
    </footer>
  )
}
