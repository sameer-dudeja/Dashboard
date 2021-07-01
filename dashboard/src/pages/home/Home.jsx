import React from 'react'
import FeaturedInf from '../../components/featuredInfo/FeaturedInf'
import Chart from '../../components/chart/Chart'
import './home.css'
export default function home() {
  return (
    <div className='home'>
      <FeaturedInf />
      <Chart />
    </div>
  )
}
