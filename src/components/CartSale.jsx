import React from 'react'
import {Cart1,Cart2,Cart3,Cart4} from '../assets/index'
const CartSale = () => {
    const cartItem = [
        {
            cartAlt : '',
            ImageCart: Cart1, 
        },
        {
            cartAlt : '',
            ImageCart: Cart2, 
        },
        {
            cartAlt : '',
            ImageCart: Cart3, 
        },
        {
            cartAlt : '',
            ImageCart: Cart4, 
        },
     
    ]
  return (
    <div className=' w-full absolute -bottom-10 z-10 flex gap-4 items-center justify-center'>
       {cartItem.map((item,index)=>{
        return (
            <a  key={index} href="/">
                < img   className='rounded-lg hoverCart' src={item.ImageCart} alt={item.cartAlt} />
            </a>
        )
       })}
    </div>
  )
}

export default CartSale