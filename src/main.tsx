import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <Footer />
  </React.StrictMode>
)
