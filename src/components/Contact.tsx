const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const name = (form.querySelector('#name') as HTMLInputElement).value
    const email = (form.querySelector('#email') as HTMLInputElement).value
    const message = (form.querySelector('#message') as HTMLTextAreaElement).value

    const whatsappMessage = `*NEW PROJECT INQUIRY*%0A%0A
*Name:* ${name || 'Not provided'}%0A
*Email:* ${email || 'Not provided'}%0A%0A
*Message:* ${message || 'Not provided'}`

    const whatsappNumber = '2348101730524'
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

    window.open(whatsappUrl, '_blank')
    form.reset()
  }

  return (
    <>
      <style>{`
        .contact-section { padding: 2rem 1.5rem 1rem; max-width: 1450px; margin: 0 auto; }
        .contact-wrapper { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 2rem; align-items: start; }
        .contact-form-wrapper { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 1.5rem 2rem 2rem; }
        .contact-form-header { margin: 0 1rem 1rem 0; text-align: right; }
        .contact-form-header h2 { font-size: 1.5rem; font-weight: 800; }
        .contact-form .form-group { margin-bottom: 1.2rem; }
        .contact-form .form-group label { display: flex; align-items: center; gap: 7px; margin: 0 0 0.3rem 0.3rem; font-size: 0.7rem; color: var(--text-secondary); font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
        .contact-form .form-group input, .contact-form .form-group select, .contact-form .form-group textarea { width: 100%; padding: 0.6rem 0.8rem; background: var(--bg-elevated); border: 1px solid var(--border); border-radius: var(--radius-sm); color: var(--text-primary); font-family: 'PT Sans', sans-serif; font-size: 0.9rem; transition: all 0.3s; }
        .contact-form .form-group input:focus, .contact-form .form-group select:focus, .contact-form .form-group textarea:focus { outline: none; border-color: var(--accent); }
        .contact-form .form-group textarea::placeholder { color: var(--text-muted); }
        .contact-form textarea { resize: vertical; min-height: 100px; }
        .custom-select-wrapper { position: relative; }
        .custom-select-wrapper select { appearance: none; -webkit-appearance: none; -moz-appearance: none; cursor: pointer; padding-right: 2.5rem; }
        .custom-select-wrapper select option { background: var(--bg-card); color: var(--text-primary); }
        .custom-select-wrapper i { position: absolute; right: 1rem; top: 50%; transform: translateY(-50%); color: var(--text-secondary); pointer-events: none; font-size: 0.8rem; }
        .contact-items { display: flex; flex-direction: column; gap: 0.75rem; }
        .contact-item { background: var(--bg-elevated); border: 1px solid var(--border-lh); border-radius: var(--radius-md); padding: 1rem 1.25rem; transition: all 0.3s; }
        .contact-item:hover { border-color: var(--text-muted); }
        .contact-item-header { display: flex; align-items: center; gap: 1rem; }
        .contact-item-icon { width: 2.5rem; height: 2.5rem; min-width: 2.5rem; background: var(--bg-card); border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; border: 1px solid var(--border); }
        .contact-item-icon i { color: var(--accent); font-size: 1rem; }
        .contact-item-content { flex: 1; }
        .contact-item-content h4 { font-size: 1rem; font-weight: 700; margin-bottom: 0.15rem; }
        .contact-item-desc { color: var(--text-secondary); font-size: 0.85rem; line-height: 1.5; margin: 0; }
        .contact-item-btn { background: transparent; border: none; color: var(--text-secondary); padding: 0; width: 2.5rem; height: 2.5rem; min-width: 2.5rem; display: flex; align-items: center; justify-content: center; font-size: 1rem; cursor: pointer; transition: all 0.3s; flex-shrink: 0; border-radius: var(--radius-sm); text-decoration: none; }
        .contact-item-btn:hover { color: var(--accent); background: var(--bg-elevated); }
        .contact-item-btn i { margin: 0; }
        .form-status { margin-top: 1rem; padding: 0.75rem 1.5rem; border-radius: var(--radius-sm); font-size: 0.95rem; display: flex; align-items: center; gap: 10px; width: 100%; background: var(--bg-elevated); border: 1px solid var(--text-muted); color: var(--text-secondary); font-weight: 500; transition: all 0.3s; }
        .form-status i { color: var(--accent); flex-shrink: 0; }
        .form-status:hover { transform: translateY(-2px); box-shadow: var(--shadow-hover); }
        .contact-info { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 2rem; display: flex; flex-direction: column; gap: 1.5rem; }
        @media (max-width: 1024px) { .contact-wrapper { grid-template-columns: 1fr; } }
        @media (max-width: 768px) { .contact-section { padding: 30px 1rem 40px; } .contact-wrapper { gap: 1.5rem; } .contact-form-wrapper { padding: 1.5rem; } }
        @media (max-width: 540px) { .contact-info { display: none; } }
        @media (max-width: 480px) { .contact-form-wrapper { padding: 1rem; } .form-status { font-size: 0.85rem; padding: 0.5rem 0.75rem; gap: 6px; } }
      `}</style>
      
      <section id="contact" className="contact-section">
        <div className="section-header">
          <h2>Contact Page</h2>
          <p>Reach out and let's discuss how I can help build your next project, right from planning to deployment.</p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-form-wrapper">
            <div className="contact-form-header">
              <h2>Get in Touch</h2>
            </div>

            <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>
                  <i className="fas fa-user"></i> PROSPECT NAME
                </label>
                <input type="text" id="name" required />
              </div>
              <div className="form-group">
                <label>
                  <i className="fas fa-envelope"></i> EMAIL ADDRESS
                </label>
                <input type="email" id="email" required />
              </div>
              <div className="form-group">
                <label>
                  <i className="fas fa-comment"></i> PROJECT DETAILS
                </label>
                <textarea id="message" rows={3} required placeholder="Tell me about your project..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-submit">
                <i className="fas fa-paper-plane"></i> Send message
              </button>
              <div id="formStatus" className="form-status btn-outline">
                <i className="fas fa-info-circle"></i> You will be redirected to confirm your inquiry after submitting the form
              </div>
            </form>
          </div>

          <div className="contact-info">
            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-item-header">
                  <div className="contact-item-icon">
                    <i className="fas fa-file-pdf"></i>
                  </div>
                  <div className="contact-item-content">
                    <h4>Download Resumé</h4>
                    <p className="contact-item-desc">Get my complete resume featuring detailed work experience, technical skills, education background, and professional certifications.</p>
                  </div>
                  <a href="#" className="contact-item-btn" target="_blank" rel="noopener" title="Download CV">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-header">
                  <div className="contact-item-icon">
                    <i className="fas fa-clipboard-list"></i>
                  </div>
                  <div className="contact-item-content">
                    <h4>Discovery Form</h4>
                    <p className="contact-item-desc">Fill out a quick discovery form to help me understand your project requirements better and provide an accurate timeline and cost estimate.</p>
                  </div>
                  <a href="#" className="contact-item-btn" target="_blank" rel="noopener" title="Fill Project Brief">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-header">
                  <div className="contact-item-icon">
                    <i className="fas fa-handshake"></i>
                  </div>
                  <div className="contact-item-content">
                    <h4>Project Planning</h4>
                    <p className="contact-item-desc">Free initial consultation to discuss your project requirements, technical feasibility, and my proven process for delivering projects on time.</p>
                  </div>
                  <a href="https://wa.me/2348101730524" target="_blank" rel="noopener" className="contact-item-btn" title="Book Consultation">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact