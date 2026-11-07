import { Check, Code2, Map, Rocket, Search } from "lucide-react"
import type { PortfolioContent } from "@/lib/portfolio-content"

type Props = { steps: PortfolioContent["process"]; copy: PortfolioContent["processPresentation"] }

const icons = [Search, Map, Code2, Rocket]

export function ProcessTimeline({ steps, copy }: Props) {
  return <div className="process-timeline">
    <div className="process-timeline-label">
      <span>{copy.exploreLabel}</span>
      <span>{String(steps.length).padStart(2, "0")} stages</span>
    </div>
    <ol className="process-steps" aria-label={copy.tabsLabel}>
      {steps.map((step, index) => {
        const Icon = icons[index % icons.length]
        return <li className={`process-step process-step-${index + 1}`} key={step.title}>
          <div className="process-step-head">
            <span className="process-step-number">{String(index + 1).padStart(2, "0")}</span>
            <span className="process-step-icon"><Icon size={20} strokeWidth={1.6} aria-hidden="true" /></span>
          </div>
          <span className="process-step-label">{step.title}</span>
          <h3>{step.headline}</h3>
          <p>{step.description}</p>
          <ul>{step.outcomes.map(outcome => <li key={outcome}><Check size={14} aria-hidden="true" />{outcome}</li>)}</ul>
          <div className="process-step-result">
            <span>{copy.outcomeLabel}</span>
            <p>{step.result}</p>
          </div>
        </li>
      })}
    </ol>
  </div>
}
