import Image from 'next/image'
import Link from 'next/link'
import Button from './users/button'
import Hero from './components/Hero'
import HelpCards from './components/HelpCards'
import WorkWithCards from './components/WorkWithCards'
import HomeWorkWith from './components/HomeWorkWith'
import CallToAction from './components/CallToAction'

export default function Home() {
  return (
    <main className="bg-lightpurple">
     
      <Hero />
      <HelpCards />
      <HomeWorkWith />
      <CallToAction />


    </main>
    
  )
}
