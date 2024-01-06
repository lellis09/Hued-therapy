import React from 'react'
import Hero from '../components/Hero'
import MyBackground from '../components/MyBackground'
import MyStory from '../components/MyStory'
import HowICan from '../components/HowICan'
import GettingStarted from '../components/GettingStarted'
import CallToAction from '../components/CallToAction'
import NavBarMenu from '../components/NavBar'
import AboutHero from '../components/AboutHero'

const Aboutpage = () => {
  return (
    <main>
     
      <AboutHero />
      <MyStory />
      <MyBackground />
      <HowICan />
      <GettingStarted />
      <CallToAction />
    </main>
  )
}

export default Aboutpage