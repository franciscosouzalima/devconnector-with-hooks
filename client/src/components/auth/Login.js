import React, { useState } from 'react'

const initialState = {
  email: '',
  password: '',
}

const Login = () => {
  const [form, setForm] = useState(initialState)

  function handleChange(e) {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  function onSubmit(e) {
    e.preventDefault()
    console.log(form)
  }

  return (
    <div className='login'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Log In</h1>
            <p className='lead text-center'>
              Sign in to your DevConnector account
            </p>
            <form onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='email'
                  className='form-control form-control-lg'
                  placeholder='Email Address'
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  className='form-control form-control-lg'
                  placeholder='Password'
                  name='password'
                  value={form.password}
                  onChange={handleChange}
                />
              </div>
              <input type='submit' className='btn btn-info btn-block mt-4' />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
