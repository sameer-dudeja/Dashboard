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
      <div className='spacer'>
        <h4>Vendor Statistics</h4>
        <p>Lorem, ipsum</p>
        <p>Lorem, ipsum dolor</p>
        <p>Lorem, ipsum</p>
        <p>Lorem, ipsum</p>
      </div>
      <div className='bottom-container'>
        <div className='bottom-header'>
          <h4>Buy From Vendor</h4>
        </div>
        <div className='bottominfo'>
          <div className='bottom-elements'>Quotes</div>
          <div className='bottom-elements'>Orders</div>
          <div className='bottom-elements'>Orders</div>
        </div>
        <div className='bottominfo'>
          <div className='bottom-elements'>Quotes</div>
          <div className='bottom-elements'>Orders</div>
          <div className='bottom-elements'>Orders</div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
