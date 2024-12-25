import React from 'react'
import Hero from '../components/Hero'
import Second from '../components/SubComponents/Second'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Team from '../components/Team'
import Blogs from '../components/Blogs'
// import gsap from 'gsap'

function Homep() {

 

  return (
    <div>
        <Hero />
        <Second />
        <About />
        <Portfolio />
        <Services />
        <Testimonials />
        <Team />
        <Blogs />
    </div>
  )
}

export default Homep