import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../actions/authActions'
import { useHistory } from 'react-router-dom'

const initialValues = {
  name: '',
  email: '',
  password: '',
  password2: '',
}

const Register = () => {
  const [form, setForm] = useState(initialValues)
  const history = useHistory()
  const dispatch = useDispatch()
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  const errors = useSelector((state) => state.errors)

  useEffect(() => {
    if (isAuthenticated) history.push('/dashboard')
  }, [isAuthenticated])

  function handleChange(e) {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  function onSubmit(e) {
    e.preventDefault()
    dispatch(registerUser(form, history))
  }

  return (
    <div className='register'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Sign Up</h1>
            <p className='lead text-center'>Create your DevConnector account</p>
            <form onSubmit={onSubmit} noValidate>
              <div className='form-group'>
                <input
                  type='text'
                  className={`form-control form-control-lg ${
                    errors.name && 'is-invalid'
                  }`}
                  placeholder='Name'
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && (
                  <div className='invalid-feedback'>{errors.name}</div>
                )}
              </div>
              <div className='form-group'>
                <input
                  type='email'
                  className={`form-control form-control-lg ${
                    errors.email && 'is-invalid'
                  }`}
                  placeholder='Email Address'
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <div className='invalid-feedback'>{errors.email}</div>
                )}
                <small className='form-text text-muted'>
                  This site uses Gravatar so if you want a profile image, use a
                  Gravatar email
                </small>
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  className={`form-control form-control-lg ${
                    errors.password && 'is-invalid'
                  }`}
                  placeholder='Password'
                  name='password'
                  value={form.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <div className='invalid-feedback'>{errors.password}</div>
                )}
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  className={`form-control form-control-lg ${
                    errors.password2 && 'is-invalid'
                  }`}
                  placeholder='Confirm Password'
                  name='password2'
                  value={form.password2}
                  onChange={handleChange}
                />
                {errors.password2 && (
                  <div className='invalid-feedback'>{errors.password2}</div>
                )}
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
