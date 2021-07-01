import React from 'react'
import { NotificationsNone, Language, Settings } from '@material-ui/icons'
import './topbar.css'
export default function topbar() {
  return (
    <div className='topbar'>
      <div className='topbar-wrapper'>
        <div className='top-left'>
          <span className='logo'>Sameer Dudeja</span>
        </div>
        <div className='top-right'>
          <div className='topbar-icons-container'>
            <NotificationsNone />
            <span className='icon-badge'>2</span>
          </div>
          <div className='topbar-icons-container'>
            <Language />
          </div>
          <div className='topbar-icons-container'>
            <Settings />
          </div>
          <img
            src='https://avatars.githubusercontent.com/u/16884060?v=4'
            alt='SD'
            className='imageAvatar'
          />
        </div>
      </div>
    </div>
  )
}
