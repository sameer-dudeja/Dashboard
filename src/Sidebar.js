import React from 'react'
import { useGlobalContext } from './context'
import { RiArrowDropRightLine } from 'react-icons/ri'
import { links } from './data'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()

  return (
    <div className={`${isSidebarOpen ? 'show-sidebar' : 'sidebar'}`}>
      <div className='sidebar-header'>
        <button className='close-btn' onClick={closeSidebar}>
          {console.log(isSidebarOpen)}
          <RiArrowDropRightLine />
        </button>
      </div>
      <ul className='links'>
        {links.map((link) => {
          const { id, url, text } = link
          return (
            <li key={id}>
              <a href={url}>{text}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar
