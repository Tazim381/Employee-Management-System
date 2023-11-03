import React from 'react'
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'

const AboutPage = () => {
  return (
    <div>
    <Home/>
    <About/>
    <div id="contact">
    <Contact/>
    </div>
    </div>
  )
}

export default AboutPage