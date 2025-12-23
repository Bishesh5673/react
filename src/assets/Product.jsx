import React from 'react'
import './Product.css'

function Product() {
    const products=[
        {
            id: 1,
            name: "Iphone 13 pro",
            price:200000,
            image: "https://mobilemall.pk/public_html/images/product/product_1631794852iphone-13-pro-silver-select.png"
        },
        {
            id: 2,
            name: "Iphone 13 pro max",
            price:250000,
            image: "https://fatafatsewa.com/storage/media/3928/iphone-13-pro-max-gold.png"
        },
        {
            id: 3,
            name: "Iphone 14 pro",
            price:300000,
            image: "https://qualitycomputer.com.np/web/image/product.image/506/image_1024/Apple%20iPhone%2014%20Pro%20Max?unique=8a96263"
        },
    ]
  return (
    <div className='parent'>
      {
        products.map((item)=>{
            return(
                <div className='box'>
                    <img src={item.image} alt="" />
                    <h1>{item.name}</h1>
                    <h1>Rs.{item.price}</h1>
                </div>
            )
        })
      }
    </div>
  )
}

export default Product
