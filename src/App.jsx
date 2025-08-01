import React from 'react'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import About from './Component/About'
import Experience from './Component/Experience'
import Projects from './Component/Projects'
import Contact from './Component/Contact'
function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Hero></Hero>
    <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Contact/>
    </div>
  )
}

export default App
