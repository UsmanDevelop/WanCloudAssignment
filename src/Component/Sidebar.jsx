import React from 'react'
import logo from './../assets/logo.png'
import { FaSheetPlastic } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";

import { NavLink } from 'react-router-dom';

function Sidebar() {
    return (
        <>
            <div>
                <div className='md:w-64 bg-gray-900 w-24 h-full text-white flex flex-col p-5'>
                    <div className='font-mono'>
                        <img src={logo} className='w-[50px] h-[50px] rounded-4xl inline mr-3' />

                        <div className='font-bold text-xl hidden md:inline'>
                            <span className='text-cyan-400'>ACCOUNT</span>
                            <span>HUB</span>
                        </div>
                    </div>

                    <div>
                        <ul className='flex flex-col pt-15 gap-4'>

                            <NavLink to='/' className={({ isActive }) => `${isActive ? "bg-gray-800" : "text-red-50"}`}>
                                <li className=' flex items-center p-4 cursor-pointer hover:bg-gray-800 rounded-md'>
                                    <FaRegUser className="mr-4" />
                                    <span className='hidden md:block'>ADD USER</span>

                                </li>
                            </NavLink>

                            <NavLink to='/showusers' className={({ isActive }) => `${isActive ? "bg-gray-800" : "text-red-50"}`}>
                                <li className='flex items-center p-4 cursor-pointer hover:bg-gray-800 rounded-md'>
                                    <FaSheetPlastic className="mr-4" />
                                    <span className='hidden md:block'>VIEW RECORDS</span>

                                </li>
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
