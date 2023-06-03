
import React from 'react'
import style from '../styles/product_page.module.css'
import ProductCard from './ProductCard'

const ProductPage = ({products}) => {

    return (
        <div className={style.prod_container}>
            <div className='product_container'>
                    { products.map( product => <ProductCard key={ product.sys.id } product={product} /> ) }
            </div> 
        </div>

    )
}

export default ProductPage