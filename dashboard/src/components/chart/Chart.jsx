import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import './chart.css'
export default function Chart({ title, data, dataKey, grid }) {
  return (
    <div className='chart'>
      <h3 className='chart-title '>{title}</h3>
      <ResponsiveContainer width='100%' aspect={4 / 1}>
        <LineChart data={data}>
          {grid && <CartesianGrid strokeDasharray='3 3' />}
          <XAxis dataKey='name' stroke='#1a2980'></XAxis>
          <Line type='monotone' stroke='#1a2980' dataKey={dataKey}></Line>
          <Line type='monotone' stroke='#1fa2ff' dataKey='Sales'></Line>
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
