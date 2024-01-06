import React from 'react'
import '../globals.css';

const GettingStarted = () => {
  return (
    <main className='bg-lightpurple2 h-[40rem] '>
    <h1 className='text1 text-5xl text-darkpurple py-8 text-center'> Getting Started</h1>
      <div className='flex flex-col content-between xl:flex-row lg:justify-center pt-4 border-3 border-teal-500 xl:gap-8  gap-4'>
        <div className='flex-col px-4 py-8 bg-lightpurple2 h-auto xl:h-[450px] rounded-lg xl:w-[350px] hover:border-lightorange hover:bg-lightpurple/75 hover:scale-105 duration-75 hover:border-2'>
          <p className='text-3xl text-magenta pt-2 pb-2 lg:pb-4'>01</p>
          <h2 className='text-[19px] text-darkpurple font-semibold pb-3 lg:pb-6'>Complete Evaluation Found Here</h2>
          <p className='text-darkpurple'>Therapists offer a secure and non-judgmental space for individuals to express emotions. They validate feelings, teach coping skills for stress and anxiety, identify triggers, and develop strategies. Therapists also foster resilience, helping clients bounce back from challenges with emotional strength.</p>
        </div>
        <div className='flex-col px-4 py-8 bg-lightpurple2 h-auto xl:h-[450px] rounded-lg xl:w-[350px] hover:border-lightorange hover:bg-lightpurple/75 hover:scale-105 duration-75 hover:border-2'>
          <p className='text-3xl text-magenta pt-2 pb-2 lg:pb-4'>02</p>
          <h2 className='text-xl text-darkpurple font-semibold pb-3 lg:pb-6'>Verification of insurance</h2>
          <p className='text-darkpurple'>Therapists offer a secure and non-judgmental space for individuals to express emotions. They validate feelings, teach coping skills for stress and anxiety, identify triggers, and develop strategies. Therapists also foster resilience, helping clients bounce back from challenges with emotional strength.</p>
        </div>
        <div className='flex-col px-4 py-8 bg-lightpurple2 h-auto xl:h-[450px] rounded-lg xl:w-[350px] hover:border-lightorange hover:bg-lightpurple/75 hover:scale-105 duration-75 hover:border-2'>
          <p className='text-3xl text-magenta pt-2 pb-2 lg:pb-4'>03</p>
          <h2 className='text-[19px] text-darkpurple font-semibold pb-3 lg:pb-6'>Schedule an Appointment</h2>
          <p className='text-darkpurple'>Therapists offer a secure and non-judgmental space for individuals to express emotions. They validate feelings, teach coping skills for stress and anxiety, identify triggers, and develop strategies. Therapists also foster resilience, helping clients bounce back from challenges with emotional strength.</p>
        </div>
        <div className='flex-col px-4 py-8 bg-lightpurple2 h-auto xl:h-[450px] rounded-lg xl:w-[350px] hover:border-lightorange hover:bg-lightpurple/75 hover:scale-105 duration-75 hover:border-2'>
          <p className='text-3xl text-magenta pt-2 pb-2 lg:pb-4'>04</p>
          <h2 className='text-xl text-darkpurple font-semibold pb-3 lg:pb-6'>Schedule ongoing appointments</h2>
          <p className='text-darkpurple'>Therapists offer a secure and non-judgmental space for individuals to express emotions. They validate feelings, teach coping skills for stress and anxiety, identify triggers, and develop strategies. Therapists also foster resilience, helping clients bounce back from challenges with emotional strength.</p>
        </div>
      </div>
    </main>
  )
}

export default GettingStarted