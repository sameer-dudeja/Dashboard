import React from 'react'
import {
  AccountBalanceRounded,
  Home,
  PersonOutline,
  AssessmentOutlined,
  Store,
  Timeline,
  TrendingUp,
  EmailOutlined,
  DynamicFeedOutlined,
  QuestionAnswerOutlined,
} from '@material-ui/icons'
import './sidebar.css'
export default function Sidebar() {
  return (
    <div className='Sidebar'>
      <div className='Sidebar-wrapper'>
        <div className='Sidebar-menu'>
          <h3 className='sidebar-title'>Dashboard</h3>
          <ul className='sidebar-list'>
            <li className='sidebar-item active btn-grad'>
              <div className='sidebar-icon'>
                <Home />
              </div>
              Home
            </li>
            <li className='sidebar-item btn-grad'>
              <div className='sidebar-icon'>
                <Timeline />
              </div>
              Analytics
            </li>
            <li className='sidebar-item btn-grad'>
              <div className='sidebar-icon'>
                <TrendingUp />
              </div>
              Sales
            </li>
          </ul>
        </div>
        <div className='Sidebar-menu'>
          <h3 className='sidebar-title'>Quick Menu</h3>
          <ul className='sidebar-list'>
            <li className='sidebar-item active btn-grad'>
              <div className='sidebar-icon'>
                <PersonOutline />
              </div>
              Users
            </li>
            <li className='sidebar-item btn-grad'>
              <div className='sidebar-icon'>
                <Store />
              </div>
              Products
            </li>
            <li className='sidebar-item btn-grad'>
              <div className='sidebar-icon'>
                <AccountBalanceRounded />
              </div>
              Transactions
            </li>
            <li className='sidebar-item btn-grad'>
              <div className='sidebar-icon'>
                <AssessmentOutlined />
              </div>
              Reports
            </li>
          </ul>
        </div>
        <div className='Sidebar-menu'>
          <h3 className='sidebar-title'>Notifications</h3>
          <ul className='sidebar-list'>
            <li className='sidebar-item active btn-grad'>
              <div className='sidebar-icon'>
                <EmailOutlined />
              </div>
              Mail
            </li>
            <li className='sidebar-item btn-grad'>
              <div className='sidebar-icon'>
                <DynamicFeedOutlined />
              </div>
              Feedback
            </li>
            <li className='sidebar-item btn-grad'>
              <div className='sidebar-icon'>
                <QuestionAnswerOutlined />
              </div>
              Messages
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
