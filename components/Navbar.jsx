
import Link from "next/link";
import style from '../styles/navbar.module.css'
import React, { useState } from 'react';
import Image from 'next/image'
import NavItem from "./NavItem";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MENU_LIST = [
  { text: "MAKEUP", href: "/" },
  { text: "SKIN CARE", href: "/" },
  { text: "HAIR CARE", href: "/" },
  { text: "FRAGRANCE", href: "/" },
  { text: "TOOLS & ACCESSORIES", href: "/" },
  { text: "BATH & BODY", href: "/" },
]


const Navbar = () => {
 
 

  return (
    <div className={style.nav_container}>
        {/* Left part of the nav menu in mobile version will be 100% wide and after Right Part */}
        <div className={style.menu_left}>
            
              <div className={style.nav_menu_list}>
                  {MENU_LIST.map((menu) => (
                        <NavItem  key={menu.text} {...menu} className={style.nav_item}/>
                  ))}
              </div>
        </div>

        {/* Right Part  in mobile version  100% wide and on first place */}
        <div className={style.menu_right}>
        <div className={style.logo}>
                <Image src="/logo.png" alt='logo' width='200' height='60' />
            </div> 
            
            <form class="nosubmit">
                <input class="nosubmit" type="search" placeholder="Search..."/>
            </form>

            <div className={style.login}>
              <div classname={style.container_icon}>
                <FontAwesomeIcon  icon={["fa", "user"]} alt='login' width='20' height='25' color='grey' />
                </div>
            </div>

            <div classname={style.container_icon}>
            
            {/* <FontAwesomeIcon icon="faCartShopping" /> */}
            <FontAwesomeIcon icon={["fa", "cart-shopping"]}  alt='Cart' width='25' height='25'  color='grey'/>
           
          
            </div>
        </div>
    </div>
  )
}

export default Navbar