/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Cart from '../src/ui/Cart'
import NavigationArrow from './ui/NavigationArrow'
import { formatCurrency } from './ui/formatter'


export default function Body({ isOpen,quantity,setQuantity }) {
  const [currImage, setCurrImage] = useState(1)
  const [product, setProduct] = useState()
  const [active,setIsActive] =  useState('image-1')
  const price = 125
  const totalPrice = 125*quantity
  const [isEmpty, setIsEmpty] = useState(true)
  const [modal,setModal] = useState(false)
  function handleClick() {
    const newProduct = {
      currImage,
      price,
      totalPrice,
      quantity
    }
    setProduct(newProduct)
     setIsEmpty(false)

    console.log(newProduct)
  }

  function handleActive(div) {
    setIsActive(div)
  }
  return (
    <main className='flex flex-col '>
      <div className=' md:max-w-screen-lg md:mx-auto md:mt-10 md:flex md:gap-10 sm:max-w-full '>

        <div className='flex flex-col items-center  gap-4'>
        <div className='w-full  md:w-96 h-64 md:h-80 '>
          <img src={`../images/image-product-${currImage}.jpg`} alt="" className='w-full h-full md:rounded-2xl object-cover' onClick={()=> setModal(true)} />
          </div>
          <div className='hidden md:flex items-center gap-3'>
            <img src="./images/image-product-1-thumbnail.jpg" alt="" className={`${active === 'image-1' && 'opacity-55 border-2 border-Orange'}   w-20 rounded-xl cursor-pointer`} onClick={() => {
              setCurrImage(1)
              handleActive('image-1')
            }}/>
            <img src="./images/image-product-2-thumbnail.jpg" alt="" className={`${active === 'image-2' && 'opacity-55 border-2 border-Orange'}   w-20 rounded-xl cursor-pointer`}  onClick={() => {
              setCurrImage(2)
              handleActive('image-2')
            }}/>
            <img src="./images/image-product-3-thumbnail.jpg" alt="" className={`${active === 'image-3' && 'opacity-55 border-2 border-Orange'}   w-20 rounded-xl cursor-pointer`}  onClick={() => {
              setCurrImage(3)
              handleActive('image-3')
            }}/>
            <img src="./images/image-product-4-thumbnail.jpg" alt="" className={`${active === 'image-4' && 'opacity-55 border-2 border-Orange'}   w-20 rounded-xl cursor-pointer`}  onClick={() => {
              setCurrImage(4)
              handleActive('image-4')
            }}/>
          </div>
    </div>
      <div className='w-full md:h-72 md:w-96 p-4 flex flex-col md:mt-5'>
        <h3 className='text-darkGrayishBlue tracking-widest font-semibold text-sm mb-3'>SNEAKER COMPANY</h3>
        <h1 className='text-veryDarkBlue max-w-72 md:max-w-80 font-extrabold mb-5 text-2xl capitalize'>Fall Limited Edition sneakers</h1>
        <p className='max-w-[30rem] md:max-w-full sm:max-w-fit text-[0.895rem] font-medium text-darkGrayishBlue mb-5'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they&apos;ll withstand everything the weather can offer.</p>
        <div className='flex w-full justify-between md:flex-col items-center mb-6 md:items-start '>
          <div className='flex items-center gap-4'>
              <h1 className='text-veryDarkBlue text-2xl font-extrabold tracking-wider'>{formatCurrency(quantity >= 1 ? quantity*125 :'125')  }</h1>
          <span className='bg-veryDarkBlue text-white flex items-center justify-center text-sm px-2 rounded-md'>50%</span>
    </div>
            <p className='text-darkGrayishBlue text-sm font-semibold line-through '>{ formatCurrency(quantity>=1 ? 250.00*quantity:250)}</p>
        </div>
        <div className='flex flex-col md:flex-row w-full items-center gap-2'>
          <button className='flex items-center w-full gap-6 bg-lightGrayishBlue justify-between py-3 px-6 rounded-xl'>
              <img src="../images/icon-plus.svg" alt="" onClick={() => {
                setQuantity(quantity => quantity + 1)
                quantity === 0 && setIsEmpty(true)
            }}/>
              <span className='font-semibold text-lg text-veryDarkBlue'>{ quantity}</span>
              <img src="../images/icon-minus.svg" alt="" onClick={() => {
                quantity >= 1 && setQuantity(quantity => quantity - 1)
              
              }} />
          </button>
          <button className='flex text-veryDarkBlue font-semibold items-center w-full gap-6 bg-Orange justify-center hover:bg-Orange/75 hover:fill-white hover:text-white   py-3 px-3 rounded-xl' onClick={handleClick}>
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg" ><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"  fillRule="nonzero" className='fill-veryDarkBlue hover:fill-white'/></svg>
           <p> Add to Cart</p>
          </button>
        </div>
      </div>

      </div>


      <Cart isOpen={isOpen} quantity={quantity} product={product} isEmpty={isEmpty} setQuantity={setQuantity} setIsEmpty={setIsEmpty} />
      
      <NavigationArrow currImage={currImage} setCurrImage={setCurrImage} />
      
     
      {modal===true && <div className='absolute z-50 hidden md:flex items-center justify-center inset-0 h-dvh bg-blackWithOpacityForLightboxBackground/75'>
      <div className='absolute z-50 top-10 ml-96 cursor-pointer' onClick={()=>setModal(false)}>
      <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#fff" fillRule="evenodd"/></svg>
      </div>
      
      <div className='flex flex-col items-center  gap-4 '>
        <div className='w-full  md:w-96 h-64 md:h-80 '>
          <img src={`../images/image-product-${currImage}.jpg`} alt="" className='w-full h-full md:rounded-2xl object-cover' />
          </div>
          <div className='hidden md:flex items-center gap-3'>
            <img src="./images/image-product-1-thumbnail.jpg" alt="" className={`${active === 'image-1' && 'opacity-55 border-2 border-Orange'}   w-20 rounded-xl cursor-pointer`} onClick={() => {
              setCurrImage(1)
              handleActive('image-1')
            }}/>
            <img src="./images/image-product-2-thumbnail.jpg" alt="" className={`${active === 'image-2' && 'opacity-55 border-2 border-Orange'}   w-20 rounded-xl cursor-pointer`}  onClick={() => {
              setCurrImage(2)
              handleActive('image-2')
            }}/>
            <img src="./images/image-product-3-thumbnail.jpg" alt="" className={`${active === 'image-3' && 'opacity-55 border-2 border-Orange'}   w-20 rounded-xl cursor-pointer`}  onClick={() => {
              setCurrImage(3)
              handleActive('image-3')
            }}/>
            <img src="./images/image-product-4-thumbnail.jpg" alt="" className={`${active === 'image-4' && 'opacity-55 border-2 border-Orange'}   w-20 rounded-xl cursor-pointer`}  onClick={() => {
              setCurrImage(4)
              handleActive('image-4')
            }}/>
          </div>
    </div>
    <div className=' w-[27rem] md:flex justify-between items-center place-self-center hidden md:z-50 bg-transparent  absolute top-[16rem]'>
      <span className='bg-white px-5 py-4 rounded-full flex items-center justify-center cursor-pointer'
      onClick={()=> currImage > 1 ? setCurrImage(image=> image - 1 ):setCurrImage(4)}
      >
      <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
      </span>
      <span className='bg-white px-5 py-4 rounded-full flex items-center justify-center cursor-pointer' onClick={()=> currImage < 4 ? setCurrImage(image=> image + 1 ) : setCurrImage(1)}>
      <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
      </span>
    </div>
      </div>}
    </main>
  )
}
