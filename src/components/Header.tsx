import { useState, useEffect } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('home')

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    const icon = document.querySelector('.menu-toggle i')
    if (icon) {
      icon.className = !isOpen ? 'fas fa-times' : 'fas fa-bars'
    }
  }

  const closeMenu = () => {
    setIsOpen(false)
    const icon = document.querySelector('.menu-toggle i')
    if (icon) {
      icon.className = 'fas fa-bars'
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'contact']
      const scrollPosition = window.scrollY + 120

      sections.forEach((id) => {
        const section = document.getElementById(id)
        if (section) {
          const top = section.offsetTop
          const height = section.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveLink(id)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['home', 'projects', 'contact']

  return (
    <>
      <style>{`
        .header { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; background: rgba(7, 7, 10, 0.95); backdrop-filter: blur(12px); border-bottom: 1px solid var(--border); }
        .nav { max-width: 1400px; margin: 0 auto; padding: 0.5rem 1.5rem; border-bottom: 1px solid var(--border); }
        .nav-container { display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 0; }
        .logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }
        .logo span { font-weight: 700; font-size: 1.3rem; background: linear-gradient(135deg, #9ca3af, #d1d5db); -webkit-background-clip: text; background-clip: text; color: transparent; text-transform: uppercase; }
        .menu-toggle { display: none; background: none; border: none; color: var(--text-primary); font-size: 1.5rem; cursor: pointer; padding: 4px; }
        .nav-links { display: flex; gap: 2.5rem; list-style: none; }
        .nav-links a { color: var(--text-secondary); text-decoration: none; font-weight: 500; font-size: 0.95rem; transition: all 0.3s; position: relative; }
        .nav-links a::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 2px; background: linear-gradient(135deg, #9ca3af, #d1d5db); transition: all 0.3s; }
        .nav-links a:hover::after, .nav-links a.active::after { width: 100%; }
        .nav-links a:hover, .nav-links a.active { color: var(--text-primary); }
        .nav-mobile { display: none; background: rgba(7, 7, 10, 0.98); max-height: 0; overflow: hidden; transition: max-height 0.3s ease; }
        .nav-mobile.open { display: block; max-height: 300px; }
        .nav-links-mobile { list-style: none; padding: 0.5rem 0; max-width: 1400px; margin: 0 auto; }
        .nav-links-mobile li { width: 100%; }
        .nav-links-mobile a { display: block; padding: 0.5rem 1rem; color: var(--text-secondary); text-decoration: none; font-weight: 500; font-size: 1rem; transition: all 0.3s; }
        .nav-links-mobile a.active { background: var(--bg-elevated); }
        @media (max-width: 768px) { .nav-container { padding: 0.3rem 0; } .menu-toggle { display: block; } .nav-links { display: none; } .nav-mobile.open { display: block; max-height: 300px; } }
      `}</style>
      
      <header className="header">
        <div className="nav">
          <div className="nav-container">
            <a href="#home" className="logo">
              <span>Zelvarys</span>
            </a>
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className={activeLink === item ? 'active' : ''}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
            <button className="menu-toggle" onClick={toggleMenu}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
        <div className={`nav-mobile ${isOpen ? 'open' : ''}`} id="navMobile">
          <ul className="nav-links-mobile">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className={activeLink === item ? 'active' : ''}
                  onClick={closeMenu}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header