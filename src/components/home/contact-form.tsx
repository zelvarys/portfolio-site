import { useState, type FormEvent } from "react"
import { LoaderCircle, Send } from "lucide-react"
import { profile } from "@/content/profile"
import type { HomepageCopy } from "@/content/home"

export function ContactForm({ copy }: { copy: HomepageCopy["contact"]["form"] }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle")
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === "sending") return
    const data = new FormData(event.currentTarget)
    const name = String(data.get("name") ?? "")
    const email = String(data.get("email") ?? "")
    const message = String(data.get("message") ?? "")
    const body = encodeURIComponent(`*Name*: ${name}\n*Email:* ${email}\n\n*Purpose*: ${message}`)
    setStatus("sending")
    window.location.href = `${profile.links.whatsapp}?text=${body}`
    window.setTimeout(() => setStatus("success"), 400)
  }
  return <form className="portfolio-contact-form" onSubmit={submit} aria-busy={status === "sending"}>
    <div className="form-field"><input id="contact-name" name="name" aria-label={copy.name} autoComplete="name" required maxLength={200} placeholder={copy.namePlaceholder} disabled={status === "sending"} /></div>
    <div className="form-field"><input id="contact-email" name="email" type="email" aria-label={copy.email} autoComplete="email" required maxLength={200} placeholder={copy.emailPlaceholder} disabled={status === "sending"} /></div>
    <div className="form-field form-message"><label htmlFor="contact-message">{copy.message}</label><textarea id="contact-message" name="message" required maxLength={5000} rows={4} placeholder={copy.messagePlaceholder} disabled={status === "sending"} /></div>
    <div className="form-bottom"><button type="submit" disabled={status === "sending"}>{status === "sending" ? copy.sending : copy.submit}{status === "sending" ? <LoaderCircle size={18} className="contact-spinner" aria-hidden="true" /> : <Send size={16} aria-hidden="true" />}</button></div>
    <p className={`form-status form-status-${status}`} role="status" aria-live="polite">{status === "success" ? copy.success : ""}</p>
  </form>
}
