import { Visibility } from '@material-ui/icons'
import React from 'react'
import './widgetSM.css'

export default function WidgetSM() {
  return (
    <div className='widget-sm'>
      <span className='widget-sm-title'>New Memebers</span>
      <ul className='widget-sm-list'>
        <li className='widget-sm-listitem'>
          <img
            src='https://avatars.githubusercontent.com/u/17?v=4'
            alt='Chris Van Pelt'
            className='widget-sm-img'
          />
          <div className='widget-sm-user'>
            <span className='widget-sm-username'>Chris Van Pelt</span>
            <span className='widget-sm-userjob'>Software Developer</span>
          </div>
          <button className='widget-sm-btn'>
            <Visibility className='widget-sm-icon' /> Display
          </button>
        </li>
        <li className='widget-sm-listitem'>
          <img
            src='https://avatars.githubusercontent.com/u/17?v=4'
            alt='Chris Van Pelt'
            className='widget-sm-img'
          />
          <div className='widget-sm-user'>
            <span className='widget-sm-username'>Chris Van Pelt</span>
            <span className='widget-sm-userjob'>Software Developer</span>
          </div>
          <button className='widget-sm-btn'>
            <Visibility className='widget-sm-icon' /> Display
          </button>
        </li>
        <li className='widget-sm-listitem'>
          <img
            src='https://avatars.githubusercontent.com/u/17?v=4'
            alt='Chris Van Pelt'
            className='widget-sm-img'
          />
          <div className='widget-sm-user'>
            <span className='widget-sm-username'>Chris Van Pelt</span>
            <span className='widget-sm-userjob'>Software Developer</span>
          </div>
          <button className='widget-sm-btn'>
            <Visibility className='widget-sm-icon' /> Display
          </button>
        </li>
        <li className='widget-sm-listitem'>
          <img
            src='https://avatars.githubusercontent.com/u/17?v=4'
            alt='Chris Van Pelt'
            className='widget-sm-img'
          />
          <div className='widget-sm-user'>
            <span className='widget-sm-username'>Chris Van Pelt</span>
            <span className='widget-sm-userjob'>Software Developer</span>
          </div>
          <button className='widget-sm-btn'>
            <Visibility className='widget-sm-icon' /> Display
          </button>
        </li>
        <li className='widget-sm-listitem'>
          <img
            src='https://avatars.githubusercontent.com/u/17?v=4'
            alt='Chris Van Pelt'
            className='widget-sm-img'
          />
          <div className='widget-sm-user'>
            <span className='widget-sm-username'>Chris Van Pelt</span>
            <span className='widget-sm-userjob'>Software Developer</span>
          </div>
          <button className='widget-sm-btn'>
            <Visibility className='widget-sm-icon' /> Display
          </button>
        </li>
      </ul>
    </div>
  )
}
