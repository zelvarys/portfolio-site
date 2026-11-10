import type { PortfolioContent } from "@/lib/portfolio-content"
import { cn } from "@/lib/utils"

/** The brand line "Born to ~~live~~ create." */
export function brandOf(content: PortfolioContent) {
  return content.home.brand
}

export function Slogan({ slogan, className = "" }: { slogan: readonly string[]; className?: string }) {
  const [lead, struck, word] = slogan
  return <span className={cn("brand-slogan", className)}>
    {lead} <s>{struck}</s><span className="sr-only">,</span> <em>{word}</em>
  </span>
}
