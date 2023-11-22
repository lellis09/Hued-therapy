import Image from 'next/image'
import Link from 'next/link'
import Button from './users/button'
import Hero from './components/Hero'
import HelpCards from './components/HelpCards'
import WorkWithCards from './components/WorkWithCards'

export default function Home() {
  return (
    <main className="bg-lightpurple">
     
      <Hero />
      <HelpCards />
      <WorkWithCards />


    </main>
    
  )
}
