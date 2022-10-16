import React from 'react'
import style from '../styles/navbar.module.css'
import Image from 'next/image'


const Navbar = () => {
  return (
    <div className={style.nav_container}>
        
        <div className={style.menu}>
          <ul>
            <li>Menu 1</li>
            <li>Menu 2</li>
            <li>Menu 3</li>
          </ul>
        </div>
        
        <div className={style.logo}>
            <Image src="/logo.png" alt='logo' width='200' height='60' />
        </div>
        
        <div className={style.search_bar}>
          <input type="text" placeholder='Search...' />
        </div>

        <div className={style.cart}>
          <div>Cart</div>
        </div>
    </div>
  )
}

export default Navbar