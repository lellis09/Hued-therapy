import React from 'react'
import Image from 'next/image' 
import calmingpic from '../public/calmingpic.jpg'
// import NavBarMenu from './NavBar'

const Hero = () => {
  return (
    <div>
       {/* <NavBarMenu /> */}
      <main className=' flex flex-col md:flex-row pl-9 pr-4 h-screen'>
      <div className=' order-1 md:order-2 w-3/4 h-3/4 md:w-[50%] lg:w-[45%] md:h-auto md:mt-[-5.1rem] rounded-t-full z-0 relative'>
        <Image 
        src= {calmingpic}
        alt='calming picture' 
        alt="picture of calming purple ocean" 
        sizes='100vw' 
        className='rounded-t-full'
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
      <div className='order-2 md:order-1 w-full md:h-screen md:w-2/5 lg:w-1/2 lg:h-full'>
        <h1 className='text1 text-6xl md:text-[110px] md:mt-[28rem] text-darkpurple z-10 w-full relative md:ml-44'>Hey, I'm Tori-Ann</h1>
        <p className='text-[26px] text-center pt-8 text-darkpurple z-10 w-4/5 relative md:ml-44'>Welcome, I help people deal with trauma in their childhood. And work with those who want to help better themselves in the long-term and inprove their mental well-being.</p>
      </div>
      
      </main>
      
        
    </div>
  )
}

export default Hero