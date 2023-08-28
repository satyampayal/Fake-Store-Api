import React from 'react'
import {Link} from 'react-router-dom'
//https://fakestoreapi.com/products
function Product({title,price,desc,category,url,rating,id}) {

  return (
    <div className='h-[350px] px-[16px] py-[10px] grid  text-white
        border-[1px] border-white rounded-[10px] bg-[rgba(0,0,0,0.6)]'>
        <h1 className='center'>{title}</h1>
       <div className='max-w-[220px] mx-auto'> <Link to={`/product/${id}`} className='w-[200px]' ><img className='max-h-[200px] w-[200px] mx-auto hover:scale-[102%]' src={url} alt="image not upload " /></Link></div>
        <h2 className='border-[1px] mt-[2px] mb-[10px] mx-auto  w-[80%] bg-green-800 text-white
          self-end  cursor-pointer '>Rate:{rating.rate}</h2>   
          <button className='border-[1px] bg-blue-600 text-center text-white self-end mb-3 w-[80%] mx-auto cursor-pointer '>Add cart </button>   
    </div>
    

  )
}

export default Product