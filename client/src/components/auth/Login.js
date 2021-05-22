import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loginUser } from '../../actions/authActions'
import TextFieldGroup from '../common/TextFieldGroup'

import { useHistory } from 'react-router-dom'

const initialState = {
  email: '',
  password: '',
}

const Login = () => {
  const [form, setForm] = useState(initialState)
  const errors = useSelector((state) => state.errors)
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    if (isAuthenticated) history.push('/dashboard')
  }, [isAuthenticated, history])

  function handleChange(e) {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  function onSubmit(e) {
    e.preventDefault()
    dispatch(loginUser(form))
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
              <TextFieldGroup
                name='email'
                placeholder='Email Address'
                type='email'
                value={form.email}
                onChange={handleChange}
                error={errors.email}
              />
              <TextFieldGroup
                name='password'
                placeholder='Password'
                type='password'
                value={form.password}
                onChange={handleChange}
                error={errors.password}
              />
              <input type='submit' className='btn btn-info btn-block mt-4' />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
