import React from 'react'
import Image from 'next/image' 
import calmingpic from '../public/calmingpic.jpg'

const MyBackground = () => {
  return (
    <section className='bg-lightpurple2 border-y-[1.75px] h-fit border-darkpurple flex flex-col px-9 pt-8 xl:flex-row'>
        <div className=' xl:w-2/4 xl:h-2/6 pt-6'>
        <div className='w-2/6 h-2/6 mt-3 rounded-t-full mx-auto '>
                    <Image
                    src={calmingpic}
                    className="rounded-t-full"
                    style={{
                        width:'100%',
                        height: '100%',
                        }}
                    />
                </div>
        </div>
        <section className='flex flex-col w-full xl:w-5/12 h-fit py-4 '>
            <h2 className='text1 text-5xl text-center text-darkpurple py-6'>My Background</h2>
            <div className='flex border-t-[1.75px] border-darkpurple/50 px-9 mt-6 xl:w-11/12  '>
                <div className='ml-[1rem] mt-3'>
                    <span className='text-xl text-magenta'>01</span>
                    <h2 className='text1 uppercase text-darkpurple text-2xl'>Education</h2>
                    <p className='text-darkpurple'>Need a motivational speaker for an event? Let me come and  akgsn sjgna ajfbanj </p>
                </div>
            </div>
            <div className='flex border-t-[1.75px] border-darkpurple/50 px-9 mt-6 xl:w-11/12 '>
                <div className='ml-[1rem] mt-3'>
                    <span className='text-xl text-magenta'>02</span>
                    <h2 className='text1 uppercase text-darkpurple text-2xl'>Who I Help</h2>
                    <p className='text-darkpurple'>Need a motivational speaker for an event? Let me come and  akgsn sjgna ajfbanj </p>
                </div>
            </div>
            <div className='flex border-t-[1.75px] border-darkpurple/50 px-9 mt-6 xl:w-11/12 pb-10'>
                <div className='ml-[1rem] mt-3 '>
                    <span className='text-xl text-magenta'>03</span>
                    <h2 className='text1 uppercase text-darkpurple text-2xl'>Areas of Expertise</h2>
                    <p className='text2 text-darkpurple'>Need a motivational speaker for an event? Let me come and  akgsn sjgna ajfbanj </p>
                </div>
            </div>
        </section>
    </section>
  )
}

export default MyBackground