import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import './chart.css'
const data = [
  {
    name: 'Jan',
    userv: 4000,
    salesv: 2400,
  },
  {
    name: 'Mar',
    userv: 2000,
    salesv: 1400,
  },
  {
    name: 'May',
    userv: 5000,
    salesv: 3400,
  },
  {
    name: 'July',
    userv: 6000,
    salesv: 5400,
  },
  {
    name: 'Sept',
    userv: 8000,
    salesv: 3400,
  },
  {
    name: 'Dec',
    userv: 4000,
    salesv: 2400,
  },
]

export default function Chart() {
  return (
    <div className='chart'>
      <h3 className='chart-title '>User Analytics</h3>
      <ResponsiveContainer width='100%' aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey='name' stroke='#1fa2ff'></XAxis>
          <Line type='monotone' stroke='#1a2980' dataKey='userv'></Line>
          <Line type='monotone' stroke='#1fa2ff' dataKey='salesv'></Line>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
