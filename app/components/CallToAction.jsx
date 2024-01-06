import React from 'react'
import '../globals.css'
import Btn from '../users/Btn'


const CallToAction = () => {
  return (
    <section className='bg-darkpurple pt-8 pb-[2.5rem]'>
        <h1 className='text1 text-6xl mb-[.5rem] text-center' >Transform your well-being journey.</h1>
        <p className=' text-2xl mb-[2rem] text-center lg:w-[100%]'> Taking the first step toward healing is an act of courage. Schedule a therapy session today.</p>
        <div className='flex flex-col lg:flex-row lg: justify-center'>
            <input className='bg-dkpurple2 border-[1px] border-lightpurple rounded-[10px] lg:w-[560px] h-[3rem] text-xl placeholder:text-lightpurple2 mr-[2rem] pl-3 hover:border-lightorange hover:bg-darkpurplehover' 
            type="text" 
            name="" 
            id=""
            placeholder='Name' 
            />
            <input className='bg-dkpurple2 border-[1px] border-lightpurple rounded-[10px] lg:w-[560px] h-[3rem] text-xl placeholder:text-lightpurple2 pl-3 hover:border-lightorange hover:bg-darkpurplehover' 
            type="email"
            name="" 
            id="" 
            placeholder='Email'
            />
       </div>
        <div className='flex flex-col lg:flex-row lg: justify-center pt-5'>
           <textarea className='bg-dkpurple2 border-[1px] border-lightpurple rounded-[10px] lg:w-[1150px] h-[8rem] text-xl placeholder:text-lightpurple2 pl-3 hover:border-lightorange hover:placeholder:text-lightpurple hover:bg-darkpurplehover' 
            name="" 
            id="" 
            placeholder='Message'
            ></textarea>
        </div>

        <div className='flex justify-center pt-10'>
            <Btn />
        </div> 
    </section>
  )
}

export default CallToAction