"use client"
import React from 'react'
import { useRouter } from 'next/navigation' 
import Link from 'next/link'

const Header = () => {
  const router = useRouter()
  const HandleAboutTask = () => {
    router.push('/about')
    alert('You have clicked on About');
  }
  const refresh = useRouter()
  const HandleRefreshTask = () => {
    refresh.refresh()
    alert('You have clicked on Refresh');
  }
  return (
    <div className="flex justify-between bg-amber-300 p-4 ">
      <div className="text-3xl font-bold justify-around align-super cursor-pointer" onClick={HandleRefreshTask} >Medico</div>
      <div className="flex align-center justify-around p-2 flex-row gap-4 items-stretch " >
        <div className="text-lg font-semibold hover:text-gray-300 cursor-pointer" > <Link href="/">Home</Link></div>
        <div className="text-lg font-semibold hover:text-gray-300 cursor-pointer" onClick={HandleAboutTask} >About</div>
        <div className="text-lg font-semibold hover:text-gray-300 cursor-pointer" > <Link href="/contact">Contact</Link></div>
        <div className="text-lg font-semibold hover:text-gray-300 cursor-pointer" > <Link href="/services">Services</Link></div>
        <div className="text-lg font-semibold hover:text-gray-300"> <Link href="/products">Product</Link></div>
      </div>
    </div>
  );
}

export default Header