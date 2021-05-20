import React, { useState } from 'react'
import axios from 'axios'

const initialValues = {
  name: '',
  email: '',
  password: '',
  password2: '',
  errors: {},
}

const Register = () => {
  const [form, setForm] = useState(initialValues)

  function handleChange(e) {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  function onSubmit(e) {
    e.preventDefault()
    console.log(form)
    axios
      .post('/api/users/register', form)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.respose.data))
  }

  return (
    <div className='register'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Sign Up</h1>
            <p className='lead text-center'>Create your DevConnector account</p>
            <form onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control form-control-lg'
                  placeholder='Name'
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='form-group'>
                <input
                  type='email'
                  className='form-control form-control-lg'
                  placeholder='Email Address'
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                />
                <small className='form-text text-muted'>
                  This site uses Gravatar so if you want a profile image, use a
                  Gravatar email
                </small>
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
              <div className='form-group'>
                <input
                  type='password'
                  className='form-control form-control-lg'
                  placeholder='Confirm Password'
                  name='password2'
                  value={form.password2}
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

export default Register
