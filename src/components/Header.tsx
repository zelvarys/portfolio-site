import { useEffect, useState } from 'react'
import { Code2, Mail, Menu } from 'lucide-react'

import { GithubIcon } from '@/components/icons'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { navItems, site } from '@/data/site'
import { cn } from '@/lib/utils'

export default function Header() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const sections = ['home', 'projects', 'contact']
    const handleScroll = () => {
      const marker = window.scrollY + 140
      let current = 'home'
      for (const id of sections) {
        const element = document.getElementById(id)
        if (element && marker >= element.offsetTop) {
          current = id
        }
      }
      setActive(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <a
          href="#home"
          className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-accent-foreground transition-colors group-hover:bg-primary/20">
            <Code2 className="h-4 w-4" />
          </span>
          <span className="font-mono">zelvarys</span>
        </a>

        <div className="flex items-center gap-1">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 md:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <SheetHeader className="text-left">
                <SheetTitle className="font-mono">zelvarys</SheetTitle>
                <SheetDescription>
                  Software engineer building reliable products and practical
                  tools.
                </SheetDescription>
              </SheetHeader>

              <nav className="mt-8 flex flex-col gap-1">
                {navItems.map((item) => {
                  const id = item.href.replace('#', '')
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'rounded-md px-3 py-2.5 text-sm transition-colors hover:bg-accent hover:text-foreground',
                        active === id
                          ? 'bg-accent text-foreground'
                          : 'text-muted-foreground'
                      )}
                    >
                      {item.label}
                    </a>
                  )
                })}
              </nav>

              <div className="mt-6 flex flex-col gap-2 border-t border-border pt-6">
                <Button asChild variant="outline">
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={`mailto:${site.email}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const id = item.href.replace('#', '')
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'relative px-3 py-2 text-sm transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-primary after:to-accent-foreground after:transition-all after:duration-300 hover:text-foreground hover:after:w-full',
                    active === id
                      ? 'text-foreground after:w-full'
                      : 'text-muted-foreground'
                  )}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>
        </div>
      </div>
    </header>
  )
}
