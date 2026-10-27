import { useEffect } from 'react'

interface Project {
  icon: string
  title: string
  description: string
  tags: string[]
  github: string
  live: string
}

const projects: Project[] = [
  {
    icon: 'fa-cloud-download',
    title: 'Media Downloader API',
    description: 'RESTful API to download media from YouTube, TikTok, Instagram, and Facebook using FastAPI and yt-dlp with support for multiple video qualities, audio extraction, and batch processing.',
    tags: ['Python', 'FastAPI', 'yt-dlp', 'HTTPX'],
    github: 'https://github.com/zelvarys/media-downloader',
    live: 'https://api.zelvarys.dev/media',
  },
  {
    icon: 'fa-comment-dots',
    title: 'Python WhatsApp Bot',
    description: 'General-purpose WhatsApp bot built with PyWA for handling messages, commands, and interactive responses with auto-reply, command parsing, and custom callback queries.',
    tags: ['Python', 'PyWA', 'WhatsApp', 'asyncio'],
    github: 'https://github.com/zelvarys/',
    live: '#',
  },
  {
    icon: 'fa-robot',
    title: 'Automation Suite',
    description: 'Python automation scripts for web scraping, data processing, and task scheduling with cron-based execution, logging, and modular work flows for extracting data from multiple sources.',
    tags: ['Python', 'Selenium', 'Cron', 'Pandas'],
    github: 'https://github.com/zelvarys/',
    live: '#',
  },
  {
    icon: 'fa-cloud',
    title: 'Deployment Pipeline',
    description: 'CI/CD pipeline with automated testing, building, and deployment to Vercel and cloud platforms using GitHub Actions with multi-environment support and automated rollbacks.',
    tags: ['Docker', 'GitHub Actions', 'Vercel', 'AWS'],
    github: 'https://github.com/zelvarys/',
    live: '#',
  },
  {
    icon: 'fa-database',
    title: 'Data Processing Tool',
    description: 'ETL pipeline for large datasets using Python, SQLAlchemy, Pandas, and Redis caching with data validation, transformation, and aggregation across multiple database backends.',
    tags: ['Python', 'SQLAlchemy', 'Pandas', 'Redis'],
    github: 'https://github.com/zelvarys/',
    live: '#',
  },
  {
    icon: 'fa-mobile-alt',
    title: 'Modern Brand Website',
    description: 'Responsive brand website built with React and TypeScript featuring dark mode, smooth animations, and optimized performance with SEO optimization and component-based architecture.',
    tags: ['TypeScript', 'React', 'CSS', 'Vite'],
    github: 'https://github.com/zelvarys/brand-website',
    live: 'https://zelvarys.github.io/portfolio',
  },
]

const Projects = () => {
  useEffect(() => {
    const grid = document.getElementById('projectsGrid')
    if (!grid) return

    grid.innerHTML = projects
      .map(
        (project) => `
      <div class="project-card">
        <div class="project-header">
          <div class="project-icon">
            <i class="fas ${project.icon}"></i>
          </div>
          <h3>${project.title}</h3>
        </div>
        <div class="project-body">
          <p>${project.description}</p>
          <div class="project-tags">
            ${project.tags.map((tag) => `<span>${tag}</span>`).join('')}
          </div>
        </div>
        <div class="project-footer">
          <a href="#" class="btn-link">View Details <i class="fas fa-arrow-right"></i></a>
          <div class="project-links">
            <a href="${project.github}" target="_blank" rel="noopener"><i class="fab fa-github"></i></a>
            <a href="${project.live}" target="_blank" rel="noopener"><i class="fas fa-external-link-alt"></i></a>
          </div>
        </div>
      </div>
    `
      )
      .join('')
  }, [])

  return (
    <>
      <style>{`
        .projects-section { padding: 1.5rem 1rem 0.5rem; max-width: 1450px; margin: 0 auto; }
        .section-header { margin: 0 0 1.5rem 1rem; }
        .section-header h2 { font-size: 1.75rem; font-weight: 800; }
        .section-header p { color: var(--text-secondary); font-size: 0.95rem; }
        .projects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .project-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-md); overflow: hidden; transition: all 0.3s; display: flex; flex-direction: column; }
        .project-card:hover { border-color: var(--text-muted); box-shadow: var(--shadow-hover); }
        .project-header { padding: 1.25rem 1.5rem 0.5rem; display: flex; align-items: center; gap: 1rem; }
        .project-icon { width: 2.5rem; height: 2.5rem; background: var(--bg-elevated); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; border: 1px solid var(--border); flex-shrink: 0; transition: all 0.3s; }
        .project-card:hover .project-icon { border-color: var(--text-muted); }
        .project-icon i { font-size: 1.2rem; color: var(--accent); }
        .project-header h3 { font-size: 1rem; font-weight: 700; }
        .project-body { padding: 0 1.5rem; flex: 1; display: flex; flex-direction: column; }
        .project-body p { color: var(--text-secondary); font-size: 0.85rem; line-height: 1.6; margin-bottom: 1rem; }
        .project-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border); }
        .project-tags span { background: var(--bg-elevated); padding: 0.2rem 0.7rem; border-radius: var(--radius-sm); font-size: 0.7rem; color: var(--accent); border: 1px solid var(--border-lh); }
        .project-footer { padding: 0.75rem 1.5rem 0.75rem 1.75rem; display: flex; justify-content: space-between; align-items: center; }
        .project-footer .btn-link { color: var(--accent); text-decoration: none; font-size: 0.85rem; font-weight: 600; display: flex; gap: 6px; align-items: center; }
        .project-footer .btn-link i { transition: all 0.3s; }
        .project-footer .btn-link:hover i { transform: translateX(4px); }
        .project-links { display: flex; gap: 0.6rem; }
        .project-links a { color: var(--text-secondary); text-decoration: none; font-size: 0.9rem; padding: 0.2rem 0.75rem; border: 1px solid var(--border); border-radius: var(--radius-sm); transition: all 0.3s; background: var(--bg-elevated); }
        .project-card:hover .project-links a { border-color: var(--text-muted); }
        .cta-section { background: var(--bg-card); border-radius: var(--radius-lg); padding: 1.5rem 1rem 1.2rem; text-align: center; margin: 1rem auto 3rem; max-width: 1400px; }
        .cta-content h2 { font-size: 1.25rem; }
        .cta-content p { color: var(--text-secondary); margin-bottom: 1rem; font-size: 0.9rem; }
        @media (max-width: 1024px) { .projects-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 768px) { .section-header { margin: 0 0 1.5rem 0; } .section-header h2 { font-size: 1.6rem; } .projects-grid { grid-template-columns: 1fr; gap: 1rem; } .cta-section { margin: 2rem 1rem; } }
      `}</style>
      
      <section id="projects" className="projects-section">
        <div className="section-header">
          <h2>Projects Archive</h2>
          <p>
            Diverse collection of projects that showcase my ability to build
            and maintain production-ready software.
          </p>
        </div>
        <div className="projects-grid" id="projectsGrid"></div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Got a project in mind?</h2>
          <p>Let's collaborate and build something great together.</p>
          <a href="#contact" className="btn btn-primary">
            <i className="fas fa-comment"></i> Let's talk
          </a>
        </div>
      </section>
    </>
  )
}

export default Projects