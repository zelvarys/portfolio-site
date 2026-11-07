import { Image } from "@/components/ui/image"
import { ArrowUpRight, ChessKnight, Languages, Users } from "lucide-react"
import type { PortfolioContent } from "@/lib/portfolio-content"

export function OutsideIdeSection({ content }: { content: PortfolioContent }) {
  const copy = content.outside
  const categoryIcons = [Languages, Users, ChessKnight]
  return <section className="home-section outside-section" id="outside-the-ide" aria-labelledby="outside-title">
    <header className="outside-heading">
      <div><p className="section-kicker">{copy.kicker}</p><h2 className="section-title" id="outside-title">{copy.title}</h2></div>
      <p className="section-body">{copy.description}</p>
    </header>
    <div className="outside-topics">{copy.categories.map((label, index) => {
      const Icon = categoryIcons[index % categoryIcons.length]
      return <span key={label}><Icon size={16} strokeWidth={1.5} aria-hidden="true" />{label}</span>
    })}<span className="outside-side-note">{copy.sideNote}</span></div>
    <div className="outside-stories">{copy.stories.map((story, index) => <article className={`outside-story outside-story-${index % 2}`} key={story.id}>
      <figure className="outside-photo">
        <div className="outside-image"><Image src={story.image} alt={story.imageAlt} fill sizes="(max-width: 700px) 90vw, 48vw" style={{ objectPosition: story.imagePosition }} /></div>
        <figcaption><span>{String(index + 1).padStart(2, "0")}</span>{story.caption}</figcaption>
      </figure>
      <div className="outside-story-copy">
        <span className="outside-category">{story.category}</span>
        <h3>{story.title}</h3><p>{story.body}</p>
        {story.link && <a className="text-link" href={story.link.href}>{story.link.label}<ArrowUpRight size={17} aria-hidden="true" /></a>}
        {story.preview && <span className="journey-preview">{copy.previewLabel}</span>}
      </div>
    </article>)}</div>
  </section>
}
