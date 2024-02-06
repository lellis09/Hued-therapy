import React from 'react'


const ContactCards = () => {
  return (
    <section className='bg-lightpurple h-[]100%]  flex gap-20 justify-center pt-20 pb-24 '>
      <div className='flex flex-col items-center relative hover:scale-105'>
        <div className='w-36 h-36 rounded-full bg-lightgreen z-20 absolute -top-20 hover:bg-lightorange'></div>
          <div className='flex flex-col justify-center items-center shadow-0 shadow-gray-600/30 border-1 border-darkpurple/50 w-60 h-60 z-0 hover:border-lightorange'>
            <h2 className='text-darkpurple text-[26px] pt-6 text1'>Phone Number</h2>
            <h3 className='text-darkpurple text-xl'>(313) 854-2750</h3>
          </div>
      </div>

      <div className='flex flex-col items-center relative'>
        <div className='w-36 h-36 rounded-full bg-lightgreen z-20 absolute -top-20'></div>
          <div className='flex flex-col justify-center items-center shadow-0 shadow-gray-600/30 border-1 border-darkpurple/50 w-60 h-60 z-0'>
            <h2 className='text-darkpurple text-[26px] pt-6 text1'>Email</h2>
            <h3 className='text-darkpurple text-xl'>(313) 854-2750</h3>
          </div>
      </div>

      <div className='flex flex-col items-center relative'>
        <div className='w-36 h-36 rounded-full bg-lightgreen z-20 absolute -top-20'></div>
          <div className='flex flex-col justify-center items-center shadow-0 shadow-gray-600/30 border-1 border-darkpurple/50 w-60 h-60 z-0'>
            <h2 className='text-darkpurple text-[26px] pt-6 text1'>Hours</h2>
            <h3 className='text-darkpurple text-xl'>(313) 854-2750</h3>
          </div>
      </div>
      {/* Tori will be on ZOcDoc (Feb) and Healthgrade coming (MArch)  */}
    </section>
  )
}

export default ContactCards