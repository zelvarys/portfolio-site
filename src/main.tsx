import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { PortfolioHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { ContactSection } from "@/components/home/contact"
import { FaqSection } from "@/components/home/faq"
import { PortfolioHero } from "@/components/home/hero"
import { OutsideIdeSection } from "@/components/home/outside-ide"
import { ProcessSection } from "@/components/home/process-section"
import { ProjectsSection } from "@/components/home/projects"
import { ServicesSection } from "@/components/home/services"
import { getPortfolioContent } from "@/lib/portfolio-content"
import "./index.css"

const content = getPortfolioContent()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PortfolioHeader content={content} />
    <main>
      <PortfolioHero content={content} />
      <ProjectsSection content={content} />
      <ServicesSection content={content} />
      <ProcessSection content={content} />
      <OutsideIdeSection content={content} />
      <FaqSection content={content} />
      <ContactSection content={content} />
    </main>
    <SiteFooter content={content} />
  </StrictMode>,
)
