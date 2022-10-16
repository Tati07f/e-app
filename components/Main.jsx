import React from 'react'
import style from '../styles/main.module.css'
import ProductCard from './ProductCard'

const Main = ({products}) => {

  return (
    <div className={style.main_container}>
      { products.map( product => <ProductCard key={ product.sys.id } product={product} /> ) }
    </div>
  )

}

export default Main