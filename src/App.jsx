import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './Components/Header'
import Stack from './Components/Stack'
import About from './Components/About'
import Projects from './Components/Projects'
import Experience from './Components/Experience'
import Links from './Components/Links'
import Loader from './Components/Loader'
import Certifications from './Components/Certifications'

function App() {

  return (
    <>
      <Loader />
      <Header />
      <About />
      <Links />
      <Stack />
      <Experience />
      <Projects />
      <Certifications />
    </>
  )
}

export default App
