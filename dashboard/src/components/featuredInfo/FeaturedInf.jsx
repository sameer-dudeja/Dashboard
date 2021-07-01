import { ArrowDownwardOutlined, ArrowUpwardOutlined } from '@material-ui/icons'
import React from 'react'
import './featuredInf.css'
export default function FeaturedInf() {
  return (
    <div className='featured'>
      <div className='featured-item fi-btn-grad'>
        <span className='featured-title'>Revenue</span>
        <div className='fi-container'>
          <span className='featured-money'>$2,415</span>
          <span className='featured-money-rate'>
            -11.5 <ArrowDownwardOutlined className='fi-icon negative' />
          </span>
        </div>
        <span className='featured-sub'>Compared To Last Month</span>
      </div>
      <div className='featured-item fi-btn-grad'>
        <span className='featured-title'>Sales</span>
        <div className='fi-container'>
          <span className='featured-money'>$3,415</span>
          <span className='featured-money-rate'>
            +21.5 <ArrowUpwardOutlined className='fi-icon' />
          </span>
        </div>
        <span className='featured-sub'>Compared To Last Month</span>
      </div>
      <div className='featured-item fi-btn-grad'>
        <span className='featured-title'>Cost</span>
        <div className='fi-container'>
          <span className='featured-money'>$20,415</span>
          <span className='featured-money-rate'>
            +7.5 <ArrowUpwardOutlined className='fi-icon' />
          </span>
        </div>
        <span className='featured-sub'>Compared To Last Month</span>
      </div>
    </div>
  )
}
