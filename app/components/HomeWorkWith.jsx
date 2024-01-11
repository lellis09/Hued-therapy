import React from 'react'
import Image from 'next/image' 
import calmingpic from '../public/calmingpic.jpg'

const HomeWorkWith = () => {
  return (
    <section className='bg-lightpurple flex flex-col pl-9 pr-9 pt-8 xl:flex-row mb-[3rem]'>
        <div className='items-center  xl:w-4/6 pt-4  mr-14'>
            <h1 className='text1 text-[60px] text-darkpurple mb-[1.5rem] pt-[1rem] text-center tracking-wide'>How to Work With Me</h1>
            <p className='text-darkpurple xl:w-3/4 xl:px-16 xl:mx-auto text-[26px] text-lg text-center'>Schedule a therapy session today. Taking the first step toward healing is an act of courage. Don&apos;t hesitate to reach out, your well-being matters.
                 Let&apos;s work together to help you live a more fulfilling life. </p>
            <p className='text-darkpurple xl:w-3/4 xl:px-16 xl:mx-auto pt-8 text-[26px] text-lg text-center'>Schedule a therapy session today. Taking the first step toward healing is an act of courage. Don&apos;t hesitate to reach out, your well-being matters.
                 Let&apos;s work together to help you live a more fulfilling life. </p>
        </div>
        <section className='lg:pl-4 xl:5/12 py-6'>
            <div className='flex border-t-[1.75px] border-darkpurple/50 px-9 mt-6 xl:w-11/12'>
                <div className=' w-28 lg:w-30 mt-3 '>
                    <Image
                    src={calmingpic}
                    style={{
                        width:'100%',
                        height: '100%',
                        }}
                    />
                </div>
                <div className='ml-[1rem] mt-3'>
                    <span className='text-xl text-magenta'>01</span>
                    <h2 className='text1 uppercase text-darkpurple text-2xl'>Speaking Engagements</h2>
                    <p className='text-darkpurple'>Need a motivational speaker for an event? Let me come and  akgsn sjgna ajfbanj </p>
                </div>
            </div>
            <div className='flex border-t-[1.75px] border-darkpurple/50 px-9 mt-6 xl:w-11/12'>
                <div className='w-28 lg:w-30 mt-3'>
                    <Image
                    src={calmingpic}
                    style={{
                        width:'100%',
                        height: '100%',
                        }}
                    />
                </div>
                <div className='ml-[1rem] mt-3'>
                    <span className='text-xl text-magenta'>02</span>
                    <h2 className='text1 uppercase text-darkpurple text-2xl'>Podcasts & Media</h2>
                    <p className='text-darkpurple'>Need a motivational speaker for an event? Let me come and  akgsn sjgna ajfbanj </p>
                </div>
            </div>
            <div className='flex border-t-[1.75px] border-darkpurple/50 px-9 mt-6 xl:w-11/12'>
                <div className='w-28 lg:w-30 mt-3'>
                    <Image
                    src={calmingpic}
                    style={{
                        width:'100%',
                        height: '100%',
                        }}
                    />
                </div>
                <div className='ml-[1rem] mt-3 '>
                    <span className='text-xl text-magenta'>03</span>
                    <h2 className='text1 uppercase text-darkpurple text-2xl'>Therapy Sessions</h2>
                    <p className='text-darkpurple'>Need a motivational speaker for an event? Let me come and  akgsn sjgna ajfbanj </p>
                </div>
            </div>
        </section>
    </section>
  )
}

export default HomeWorkWith