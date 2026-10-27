const Hero = () => {
  const stats = [
    { number: '5+', label: 'Projects' },
    { number: '2yrs', label: 'Experience' },
    { number: '13', label: 'Stacks' },
    { number: '100%', label: 'Satisfied' },
    { number: '24/7', label: 'Support' },
  ]

  const skills = [
    {
      icon: 'fa-server',
      title: 'Backend Development',
      description: 'RESTful APIs, authentication, database design, and scalable server architectures',
    },
    {
      icon: 'fa-cloud',
      title: 'DevOps & Deployment',
      description: 'CI/CD pipelines, containerization, cloud hosting, and infrastructure management',
    },
    {
      icon: 'fa-laptop-code',
      title: 'Frontend Engineering',
      description: 'Responsive interfaces, state management, and optimized user experiences',
    },
    {
      icon: 'fa-robot',
      title: 'Automation',
      description: 'Process scripting, data processing, web scraping, and workflow automation',
    },
  ]

  return (
    <>
      <style>{`
        .badge { background: var(--bg-elevated); padding: 0.3rem 0.75rem; border-radius: var(--radius-sm); font-size: 0.75rem; color: var(--accent); border: 1px solid var(--border); width: fit-content; text-transform: uppercase; letter-spacing: 0.5px; }
        .hero-section { min-height: 100vh; display: flex; flex-direction: column; justify-content: center; padding: 80px 1.5rem 40px; max-width: 1400px; margin: 0 auto; }
        .hero-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 2.5rem; align-items: center; width: 100%; }
        .hero-content { display: flex; flex-direction: column; gap: 1.5rem; max-width: 600px; }
        .hero-title { font-size: 1.9rem; font-weight: 700; line-height: 1.15; text-align: justify; }
        .hero-description { color: var(--text-secondary); font-size: 1.15rem; line-height: 1.7; text-align: justify; }
        .hero-image-mobile { display: none; width: 100%; max-width: 300px; height: auto; margin: 0 auto; }
        .hero-buttons { display: flex; gap: 1rem; flex-wrap: wrap; }
        .hero-buttons .btn { font-size: 1.05rem; padding: 0.7rem 1.8rem; }
        .hero-stats { display: flex; gap: 1.5rem; margin-top: 1rem; border-top: 1px solid var(--border); flex-wrap: wrap; }
        .stat { display: flex; flex-direction: column; background: var(--bg-elevated); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 0.5rem 1.2rem; min-width: 80px; align-items: center; flex-grow: 1; }
        .stat-number { font-size: 1.4rem; font-weight: 700; color: var(--text-primary); }
        .stat-label { font-size: 0.8rem; color: var(--text-muted); }
        .hero-visual { display: flex; justify-content: center; align-items: center; flex-shrink: 0; }
        .hero-image { max-width: 100%; width: 450px; height: auto; flex-shrink: 0; }
        .skills-summary { width: 100%; margin-top: 3rem; }
        .skills-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
        .skill-item { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 1rem 1.5rem; text-align: left; transition: all 0.3s; }
        .skill-item:hover { border-color: var(--text-muted); }
        .skill-title { display: inline-flex; gap: 0.75rem; align-items: center; margin-bottom: 0.3rem; }
        .skill-title i { font-size: 1.2rem; color: var(--accent); }
        .skill-title h3 { font-size: 0.85rem; }
        .skill-item p { color: var(--text-secondary); font-size: 0.8rem; }
        @media (max-width: 1024px) { .badge { display: none; } .hero-grid { grid-template-columns: 1fr; text-align: center; gap: 2rem; } .hero-content { align-items: center; max-width: none; } .hero-description { max-width: 100%; } .hero-stats { justify-content: center; } .hero-buttons { justify-content: center; } .hero-visual { display: none; } .hero-title { display: none; } .hero-image-mobile { display: block; } .hero-section { min-height: auto; } .skills-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 768px) { .hero-grid { gap: 1.5rem; } .hero-description { font-size: 1rem; } .hero-stats { gap: 0.75rem; border-top: none; padding-top: 0; margin-top: 0; } .stat { padding: 0.5rem 1rem; min-width: 70px; } .stat-number { font-size: 1.2rem; } .stat-label { font-size: 0.65rem; } .hero-buttons { flex-direction: row; justify-content: center; width: 100%; } .hero-buttons .btn { font-size: 0.95rem; padding: 0.6rem 1.5rem; flex: 1; justify-content: center; max-width: 200px; } .skills-summary { margin-top: 2rem; } .skills-grid { grid-template-columns: 1fr; gap: 0.85rem; } }
        @media (max-width: 480px) { .hero-section { padding: 70px 1rem 20px; } .hero-description { font-size: 0.95rem; } .hero-buttons { flex-direction: row; gap: 0.75rem; } .hero-buttons .btn { font-size: 0.85rem; padding: 0.5rem 1rem; max-width: 160px; } .hero-stats { gap: 0.5rem; } .stat { min-width: 60px; padding: 0.4rem 0.75rem; } .stat-number { font-size: 1rem; } .stat-label { font-size: 0.6rem; } .skills-summary { margin-top: 1.5rem; } }
      `}</style>
      <section id="home" className="hero-section">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="badge">Software Developer</div>
            <h1 className="hero-title">
              Building <span className="gradient">practical and reliable</span> solutions from complex requirements
            </h1>
            <img src="/portfolio/assets/banner.png" alt="Developer illustration" className="hero-image-mobile" />
            <p className="hero-description">
              Software developer with 2+ years of experience architecting and deploying production-grade applications. I focus on writing clean, maintainable code that solves real problems and performs reliably under load.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                <i className="fas fa-rocket"></i> View my projects
              </a>
              <a href="#contact" className="btn btn-outline">
                <i className="fas fa-comment"></i> Let's connect
              </a>
            </div>
            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div className="stat" key={index}>
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-visual">
            <img src="/portfolio/assets/banner.png" alt="Developer illustration" className="hero-image" />
          </div>
        </div>
        <div className="skills-summary">
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-title">
                  <i className={`fas ${skill.icon}`}></i>
                  <h3>{skill.title}</h3>
                </div>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero