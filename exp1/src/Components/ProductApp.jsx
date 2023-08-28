import { useEffect, useState } from 'react'
import axios from 'axios'
import React from 'react'
import Product from './Product'
function ProductApp() {
  const [produt, setProduct] = useState([]);
  const [isProductReady,setIsProductReady]=useState(false)
  useEffect(() => {
    productsHandler()
  }, [])

  const productsHandler = async () => {
    const res = await axios.get('https://fakestoreapi.com/products')
    console.log(res.data)
    const finaldata = res.data
    setProduct(finaldata);
    setIsProductReady(true)
  }
  return (
    <div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 justify-center items-center gap-1'>

        {  isProductReady? 
          produt.map((item) => <Product
            key={item.id}
            title={item.title}
            price={item.price}
            desc={item.description}
            category={item.category}
            url={item.image}
            rating={item.rating}
            id={item.id}
          />)
          : <h1 className=' text-[24px] text-blue-500 text-start mx-auto underline'>Loading...</h1>
        }


      </div>
    </div>
  )
}

export default ProductApp