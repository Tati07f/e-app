import React from 'react'
import style from '../styles/header.module.css'
import Navbar from './Navbar'
import Banner from './Banner'

const Header = () => {
  return (
    <div className={style.header_container}>
      <Banner/>
      <Navbar/>

      </div>
  )
}

export default Header