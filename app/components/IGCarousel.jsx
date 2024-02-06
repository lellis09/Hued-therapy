import React from 'react'
import Image from 'next/image' 
import calmingpic from '../public/calmingpic.jpg'

const IGCarousel = () => {
  return (
    <section className=' h-[110%] mt-8'>
    <h1 className='text1 text-5xl text-darkpurple py-8 text-center pb-10'> Instagram Carousel</h1>
    <div className='flex gap-20 justify-center pt-6 pb-28'>
    <div className=' w-[15%] h-[15%]'>
                <Image 
                src= {calmingpic} 
                alt="picture of calming purple ocean" 
                sizes='100vw' 
                className='rounded '
                style={{
                width:'100%',
                height: '100%',
                }}/>
            </div>
            <div className=' w-[15%] h-[15%]'>
             <Image 
             src= {calmingpic} 
                alt="picture of calming purple ocean" 
                sizes='100vw' 
                className='rounded '
                style={{
                width:'100%',
                height: '100%',
                }}/>
            </div>
            <div className=' w-[15%] h-[15%]'>
             <Image 
             src= {calmingpic} 
                alt="picture of calming purple ocean" 
                sizes='100vw' 
                className='rounded '
                style={{
                width:'100%',
                height: '100%',
                }}/>
            </div>
            <div className=' w-[15%] h-[15%]'>
                <Image 
                src= {calmingpic} 
                alt="picture of calming purple ocean" 
                sizes='100vw' 
                className='rounded '
                style={{
                width:'100%',
                height: '100%',
                }}/>
            </div>
    </div>
            
    </section>
  )
}

export default IGCarousel