import { ArrowUpRight, CodeXml } from "lucide-react"
import type { PortfolioContent } from "@/lib/portfolio-content"
import { MobileNavigation } from "./mobile-navigation"

export function PortfolioHeader({ content }: { content: PortfolioContent }) {
  const { home: { header: copy, navigation } } = content
  return <header className="portfolio-header">
    <a className="portfolio-wordmark" href="#home" aria-label={copy.homeLabel}><CodeXml className="portfolio-logo" size={28} strokeWidth={2.4} aria-hidden="true" />{copy.wordmark}<span>.</span></a>
    <nav className="portfolio-desktop-nav" aria-label={copy.mainNav}>{navigation.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
    <div className="portfolio-header-actions">
      <a className="portfolio-contact-link" href="#contact">{copy.contact}<ArrowUpRight size={17} aria-hidden="true" /></a>
      <MobileNavigation navigation={navigation} copy={copy} />
    </div>
  </header>
}
