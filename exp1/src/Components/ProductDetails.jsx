import axios from 'axios'
import { VscArrowLeft } from "react-icons/vsc";
import { useEffect,useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import React from 'react'
  
function ProductDetails() {
  const [detail,setDetail]=useState([])
  const {id}=useParams();
  
  const downloadDetails=async ()=>{
    const url='https://fakestoreapi.com/products/'
    const result=await axios.get(url+id);
   const finalDetail=result.data;
   setDetail(finalDetail)
   console.log(detail)
}

   useEffect(()=>{
             downloadDetails()
   },[])
  return (
    <div className='max-w-[80%]  mt-[20px] mx-auto '>
      <Link to='/' className='text-[16px]'> <VscArrowLeft/> </Link>
      <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 justify-center   border-[1px] '>
        <div className=' self-center w-[100%]'><img className='' src={detail.image} alt="image not uploaded" /></div>
        <div className='text-white bg-[rgba(0,0,0,0.7)]  grid  gap-4  text-left mx-auto px-[16px] py-[6px]'>
          <h1 className=' lg:text-[36px] md:text-[36px] text-[24px] '>Category:{detail.category}</h1>
          <h2 className='text-yellow-600 max-text-[26px]'> Title:{detail.title}</h2>
          <p ><span className='text-red-400'>Descripation:</span>{detail.description}</p>
          <h2 className='border-[1px]  bg-green-400 rounded-[10px] border-pink-200 px-[16px] py-[6px] text-center self-center'>price-{detail.price}</h2>
        </div>
      </div>

    </div>
  )
}

export default ProductDetails
