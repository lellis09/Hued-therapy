import React from 'react'
import Image from 'next/image' 
import calmingpic from '../public/calmingpic.jpg'


const AboutHero = () => {
  return (
    <main className='flex pl-12 flex-col md:flex-row'>
        <div className='pr-12  order-1 md:order-1 w-3/4 h-3/4 md:w-[50%] lg:w-[45%] md:h-auto md:mt-[-5.1rem] rounded-t-full z-0 relative'>
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
      <div className=' order-2 md:order-2 w-full md:h-screen md:w-2/5 lg:w-1/2 lg:h-full'>
        <h1 className='text1 text-6xl md:text-8xl md:mt-[28rem] text-darkpurple  z-10 w-full relative md:mr-52' >About Tori-Ann Bright</h1>
        <p className='uppercase text-2xl pt-6 text-darkpurple z-10  w-full relative md:ml-48'>Therapist. Specialist. Enthusiast.</p>
      </div>
    </main>
  )
}

export default AboutHero