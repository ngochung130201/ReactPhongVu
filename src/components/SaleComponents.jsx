import React from 'react'
import {Sale1,Product1,Sale2,Sale3,BanerSale} from '../assets/index'
import Button from './Button'
import CardComponent from './CardComponent'
const SaleComponents = () => {
  return (
    <div className="">
       <div className="">
     <div className=' relative mt-24'>
      <img className='relative  h-[450px] ' src={Sale1} alt="" />
      <h3 className='absolute font-bold leading-5 text-xl ml-2 mt-1 text-white top-2 z-20'>Điện máy</h3>
     <div className="mt-[-23rem]">
     <CardComponent></CardComponent>
     </div>
    </div>
  
 </div>
 <div className="">
     <div className=' relative mt-24'>
      <img className='relative h-[450px] ' src={Sale2} alt="" />
      <h3 className='absolute font-bold leading-5 text-xl ml-2 mt-1 text-white top-2 z-20'>Điện máy</h3>
     <div className="mt-[-23rem]">
     <CardComponent></CardComponent>
     </div>
    </div>
  
 </div>
 <div className="">
     <div className=' relative mt-24'>
      <img className='relative h-[450px]  ' src={Sale3} alt="" />
      <h3 className='absolute font-bold leading-5 text-xl ml-2 mt-1 text-white top-2 z-20'>Điện máy</h3>
     <div className="mt-[-23rem]">
     <CardComponent></CardComponent>
     </div>
    </div>
  
 </div>
    <div className="mt-16">
      <a href="/">
        <img  className='hoverCart' src={BanerSale} alt="" />
      </a>
    </div>
    </div>

  )
}

export default SaleComponents