import React from 'react'
import Btn from '../users/Btn'

const WorkWithTori = () => {
  return (
    <section className='bg-lightpurple2 py-20 border-y-[1.75px] border-darkpurple'>
    <h1 className='text1 text-5xl text-darkpurple pb-8 text-center '> How We Can Work Together</h1>
      <div className='flex flex-col content-between xl:flex-row lg:justify-center pt-4 border-3 border-teal-500 xl:gap-8  gap-4 pb-12'>
        <div className='flex-col px-4 py-8 border-1 border-darkpurple/50 shadow-0 shadow-gray-600/30 bg-lightpurple2 h-auto xl:h-[450px] rounded-lg xl:w-[350px] hover:border-lightorange hover:bg-lightpurple/75 hover:scale-105 duration-75 hover:border-2'>
          <p className='text-2xl text-magenta pt-2 pb-2 lg:pb-4'>01</p>
          <h2 className='text-xl text-darkpurple font-semibold pb-3 lg:pb-6'>Therapy Sessions</h2>
          <p className='text-darkpurple'>Therapists offer a secure and non-judgmental space for individuals to express emotions. They validate feelings, teach coping skills for stress and anxiety, identify triggers, and develop strategies. Therapists also foster resilience, helping clients bounce back from challenges with emotional strength.</p>
        </div>
        <div className='flex-col px-4 py-8 border-1 border-darkpurple/50 shadow-0 shadow-gray-600/30 bg-lightpurple2 h-auto xl:h-[450px] rounded-lg xl:w-[350px] hover:border-lightorange hover:bg-lightpurple/75 hover:scale-105 duration-75 hover:border-2'>
          <p className='text-2xl text-magenta pt-2 pb-2 lg:pb-4'>02</p>
          <h2 className='text-xl text-darkpurple font-semibold pb-3 lg:pb-6'>Speaking Engagements</h2>
          <p className='text-darkpurple'>Therapists offer a secure and non-judgmental space for individuals to express emotions. They validate feelings, teach coping skills for stress and anxiety, identify triggers, and develop strategies. Therapists also foster resilience, helping clients bounce back from challenges with emotional strength.</p>
        </div>
        <div className='flex-col px-4 py-8 border-1 border-darkpurple/50 shadow-0 shadow-gray-600/30 bg-lightpurple2 h-auto xl:h-[450px] rounded-lg xl:w-[350px] hover:border-lightorange hover:bg-lightpurple/75 hover:scale-105 duration-75 hover:border-2'>
          <p className='text-2xl text-magenta pt-2 pb-2 lg:pb-4'>03</p>
          <h2 className='text-[19px] text-darkpurple font-semibold pb-3 lg:pb-6'>Podcasts & Media</h2>
          <p className='text-darkpurple'>Therapists offer a secure and non-judgmental space for individuals to express emotions. They validate feelings, teach coping skills for stress and anxiety, identify triggers, and develop strategies. Therapists also foster resilience, helping clients bounce back from challenges with emotional strength.</p>
        </div>
      </div>
      <div className='flex justify-center'>
            <Btn />
        </div>  
      
    </section>
  )
}

export default WorkWithTori