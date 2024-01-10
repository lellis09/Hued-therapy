'use client'
import React, {useState} from 'react'
import './navbar.css' 
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faFacebook} from '@fortawesome/free-brands-svg-icons'


const NavBarMenu = () => {

  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  // const menuItems = [
  //   { id: 1, label: 'Home', link: '/' },
  //   { id: 2, label: 'About', link: '/about' },
  //   { id: 3, label: 'Services', link: '/services' },
  //   // Add more menu items as needed
  // ];

  // toggle burger menu change
  const updateMenu = () => {
    if(!isMenuClicked) {
      setBurgerClass("burger-bar clicked")
      setMenuClass("menu visible")
    }
    else {
      setBurgerClass("burger-bar unclicked")
      setMenuClass("menu hidden")
    }
    setIsMenuClicked(!isMenuClicked)
  }

  return (
    <div className=' border-y border-darkpurple flex
     justify-around items-center content-center z-10 relative'> 
     
     <nav className=' border-red-600 w-full text-lg py-4 '>
          <div className='burger-menu' onClick={updateMenu}>
            <div className= {burger_class}></div>
            <div className= {burger_class}></div>
            <div className= {burger_class}></div>
          </div>
       </nav>
       <div className={menu_class}>
       {/* {menuItems.map((item) => (
          <a key={item.id} href={item.link} className='menu-item'>
            {item.label}
          </a>
        ))} */}
          {/* <ul>
            <li className='text-lightpurple text-center border border-yellow-200 ml-10 ' >Home</li>
          </ul> */}

    <ul>
        <li className='text-lightpurple text-center '>
          <Link href="/" className='menu-item border border-green-500 mb-2' onClick={updateMenu}>Home
            {/* <a className='menu-item border border-green-500 mb-2'>Home</a> */}
          </Link>
          <Link href="/about" className='menu-item mb-2' onClick={updateMenu}>About Me
            {/* <a className='menu-item mb-2'>About Me</a> */}
          </Link>  
          <Link href="/workwithme" className='menu-item mb-2' onClick={updateMenu}>Work With Me
            {/* <a className='menu-item mb-2'>Work With Me</a> */}
          </Link>
          <Link href="/contact" className='menu-item mb-2' onClick={updateMenu}>Contact
            {/* <a className='menu-item mb-2'>Contact</a> */}
          </Link>    
        </li>
        {/* Add more menu items as needed */}
    </ul>
       </div>

       <div className='border-x border-darkpurple w-full text-center max-h-full text-lg py-4 lg:px-28 '>Business Name or logo or image</div>
       <div className=' flex items-start lg:gap-2 border-3 border-lightgreen w-full text-lg py-4'> 
       <FontAwesomeIcon icon={faLinkedin} size="2xl" className="iconColor" />
       <FontAwesomeIcon icon={faInstagram} size="2xl" className="iconColor" />
       <FontAwesomeIcon icon={faFacebook} size="2xl" className="iconColor" />
       </div>
       
    </div>
 
  )
}

export default NavBarMenu
  