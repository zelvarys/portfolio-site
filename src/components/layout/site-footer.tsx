import { ArrowUp } from "lucide-react"
import type { PortfolioContent } from "@/lib/portfolio-content"
import { Slogan, brandOf } from "@/components/ui/slogan"

export function SiteFooter({ content }: { content: PortfolioContent }) {
  const { home: { footer: copy } } = content
  const brand = brandOf(content)
  return <footer className="site-footer" id="footer" aria-label="Footer">
    <div className="footer-workspace-bar">
      <span className="footer-copyright">{copy.copyright}</span>
      <Slogan slogan={brand.slogan} className="footer-tagline" />
      <a href="#home" className="footer-back">{copy.top}<ArrowUp size={15} aria-hidden="true" /></a>
    </div>
  </footer>
}
