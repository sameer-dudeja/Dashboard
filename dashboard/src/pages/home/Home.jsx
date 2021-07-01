import React from 'react'
import FeaturedInf from '../../components/featuredInfo/FeaturedInf'
import Chart from '../../components/chart/Chart'
import WidgetSM from '../../components/widgetsSM/WidgetSM'
import WidgetsLG from '../../components/widgetsLG/WidgetsLG'
import './home.css'
import { userdata } from '../../data'
export default function home() {
  return (
    <div className='home'>
      <FeaturedInf />
      <Chart data={userdata} title='User Analytics' dataKey='Users' grid />
      <div className='home-widgets'>
        <WidgetSM />
        <WidgetsLG />
      </div>
    </div>
  )
}
