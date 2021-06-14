import React from 'react'
const table = () => {
  return (
    <>
      <h3>Vendor List</h3>

      <table className='table'>
        <thead>
          <tr className='table-tr'>
            <th className='table-th'>Reg.no</th>
            <th className='table-th'>Part Type</th>
            <th className='table-th'>City Name</th>
            <th className='table-th'>Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1123</td>
            <td>Software</td>
            <td>Mumbai</td>
            <td>86.9%</td>
          </tr>
          <tr>
            <td>1124</td>
            <td>Electronic</td>
            <td>Hyderabad</td>
            <td>72.4%</td>
          </tr>
          <tr>
            <td>1124</td>
            <td>Software</td>
            <td>Chennai</td>
            <td>88%</td>
          </tr>
          <tr>
            <td>1125</td>
            <td>Electronic</td>
            <td>Gwalior</td>
            <td>66.9%</td>
          </tr>
          <tr>
            <td>1126</td>
            <td>Mechanical</td>
            <td>Indore</td>
            <td>96.5%</td>
          </tr>
          <tr>
            <td>1127</td>
            <td>Software</td>
            <td>Delhi</td>
            <td>96.9%</td>
          </tr>
          <tr>
            <td>1123</td>
            <td>Software</td>
            <td>Mumbai</td>
            <td>86.9%</td>
          </tr>
          <tr>
            <td>1124</td>
            <td>Electronic</td>
            <td>Hyderabad</td>
            <td>72.4%</td>
          </tr>
          <tr>
            <td>1124</td>
            <td>Software</td>
            <td>Chennai</td>
            <td>88%</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default table
