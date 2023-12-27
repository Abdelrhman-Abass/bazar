// eslint-disable-next-line no-unused-vars
import React from 'react'
import { logoLight, paymentLogo } from '../assets'
import { FaGithub, FaYoutube ,FaFacebook,FaInstagram,FaPaypal ,FaHome  } from "react-icons/fa";
import { MdOutlineAccountCircle ,MdLocationPin } from "react-icons/md";


import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-black text-[#949494] py-20 font-titleFont flex gap-20'>
      <div className='max-w-screen-xl mx-auto flex flex-col gap-6'>
        <img  src={logoLight} alt="logoLight" />
        <a href="https://github.com/Abdelrhman-Abass" className='hover:text-white cursor-pointer'>Abdelruhman Abas</a>
        <img src={paymentLogo} alt="paymentLogo" />
        <div className='flex gap-4 '>
            <FaGithub className='hover:text-white cursor-pointer' />
            <FaYoutube  className='hover:text-white cursor-pointer' />
            <FaFacebook  className='hover:text-white cursor-pointer' />
            <FaXTwitter  className='hover:text-white cursor-pointer' />
            <FaInstagram  className='hover:text-white cursor-pointer' />
        </div>
      </div>
      <div className='mx-auto flex flex-col gap-3'>
        <h3 className='text-2xl text-white font-titleFont font-bold'>Locate us</h3>
        <p className='text-xl hover:text-white duration-300 cursor-pointer'>Mobile: 01007582994</p>
        <a href='mailto:abdelruhman.abas@gmail.com' className='text-xl hover:text-white duration-300 cursor-pointer'>Email: abdelruhman.abas@gmail.com</a>
        <a href='mailto:abdoabass400@gmail.com' className='text-xl hover:text-white duration-300 cursor-pointer'>Email: abdoabass400@gmail.com</a>
        <a href='https://github.com/Abdelrhman-Abass' className='text-xl hover:text-white duration-300 cursor-pointer'>Portfolio</a>

      </div>
      <div className='mx-auto flex flex-col gap-3'>
        <h3 className='text-2xl text-white font-titleFont font-bold'>Profile</h3>
        <div className='flex gap-2 text-xl hover:text-white duration-300 cursor-pointer'>
          <MdOutlineAccountCircle/>
            my account
        </div>
        <div className='flex gap-2 text-xl hover:text-white duration-300 cursor-pointer'>
          <FaPaypal />
            Checkout
        </div>
        <div className='flex gap-2 text-xl hover:text-white duration-300 cursor-pointer'>
          <FaHome/>
            order tracking
        </div>
        <div className='flex gap-2 text-xl hover:text-white duration-300 cursor-pointer'>
          <MdLocationPin/>
            help & support
        </div>
      </div>
      <div className='mx-auto flex flex-col w-[260px] lg:w-[350px] justify-center'>
          <input type="email" placeholder='e-mail' className='h-14 bg-transparent border border-solid border-gray-500 placeholder:pl-4 placeholder:text-xl focus:border-white duration-300 cursor-pointer'/>
          <button className='border border-gray-400 border-solid'>Subscribe</button>
      </div>
    </div>
  )
}

export default Footer
