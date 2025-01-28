import React from 'react'

import Footer from './../Component/Footer'
import Header from './../Component/Header'
import Sidebar from './../Component/Sidebar'
import UserRecords from '../Component/UserRecords'

function Content() {
  return (
    <>
      <div className='flex h-fit '>
        <Sidebar />
        <div className='flex flex-col justify-between w-full'>
          <Header className='w-full' />
          <div className='w-full bg-slate-200'>
            <UserRecords className='h-screen' />
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Content
