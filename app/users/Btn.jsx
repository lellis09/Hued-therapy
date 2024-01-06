import React from 'react'
import Link from 'next/link'

const Btn = () => {
  return (
    
    <div className='bg-lightgreen rounded-full w-[9%] text-xl py-2 text-center shadow-0 shadow-gray-600/30 hover:bg-lightorange hover:scale-105 duration-75 hover:text-darkpurplehover'>
       <Link href="/contact">Contact</Link>
    </div>
  )
}

export default Btn