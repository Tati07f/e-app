import React from 'react'
import style from '../styles/main.module.css'
import ProductCard from './ProductCard'

const Main = ({products}) => {

  return (
    <div className={style.main_container}>

      <div className={style.first_container}>
        <p className='slogan'> Beauty all of the World for You</p>
        
      </div>
      <div className='product_container'>
          { products.map( product => <ProductCard key={ product.sys.id } product={product} /> ) }
      </div>
    </div>
  )

}

export default Main