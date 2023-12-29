// eslint-disable-next-line no-unused-vars
import React from 'react'
import {cartImg, githubLogo, logoDark} from '../assets'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Header = () => {
  const productData = useSelector((state) =>state.bazar.productData)
  console.log(productData)
  return (
    <div className='w-full h-20 bg-white border-b-[1px] font-titleFont sticky top-0 z-50 border-b-gray-800'>
      <div className='max-w-screen-xl h-full mx-auto  flex items-center justify-between'>
        <Link to="/">
          <div>
              <img className="w-28 cursor-pointer" src={logoDark} alt="logoDark" />
          </div>
        </Link>
        <div className='flex items-center gap-8'>
            <ul className='flex items-center gap-8'>
                <li className='text-base text-black font-bold hover:text-orange-700  hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Home</li>
                <li className='text-base text-black font-bold hover:text-orange-700  hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Pages</li>
                <li className='text-base text-black font-bold hover:text-orange-700  hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Shop</li>
                <li className='text-base text-black font-bold hover:text-orange-700  hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Element</li>
                <li className='text-base text-black font-bold hover:text-orange-700  hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Blog</li>
            </ul>
            <Link to='/cart'>
              <div className='relative'>
                <img src={cartImg} alt="cartImage" className='cursor-pointer w-6' />
                <span className='absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold font-titleFont cursor-pointer'>{productData.length}</span>
              </div>
            
            </Link>
            <img src={githubLogo} alt="userLogo" className='w-8 h-8 rounded-full' />
        </div>
      </div>
      
    </div>
  )
}

export default Header
