/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export default function NavigationArrow ({currImage,setCurrImage}) {
  return (
    <div className=' w-5/6 md:w-[27rem] flex justify-between items-center absolute place-self-center md:hidden md:z-50 bg-transparent md:mt-40  mt-28'>
      <span className='bg-white px-5 py-4 rounded-full flex items-center justify-center cursor-pointer'
      onClick={()=> currImage > 1 ? setCurrImage(image=> image - 1 ):setCurrImage(4)}
      >
      <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
      </span>
      <span className='bg-white px-5 py-4 rounded-full flex items-center justify-center cursor-pointer' onClick={()=> currImage < 4 ? setCurrImage(image=> image + 1 ) : setCurrImage(1)}>
      <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
      </span>
    </div>
  )
}
