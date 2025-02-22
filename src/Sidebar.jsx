/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export default function Sidebar({isClicked,setIsClicked}) {
  return (
    <div className={`h-dvh bg-white transition-transform duration-300 transform ${isClicked ? 'translate-x-0':'-translate-x-full'}  shadow-xl  top-0 left-0 md:hidden w-64 fixed pt-6 flex items-start  flex-col px-5 gap-14 z-50`} >
      <img src="/icon-close.svg" alt="" onClick={()=>setIsClicked(false)}/>
      <nav>
        <ul className='flex flex-col gap-4 text-veryDarkBlue font-semibold'>
          <li className='hover:text-grayishBlue transition-colors duration-300'>Collections</li>
          <li className='hover:text-grayishBlue transition-colors duration-300'>Men</li>
          <li className='hover:text-grayishBlue transition-colors duration-300'>Women</li>
          <li className='hover:text-grayishBlue transition-colors duration-300'>About</li>
          <li className='hover:text-grayishBlue transition-colors duration-300'>Contact</li>
        </ul>
      </nav>
    </div>
  )
}
