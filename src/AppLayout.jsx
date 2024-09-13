/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Header from "./Header"
import Body from './Body'
import Sidebar from './Sidebar'


export default function AppLayout() {
  const [isClicked, setIsClicked] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [quantity,setQuantity] = useState(0)
  return (
    <main className='relative'>
      <Header isClicked={isClicked} setIsClicked={setIsClicked} setIsOpen={ setIsOpen} quantity={quantity} />
      <Sidebar isClicked={isClicked} setIsClicked={setIsClicked } />
      <Body isOpen={ isOpen} quantity={quantity} setQuantity={setQuantity} />
   </main>
  )
}
