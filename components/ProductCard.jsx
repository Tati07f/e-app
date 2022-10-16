import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import style from '../styles/productCard.module.css'

const ProductCard = ({product}) => {  
  const detailsRef = useRef(null)

  useEffect(()=> {
    detailsRef.current.innerHTML = documentToHtmlString( product.fields.productDescription )
  },[product])
  
  
  return (
    <div className={style.product_card}>
      <p>{ product.fields.productBrand }</p>
      <div className={style.image_wrapper}>
        <Image src={product.fields.productMainImage } layout='fill' alt={product.fields.productName} />
      </div>
      <p>{ product.fields.productName }</p>
      {/* for sure there is a better way to implement this, for now this work ok :) */}
      <div className={ style.details } ref={detailsRef}></div>

    </div>
  )
}

export default ProductCard