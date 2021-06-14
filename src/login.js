import React, { useState } from 'react'

const login = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='firstName'>Name : </label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Password : </label>
          <input
            type='password'
            id='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit'>add person</button>
      </form>
    </div>
  )
}

export default login
