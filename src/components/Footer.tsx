import { useEffect } from 'react'

const Footer = () => {
  useEffect(() => {
    document.getElementById('year').textContent = new Date().getFullYear().toString()
  }, [])
  return (
    <>
      <style>{`
        .footer { background: var(--bg-secondary); border-top: 1px solid var(--border); margin-top: 2rem; }
        .footer-container { padding: 1.5rem; display: grid; grid-template-columns: 0.3fr 1fr 1fr 0.7fr; gap: 2rem; max-width: 1350px; margin: 0 auto; }
        .footer-container img { width: 32px; justify-self: center; align-self: center; }
        .footer-brand p { color: var(--text-secondary); font-size: 0.8rem; margin: 0 0 0.5rem; max-width: 300px; }
        .social-links { display: flex; gap: 1rem; }
        .social-links a { color: var(--text-secondary); font-size: 1rem; transition: color 0.3s; }
        .social-links a:hover { color: var(--accent); }
        .footer-links h4, .footer-contact h4 { font-size: 0.9rem; font-weight: 700; margin-bottom: 0.5rem; }
        .footer-links a { display: inline-block; color: var(--text-secondary); text-decoration: none; font-size: 0.8rem; margin-right: 1.5rem; margin-bottom: 0.3rem; transition: color 0.3s; }
        .footer-links a:hover { color: var(--accent); }
        .footer-contact p { display: block; color: var(--text-secondary); text-decoration: none; font-size: 0.8rem; margin-bottom: 0.3rem; }
        .footer-contact p i { width: 20px; margin-right: 6px; }
        .footer-bottom { text-align: center; padding: 0.75rem; border-top: 1px solid var(--border); font-size: 0.8rem; font-weight: 600; color: var(--text-muted); }
        @media (max-width: 768px) { .footer-container { grid-template-columns: 1fr; padding: 1.5rem 1rem; gap: 1.5rem; } .footer-container img { justify-self: start; } .footer-links a { display: block; } }
      `}</style>
      <footer className="footer">
        <div className="footer-container">
          <img src="/portfolio/assets/favicon.svg" alt="Zelvarys" />
          <div className="footer-brand">
            <p>Software developer building clean and efficient solutions.</p>
            <div className="social-links">
              <a href="https://github.com/zelvarys" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="mailto:me.zelvarys@gmail.com" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="https://wa.me/2348101730524" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://discord.gg/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-discord"></i>
              </a>
            </div>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-contact">
            <h4>Contact</h4>
            <p>
              <i className="fas fa-phone"></i> +234 810 173 0524
            </p>
            <p>
              <i className="fas fa-map-marker-alt"></i> Ondo State, &nbsp;Nigeria
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; <span id="year"></span> Zelvarys. &nbsp;All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer