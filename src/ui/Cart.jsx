/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { formatCurrency } from './formatter'

function Cart({ isOpen, quantity, product, isEmpty, setQuantity,setIsEmpty }) {
  const [deleted,setDeleted] = useState(false)
  return (
    <div className={`w-80 ${isOpen || 'hidden' } absolute h-56 rounded-md z-40 shadow-lg bg-white place-self-center md:place-self-end md:right-10   mt-2`}>
      <div className='pb-5 border-b border-b-darkGrayishBlue flex items-center'>
        <h2 className='mt-3 ml-3 font-semibold text-veryDarkBlue'>Cart</h2>
      </div>
      {isEmpty || quantity===0 && deleted ? <p className='font-semibold tracking-widest w-full mt-16 mx-20'>Your Cart is Empty</p> : <div className='flex flex-col items-center gap-6'>
        <div className='flex items-center gap-2 mt-6 justify-center'>
          <img src={`/image-product-${product.currImage}.jpg`} alt="" className='w-14 rounded-md object-cover'/>
          
          <div className=' text-sm text-darkGrayishBlue'>
          <p className='font-semibold'>Fall Limited Edition Sneakers</p>
            <div className='flex gap-4 text-sm items-center'>
            <p className='font-bold'>{formatCurrency(product.price)} <span>x {quantity}</span></p>
            <p className='font-bold text-veryDarkBlue'>{formatCurrency(product.price * quantity)}</p>
            </div>
          </div>
          <img src="/icon-delete.svg" alt="" className='cursor-pointer' onClick={() => {
            setDeleted(true)
            setQuantity(0)
            setIsEmpty(true)
            
          }}/>
        </div>
        <button className='w-[16.9rem] bg-Orange py-3 text-veryDarkBlue font-semibold rounded-xl cursor-pointer hover:bg-Orange/75 hover:text-white'>Checkout</button>
      </div>}
    </div>
  )
}

export default Cart