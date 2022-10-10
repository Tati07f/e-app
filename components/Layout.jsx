import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Header from './Header'
import style from '../styles/layout.module.css'

const Layout = ({children}) => {
  return (
    <div className={style.layout_container}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout