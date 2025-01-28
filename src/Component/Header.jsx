import React from 'react'
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom'

import { AiOutlineTeam } from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";
import { IoLocation } from "react-icons/io5";
import { BsBoxes } from "react-icons/bs";
import { FaMagnifyingGlass } from "react-icons/fa6";

function Header() {
  return (
    <>
      <header className="bg-gradient-to-r from-[#04122e] to-[#4c00aa] text-white px-6 py-3 flex justify-between items-center">

        <nav className="flex space-x-6  ml-7 justify-evenly md:justify-normal w-xl">
          <NavLink className="hover:text-gray-300 opacity-50 hover:opacity-100 font-serif"><BsBoxes className='inline' /><span className='hidden lg:inline text-sm ml-2 font-mono'>Product</span></NavLink>
          <NavLink className="hover:text-gray-300 opacity-50 hover:opacity-100 font-serif"><AiOutlineTeam className='inline' /><span className='hidden lg:inline text-sm ml-2 font-mono'>Team</span></NavLink>
          <NavLink className="hover:text-gray-300 opacity-50 hover:opacity-100 font-serif"><FaMagnifyingGlass className='inline' /><span className='hidden lg:inline text-sm ml-2 font-mono'>Explore</span></NavLink>
          <NavLink className="hover:text-gray-300 opacity-50 hover:opacity-100 font-serif"><IoLocation className='inline' /><span className='hidden lg:inline text-sm ml-2 font-mono'>Marketplace</span></NavLink>
          <NavLink className="hover:text-gray-300 opacity-50 hover:opacity-100 font-serif"><BsCurrencyDollar className='inline' /><span className='hidden lg:inline text-sm ml-2 font-mono'>Pricing</span></NavLink>
        </nav>

        <div className="flex items-center space-x-4 font-serif">

          <input
            type="text"
            placeholder="Search"
            className="hidden xl:block bg-[#15223c] text-white px-3 py-1 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

            <motion.button
              whileHover={{scale:1.1}}
             className="hidden md:inline opacity-70 border-2 hover:opacity-100 border-b-blue-100 rounded-4xl shadow-2xl hover:bg-[#3c295482] px-4 py-1 cursor-pointer text-sm">Login</motion.button>
            <span className='hidden md:inline '>|</span>
            <motion.button
              whileHover={{scale:1.1}}
             className="hidden md:inline opacity-70 border-2 hover:opacity-100 border-b-blue-100 rounded-4xl shadow-2xl hover:bg-[#3c295482] px-4 py-1 cursor-pointer text-sm">SignUp</motion.button>
          
        </div>
      </header>
    </>
  )
}

export default Header
