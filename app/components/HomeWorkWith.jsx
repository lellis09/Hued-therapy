import React from 'react'
import Image from 'next/image' 
import calmingpic from '../public/calmingpic.jpg'

const HomeWorkWith = () => {
  return (
    <section className='bg-lightpurple flex flex-col pl-9 pr-9 pt-8 lg:flex-row mb-[3rem]'>
        <div className='items-center lg:w-[55%] pt-4 '>
            <h1 className='text-7xl text-darkpurple mb-[2.5rem] tracking-wide'>How to Work with Me</h1>
            <p className='text-darkpurple lg:pr-[25rem] text-lg'>Schedule a therapy session today. Taking the first step toward healing is an act of courage. Don't hesitate to reach out – your well-being matters.
                 Let's work together to help you live a more fulfilling life. </p>
        </div>
        <section className='lg:w-[45%]'>
            <div className='flex border-t-[1.75px] border-darkpurple pl-9 pr-9 mt-6'>
                <div className='w-[7rem] h-[] mt-3'>
                    <Image
                    src={calmingpic}
                    />
                </div>
                <div className='ml-[1rem] mt-3'>
                    <span className='text-xl text-magenta'>01</span>
                    <h2 className='uppercase text-darkpurple text-3xl'>Speaking Engagements</h2>
                    <p className='text-darkpurple'>Need a motivational speaker for an event? Let me come and  akgsn sjgna ajfbanj </p>
                </div>
            </div>
            <div className='flex border-t-[1.75px] border-darkpurple pl-9 pr-9 mt-6'>
                <div className='w-[7rem] h-[] mt-3'>
                    <Image
                    src={calmingpic}
                    />
                </div>
                <div className='ml-[1rem] mt-3'>
                    <span className='text-xl text-magenta'>02</span>
                    <h2 className='uppercase text-darkpurple text-3xl'>Podcasts & Media</h2>
                    <p className='text-darkpurple'>Need a motivational speaker for an event? Let me come and  akgsn sjgna ajfbanj </p>
                </div>
            </div>
            <div className='flex border-t-[1.75px] border-darkpurple pl-9 pr-9 mt-6'>
                <div className='w-[7rem] h-[] mt-3'>
                    <Image
                    src={calmingpic}
                    />
                </div>
                <div className='ml-[1rem] mt-3'>
                    <span className='text-xl text-magenta'>03</span>
                    <h2 className='uppercase text-darkpurple text-3xl'>Therapy Sessions</h2>
                    <p className='text-darkpurple'>Need a motivational speaker for an event? Let me come and  akgsn sjgna ajfbanj </p>
                </div>
            </div>
        </section>
    </section>
  )
}

export default HomeWorkWith