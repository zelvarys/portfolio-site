import { ArrowDownRight, ArrowDownToLine, ArrowUpRight, Mail } from "lucide-react"
import type { PortfolioContent } from "@/lib/portfolio-content"

export function PortfolioHero({ content }: { content: PortfolioContent }) {
  const { profile, home: { hero: copy, about } } = content
  return (
    <section className="portfolio-hero" id="home" aria-labelledby="hero-title">
      <div className="hero-v3-shell">
        <div className="hero-v3-main">
          <div className="hero-v3-top">
            <span>{profile.jobTitle}</span>
            <span className="hero-v3-status"><i aria-hidden="true" />{profile.availableForWork ? copy.availability : copy.unavailable}</span>
          </div>

          <div className="hero-v3-headline">
            <h1 id="hero-title">{copy.headline[0]} {copy.headline[1]} <em>{copy.headline[2]}</em></h1>
            <div className="hero-v3-intro">
              <p>{copy.description}</p>
              <div className="hero-v3-actions">
                <a href="#projects" className="hero-v3-primary">{copy.workLink}<ArrowDownRight size={18} aria-hidden="true" /></a>
                <a href="#contact" className="hero-v3-secondary">{copy.connectLink}<ArrowUpRight size={18} aria-hidden="true" /></a>
              </div>
            </div>
          </div>

          <div className="hero-v3-roles" aria-label="What I do">
            {copy.focus.items.map((item, index) => <article key={item.title}>
              <h2><span>{String(index + 1).padStart(2, "0")}</span>{item.title}</h2>
              <p>{item.detail}</p>
            </article>)}
          </div>

          <div className="hero-v3-about">
            <div className="about-bio hero-v3-bio">{profile.bio.slice(0, 2).map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
            <div className="hero-v3-aside">
              <div className="about-contact-row">
                <a href={profile.cv} target="_blank" rel="noopener noreferrer">{about.cv}<ArrowDownToLine size={16} aria-hidden="true" /></a>
                <a href={`mailto:${profile.email}`}>{about.email}<Mail size={16} aria-hidden="true" /></a>
                <a href={profile.links.github} target="_blank" rel="noopener noreferrer">{about.githubProfile}<ArrowUpRight size={16} aria-hidden="true" /></a>
              </div>
            </div>
            <div className="about-bio hero-v3-bio-wide">{profile.bio.slice(2).map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
          </div>
        </div>
      </div>

      <div className="hero-footnote hero-v3-foot"><span>{copy.footnote}</span></div>
    </section>
  )
}
