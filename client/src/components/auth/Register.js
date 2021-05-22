import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../actions/authActions'
import { useHistory } from 'react-router-dom'
import TextFieldGroup from '../common/TextFieldGroup'

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
  }, [isAuthenticated, history])

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
              <TextFieldGroup
                name='name'
                placeholder='Name'
                type='email'
                value={form.name}
                onChange={handleChange}
                error={errors.name}
              />

              <TextFieldGroup
                name='email'
                placeholder='Email Address'
                type='email'
                value={form.email}
                onChange={handleChange}
                error={errors.email}
                info='This site uses Gravatar so if you want a profile image, use a
                Gravatar email'
              />

              <TextFieldGroup
                name='password'
                placeholder='Password'
                type='password'
                value={form.password}
                onChange={handleChange}
                error={errors.password}
              />

              <TextFieldGroup
                name='password2'
                placeholder='Confirm Password'
                type='password'
                value={form.password2}
                onChange={handleChange}
                error={errors.password2}
              />

              <input type='submit' className='btn btn-info btn-block mt-4' />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
