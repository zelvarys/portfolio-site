import { site } from "@/content/site"
import { profile } from "@/content/profile"
import { homeContent, heroLogos } from "@/content/home"
import { projects } from "@/content/projects"
import { skillGroups } from "@/content/skills"
import { process, processPresentation, faqs } from "@/content/services"
import { skillGraph } from "@/content/skill-graph"
import { outsideContent, capabilitiesContent } from "@/content/journey"
import { galleryContent } from "@/content/gallery"

/** Static content for the single-page portfolio. */
export function getPortfolioContent() {
  return {
    site,
    profile,
    home: homeContent,
    projects,
    heroLogos,
    skillGroups,
    gallery: galleryContent,
    process,
    processPresentation,
    faqs,
    skillGraph,
    outside: outsideContent,
    capabilities: capabilitiesContent,
  }
}

export type PortfolioContent = ReturnType<typeof getPortfolioContent>
