import React from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Services from './components/sections/Services'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'

const App = () => {
  return (
    <div className='min-h-screen bg-[#030712] text-white relative selection:bg-primary/30'>
      
      {/* Background Ambient Glows - যা পুরো সাইটকে প্রিমিয়াম লুক দেবে */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[40%] bg-blue-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Services />
          <Testimonials />
          <Contact />
        </main>
        <Footer/>
      </div>
    </div>
  )
}

export default App