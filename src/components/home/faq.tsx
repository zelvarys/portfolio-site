import { Plus } from "lucide-react"
import type { PortfolioContent } from "@/lib/portfolio-content"

export function FaqSection({ content }: { content: PortfolioContent }) {
  const { faqs } = content
  const columns = [faqs.slice(0, 3), faqs.slice(3)]
  return <section className="faq-section" id="faq" aria-label="FAQs"><div className="home-section faq-shell"><div className="faq-content"><div className="faq-columns">{columns.map((column, columnIndex) => <div className="faq-column" key={columnIndex}>{column.map((faq, index) => { const number = columnIndex === 0 ? index + 1 : 4 + index; return <details name="portfolio-faq" className="faq-item" key={faq.question}><summary><span className="faq-number">{String(number).padStart(2, "0")}</span><h3>{faq.question}</h3><span className="faq-icon"><Plus size={17} aria-hidden="true" /></span></summary><div className="faq-answer"><div><p>{faq.answer}</p></div></div></details> })}</div>)}</div></div></div></section>
}
