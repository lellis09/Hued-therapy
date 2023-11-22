import React from 'react'
import Image from 'next/image' 
import calmingpic from '../public/calmingpic.jpg'
import NavBarMenu from './NavBar'

const Hero = () => {
  return (
    <div>
       <NavBarMenu />
      <section className=' md:flex pl-9 pr-4 h-screen'>
      <div className=' order-2 xl:w-[45%] lg:mt-[-5.1rem] rounded-t-full z-0 relative'>
        <Image 
        src= {calmingpic} 
        alt="picture of calming purple ocean" 
        sizes='100vw' 
        className='rounded-t-full '
        style={{
          width:'100%',
          height: '100%',
          }}/>
      </div>
      {/* <div className='order-2 w-96 h-96 md:h-screen md:w-full border border-green-950 rounded-t-full'>
  <div className='relative w-full h-full rounded-t-full overflow-hidden'>
    <Image 
      src={calmingpic} 
      alt="picture of calming purple ocean" 
      layout='fill' // fill the container
      objectFit='cover' // maintain aspect ratio and cover the container
      className='rounded-t-full' // apply rounded corners to the image
    />
  </div>
</div> */}
      <div className=' order-1 w-full md:w-1/2 md:h-full'>
        <h1 className='text-2xl text-darkpurple border border-fuchsia-600'> Hey, I'm Tori-Ann</h1>
        <p className='text-md text-darkpurple'>Welcome, I help people deal with trauma in their childhood. And work with those who want to help better themselves in the long-term.</p>
      </div>
      
      </section>
      
        
    </div>
  )
}

export default Hero