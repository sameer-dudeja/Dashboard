import React, { useState } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { useGlobalContext } from './context'
import Table from './table'
import Sidebar from './Sidebar'

const Home = () => {
  const { openSidebar } = useGlobalContext()
  return (
    <>
      <div className='main-screen'>
        <div className='left-sidebar'>
          <button onClick={openSidebar} className='sidebar-toggle'>
            <AiOutlineHome />
          </button>
          <Sidebar />
        </div>
        <div className='main-table'>
          <Table />
        </div>
      </div>
    </>
  )
}

export default Home
