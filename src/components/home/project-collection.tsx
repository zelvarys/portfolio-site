import { useState, type ReactNode } from "react"
import { ArrowDownRight, ArrowUpRight } from "lucide-react"
import type { PortfolioContent } from "@/lib/portfolio-content"

type Entry = { slug: string; card: ReactNode }
export function ProjectCollection({ entries, copy }: { entries: Entry[]; copy: PortfolioContent["home"]["projects"] }) {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? entries : entries.slice(0, copy.featuredCount)
  const visibleIds = new Set(visible.map(entry => entry.slug))
  return <div className="project-collection">
    <div className="project-gallery">{entries.map(entry => {
      const position = visible.findIndex(item => item.slug === entry.slug)
      return <div className="project-gallery-item" key={entry.slug} hidden={!visibleIds.has(entry.slug)} data-wide={position % 3 === 0}>{entry.card}</div>
    })}</div>
    {entries.length > copy.featuredCount && <button className="project-expand" type="button" aria-expanded={expanded} onClick={() => setExpanded(value => !value)}><span>{expanded ? copy.archiveClose : copy.archive}<small>{entries.length} {copy.allLabel}</small></span>{expanded ? <ArrowUpRight size={24} aria-hidden="true" /> : <ArrowDownRight size={24} aria-hidden="true" />}</button>}
  </div>
}
