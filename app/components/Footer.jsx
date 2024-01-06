import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faFacebook} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <section className='bg-lightpurple flex flex-col pt-4 pb-4 gap-5 items-center'>
        <div className=' h-fit w-[75%] justify-center'>
            <h3 className='text1 text-4xl text-darkpurple text-center'>Tori-Ann Bright</h3>
            <p className=' text-xl text-lightgreen text-center'>Therapist</p>
        </div>
        <div className='flex gap-20'>
          <Link className='text-darkpurple text-md font-light hover:text-lightorange' href="/">Home</Link>
          <Link className='text-darkpurple text-md font-light hover:text-lightorange' href="/about">About</Link>
          <Link className='text-darkpurple text-md font-light hover:text-lightorange' href="/workwithme">Work With Me</Link>
          <Link className='text-darkpurple text-md font-light hover:text-lightorange' href="/contact">Contact</Link>
        </div>
        <div className='flex items-center gap-8'>
          <FontAwesomeIcon icon={faLinkedin} size="xl" className="iconFooter" />
          <FontAwesomeIcon icon={faInstagram} size="xl" className="iconFooter" />
          <FontAwesomeIcon icon={faFacebook} size="xl" className="iconFooter"  />
        </div>
    </section>
  )
}

export default Footer