import { profile } from "@/content/profile"
import { homeContent, heroLogos } from "@/content/home"
import { projects } from "@/content/projects"
import { process, processPresentation, faqs } from "@/content/services"
import { outsideContent, capabilitiesContent } from "@/content/journey"

/** Static content for the single-page portfolio. */
export function getPortfolioContent() {
  return {
    profile,
    home: homeContent,
    projects,
    heroLogos,
    process,
    processPresentation,
    faqs,
    outside: outsideContent,
    capabilities: capabilitiesContent,
  }
}

export type PortfolioContent = ReturnType<typeof getPortfolioContent>
