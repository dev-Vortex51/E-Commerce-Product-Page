/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'


function Header({isClicked,setIsClicked,setIsOpen,quantity}) {
  return (
    <header className=' w-full py-3 px-5   md:max-w-screen-lg md:mx-auto  h-16 bg-white flex items-center justify-between md:border-b md:pt-12 md:pb-10 shadow-bottom-xl md:shadow-none'>
      <div className='flex space-x-4 items-center'>
      <img src="../images/icon-menu.svg" alt="" className='block md:hidden' onClick={()=>setIsClicked(true)}/>
      <img src="../images/logo.svg" alt="" />

      <nav className='hidden md:inline-block'>
        <ul className='flex gap-4 text-grayishBlue font-semibold items-center justify-center'>
          <li className='hover:text-veryDarkBlue cursor-pointer transition-colors duration-300 hover:pb-4 hover:border-b-2 hover:border-Orange'>Collections</li>
          <li className='hover:text-veryDarkBlue cursor-pointer transition-colors duration-300 hover:pb-3 hover:border-b-2 hover:border-Orange'>Men</li>
          <li className='hover:text-veryDarkBlue cursor-pointer transition-colors duration-300 hover:pb-3 hover:border-b-2 hover:border-Orange'>Women</li>
          <li className='hover:text-veryDarkBlue cursor-pointer transition-colors duration-300 hover:pb-3 hover:border-b-2 hover:border-Orange'>About</li>
          <li className='hover:text-veryDarkBlue cursor-pointer transition-colors duration-300 hover:pb-3 hover:border-b-2 hover:border-Orange'>Contact</li>
        </ul>
</nav>
    </div>


      <div className='flex space-x-4 items-center'>
      <img src="../images/icon-cart.svg" alt=""  className='cursor-pointer' onClick={()=> setIsOpen(prev=>!prev)}/>
        <div className='relative'>
          <img src="../images/image-avatar.png" alt="" className='w-6 md:w-10 cursor-pointer hover:border-2 hover:border-Orange hover:rounded-full' />
          {quantity > 0 && <span className='bg-Orange text-white font-semibold px-2 flex top-[-5px] text-sm left-[-1.7rem] items-center  absolute rounded-full'>{quantity }</span> }
      </div>
     </div>
    </header>
  )
}



export default Header
