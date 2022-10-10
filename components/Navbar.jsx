import React from 'react'
import style from '../styles/navbar.module.css'
import Image from 'next/image'


const Navbar = () => {
  return (
    <div className={style.nav_container}>
        <div className={style.menu}>Menu</div>
        <div className={style.logo}>
        
            <Image src="/logo.png" alt='logo' width='200' height='60' />
           
        </div>
        <div className={style.right_side}>Search</div>
    </div>
  )
}

export default Navbar