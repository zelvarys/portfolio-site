import { ArrowUpRight, ExternalLink } from "lucide-react"
import type { Project } from "@/content/projects"
import type { PortfolioContent } from "@/lib/portfolio-content"
import { Image } from "@/components/ui/image"
import { ProjectCollection } from "./project-collection"

const technologyIcons: Record<string, string> = { "Gemini API": "googlegemini", "GitHub GraphQL": "github", Vite: "vite" }

function ProjectEntry({ project, index, content }: { project: Project; index: number; content: PortfolioContent }) {
  const copy = content.home.projects
  const [name, ...descriptor] = project.title.split(" – ")
  const previewHref = project.liveUrl ?? project.repoUrl
  const liveLabel = project.liveLabel ?? copy.live
  const preview = <>
    <Image src={project.image} alt={`${project.title} — ${copy.imageAltSuffix}`} fill sizes="(max-width: 700px) 90vw, (max-width: 1000px) 75vw, 65vw" />
    {previewHref && <span className="project-preview-open"><ArrowUpRight size={22} aria-hidden="true" /></span>}
  </>
  return <article className={`project-case project-case-tone-${index % 4}`} aria-labelledby={`project-${project.slug}`}>
    <div className="project-visual">
      <div className="project-visual-top"><span>{project.category}</span><span>{String(index + 1).padStart(2,"0")}</span></div>
      <span className="project-stage-name" aria-hidden="true">{name}</span>
      {previewHref
        ? <a className="project-preview" href={previewHref} target="_blank" rel="noopener noreferrer" aria-label={`${project.liveUrl ? liveLabel : copy.code}: ${project.title}`}>{preview}</a>
        : <div className="project-preview">{preview}</div>}
    </div>
    <div className="project-case-copy">
      <div className="project-case-meta"><span>{String(index + 1).padStart(2,"0")}</span><span>{project.category}</span></div>
      <h3 id={`project-${project.slug}`}>{project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">{name}<ArrowUpRight size={24} aria-hidden="true" /></a> : <span className="project-title-static">{name}</span>}</h3>
      {descriptor.length > 0 && <p className="project-subtitle">{descriptor.join(" – ")}</p>}
      <p className="project-summary">{project.summary}</p>
      <div className="project-built"><span>{copy.buildLabel}</span><ul>{project.technologies.slice(0,4).map(technology => {
        const icon = technologyIcons[technology] ?? content.heroLogos.find(mark => mark.name === technology)?.slug
        return <li key={technology}>{icon && <Image src={`icons/brands/${icon}.svg`} alt="" width={16} height={16} />}{technology}</li>
      })}{project.technologies.length > 4 && <li className="project-more-tools">+{project.technologies.length - 4}</li>}</ul></div>
      <div className="project-case-links">{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">{liveLabel}<ExternalLink size={13} aria-hidden="true" /></a>}{project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">{copy.code}<ExternalLink size={13} aria-hidden="true" /></a>}</div>
    </div>
  </article>
}

export function ProjectsSection({ content }: { content: PortfolioContent }) {
  const { projects, home: { projects: copy } } = content
  const featured = projects.filter(project => project.featured).slice(0, copy.featuredCount)
  const ordered = [...featured, ...projects.filter(project => !featured.some(selected => selected.slug === project.slug))]
  return <section className="projects-section" id="projects" aria-labelledby="projects-title"><div className="home-section projects-inner">
    <div className="section-kicker">{copy.index}</div>
    <div className="section-heading-row"><h2 className="section-title" id="projects-title">{copy.title[0]}{copy.title[1] && <><br /><span>{copy.title[1]}</span></>}</h2><p className="section-body">{copy.description}</p></div>
    <ProjectCollection copy={copy} entries={ordered.map((project,index) => ({ slug:project.slug, card:<ProjectEntry project={project} index={index} content={content} /> }))} />
  </div></section>
}
