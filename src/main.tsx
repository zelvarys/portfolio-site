import React from 'react'
import ReactDOM from 'react-dom/client'

import '@fontsource/jetbrains-mono/latin-400.css'
import '@fontsource/jetbrains-mono/latin-500.css'
import '@fontsource/jetbrains-mono/latin-600.css'

import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <a
      href="#home"
      className="sr-only rounded-md bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60]"
    >
      Skip to content
    </a>
    <Header />
    <main>
      <Hero />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </React.StrictMode>
)
