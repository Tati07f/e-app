
import Link from "next/link";
import style from '../styles/navbar.module.css'
import React, { useState } from 'react';
import Image from 'next/legacy/image'
import NavItem from "./NavItem";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// now import the icons you want
import {
  
  faLocationDot,
  faPhone,
  faUser,
  faCartShopping,
  faSearch,
  faHeartCircleCheck

} from "@fortawesome/free-solid-svg-icons";



const MENU_LIST = [
  { text: "MAKEUP", href: "/" },
  { text: "SKIN CARE", href: "/" },
  { text: "HAIR CARE", href: "/" },
  { text: "FRAGRANCE", href: "/" },
  { text: "TOOLS & ACCESSORIES", href: "/" },
  { text: "BATH & BODY", href: "/" },
  { text: "SALE & OFFERS", href: "/" },
  { text: "GIFTS", href: "/" },
]


const Navbar = () => {
 
 

  return (
      <div className={style.main_container}>
            <div className={style.nav_container}>
                  <div className={style.left_box}>
                        <Link href="/" className={style.link_icon}>
                                    <FontAwesomeIcon icon={faLocationDot} className={style.icon} id={style.location_icon} />
                                    <div className={style.text_link}>Find a Store</div>
                        </Link>
                        <Link href="/" className={style.link_icon}>
                                    <FontAwesomeIcon icon={faPhone} className={style.icon} id={style.c_icon} />
                                    <div className={style.text_link}>Contact Us</div>
                        </Link>
                        <Link href="/" className={style.link_icon}>
                                    <FontAwesomeIcon icon={faSearch} className={style.icon} id={style.search_icon} />
                                    <input type="text"
                                    className={style.input_search} placeholder="Search" />
                       </Link>
                  </div>
                  <div className={style.right_box}>
                       
                        <Link href="/" className={style.link_icon}>
                              <FontAwesomeIcon className={style.icon} icon={faHeartCircleCheck} id={style.heart_icon} />
                              <div className={style.text_link}>Wishlist</div>
                        </Link>

                        <Link href="/" className={style.link_icon}>
                              <FontAwesomeIcon className={style.icon} icon={faUser} id={style.user_icon} />
                       
                        <div className={style.text_link}>Sign In</div>
                        </Link>

                        <Link href="/" className={style.link_icon}>
                              <FontAwesomeIcon className={style.icon} icon={faCartShopping} id={style.cart_icon} />
                        
                        <div className={style.text_link}>Cart</div>
                        </Link>
                  </div>
            </div>
            <div className={style.menu_container}>
            {/* Left part of the nav menu in mobile version will be 100% wide and after Right Part */}
                  <div className={style.menu}>
                        <div className={style.nav_menu_list}>
                              {MENU_LIST.map((menu) => (
                                    <NavItem  key={menu.text} {...menu} className={style.nav_item}/>
                              ))}
                        </div>
                  </div>
            </div>
    </div>
  )
}

export default Navbar