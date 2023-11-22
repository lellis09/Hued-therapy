import React from 'react'

const HelpCards = () => {
  return (
    <section className='h-full border border-blue-600 pl-9 pr-9 pb-7 bg-darkpurple'>
      <h1 className='text-2xl text-lightpurple mt-3 mb-3'> I Help People With</h1>
      <div className='flex flex-col content-evenly lg:flex-row lg:justify-center'>
        <div className=' mb-4 lg:mr-4 border border-darkpurple bg-lightgreen h-24 lg:h-[30rem] rounded-lg lg:w-[20rem]'>
          <span>01</span>
          <h2>Emotional Support and Coping Strategies</h2>
        </div>
        <div className='mb-4 lg:mr-4 border border-darkpurple bg-lightorange h-24 lg:h-[30rem] rounded-lg lg:w-[20rem]'>
          <span>02</span>
          <h2>Improving Mental Health and Well-Being</h2>
        </div>
        <div className='mb-4 lg:mr-4 border border-darkpurple bg-magenta h-24 lg:h-[30rem] rounded-lg lg:w-[20rem]'>
          <span>03</span>
          <h2>Enhancing Relationships and Communication</h2>
        </div>
        <div className=' mb-4 lg:mr-4 border border-darkpurple bg-lightgreen h-24 lg:h-[30rem] rounded-lg lg:w-[20rem]'>
          <span>04</span>
          <h2>Personal Growth and Self-Discovery</h2>
        </div>
      </div>
    </section>
  )
}

export default HelpCards