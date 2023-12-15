import React from 'react'

const CallToAction = () => {
  return (
    <section className='bg-darkpurple pt-8 pb-8'>
        <h1 className='text-[75px] mb-[.5rem] text-center'>Transform your well-being journey.</h1>
        <p className='text-[30px] mb-[2rem] text-center lg:w-[100%]'> Taking the first step toward healing is an act of courage. Schedule a therapy session today.</p>
        <div className='flex flex-col lg:flex-row lg: justify-center'>
            <input className='bg-dkpurple2 border-[1px] border-lightpurple rounded-[10px] w-[560px] h-[3rem] text-xl text-lightpurple mr-[2rem] pl-3' 
            type="text" 
            name="" 
            id=""
            placeholder='Name' 
            />
            <input className='bg-dkpurple2 border-[1px] border-lightpurple rounded-[10px] w-[560px] h-[3rem] text-xl text-lightpurple pl-3' 
            type="email"
            name="" 
            id="" 
            placeholder='Email'
            />
       </div>
        <div className='flex flex-col lg:flex-row lg: justify-center pt-5'>
           <textarea className='bg-dkpurple2 border-[1px] border-lightpurple rounded-[10px] w-[1150px] h-[8rem] text-xl text-lightpurple pl-3' 
            name="" 
            id="" 
            placeholder='Message'
            ></textarea>
        </div>
    </section>
  )
}

export default CallToAction