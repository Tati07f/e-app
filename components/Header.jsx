import React from 'react'
import style from '../styles/header.module.css'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className={style.header_container}>
      <Navbar/>
    </div>
  )
}

export default Header