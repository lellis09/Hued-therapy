import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import Button from './users/button'
import Hero from './components/Hero'
import HelpCards from './components/HelpCards'
import WorkWithCards from './components/WorkWithCards'
import HomeWorkWith from './components/HomeWorkWith'
import CallToAction from './components/CallToAction'
// import Page from './users/page'
import NavBarMenu from './components/NavBar'
import Footer from './components/Footer'

const Home = () => {
  return (
    <main className="bg-lightpurple">
      <NavBarMenu />
      <Hero />
      <HelpCards />
      <HomeWorkWith />
      <CallToAction />
      <Footer />
      


    </main>
  )
}

export default Home