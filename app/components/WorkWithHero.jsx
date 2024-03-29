import React from 'react'
import Image from 'next/image' 
import calmingpic from '../public/calmingpic.jpg'

const WorkWithHero = () => {
  return (
   
      <main className=' flex flex-col md:flex-row pl-9 pr-4 h-3/4'>
          <div className='order-1 md:order-2 w-3/4 h-3/4 md:w-[50%] lg:w-[45%] md:h-auto md:mt-[-5.1rem] rounded-t-full z-0 relative'>
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
          <div className=' order-2 md:order-1 w-full md:h-screen md:w-2/5 lg:w-1/2 lg:h-full'>
            <h1 className='text1 text-6xl md:text-8xl md:mt-[28rem] text-darkpurple z-10 w-1/2 lg:w-[150%] relative md:ml-30' > Encouraging & Empowering</h1>
            <p className='text-2xl text-darkpurple z-10 w-4/5 text-center relative md:ml-6 pt-8'>Welcome! I believe healing goes beyond traditional therapy sessions. I am not just a therapist; I am a partner in your journey towards mental and emotional well-being. </p>
            <p className='text-2xl text-darkpurple z-10 w-4/5 text-center relative md:ml-6 pt-8'>In addition to one-on-one counseling, I extend my support through various mediums to reach a wider audience. Take a look at some of the ways we can work together below.</p>
          </div>
      </main>

  )
}

export default WorkWithHero