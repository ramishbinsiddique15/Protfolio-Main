import React, { useEffect } from 'react'
import Hero from './Hero'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Projects from './Projects'
import Experience from './Experience'
import Contact from './Contact'
const Home = () => {
  useEffect(() => {
    document.title = 'Ramish Bin Siddique';
    
  }, []);
  return (
    <>
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  )
}

export default Home