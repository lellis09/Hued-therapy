'use client'
import React, {useState} from 'react'
import './navbar.css' 


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
            <a href="/" className='menu-item border border-green-500 mb-2'>Home</a>
            <a href="/aboutpage" className='menu-item mb-2'>About Me</a>
            <a href="/" className='menu-item mb-2'>Work With Me</a>
            <a href="/" className='menu-item mb-2'>Contact</a>
        </li>
        {/* Add more menu items as needed */}
    </ul>
       </div>
     
      
       <div className='border-x border-darkpurple w-full px-[50px] text-center max-h-full text-lg py-4 '>Business Name or logo or image</div>
       <div className=' border-darkpurple w-full text-lg py-4'> Social icons</div>
       
    </div>
 
  )
}

export default NavBarMenu
  