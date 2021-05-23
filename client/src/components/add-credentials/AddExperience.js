import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import TextAreaFieldGroup from '../common/TextAreaFieldGroup'
import TextFieldGroup from '../common/TextFieldGroup'
import { addExperience } from '../../actions/profileActions'

const AddExperience = () => {
  const [form, setForm] = useState({
    company: '',
    title: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: '',
    errors: {},
    disabled: false,
  })
  const errors = useSelector((state) => state.errors)
  const dispatch = useDispatch()
  const history = useHistory()

  function onChange(e) {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  function onSubmit(e) {
    e.preventDefault()
    dispatch(addExperience(form, history))
  }

  function onCheck() {
    setForm({ ...form, current: !form.current, disabled: !form.disabled })
  }

  return (
    <div className='section add-experience'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <Link to='/dashboard' className='btn btn-light'>
              Go Back
            </Link>
            <h1 className='display-4 text-center'>Add Your Experience</h1>
            <p className='lead text-center'>
              Add any developer/programming positions that you have had in the
              past
            </p>
            <small className='d-block pb-3'>* = required field</small>
            <form onSubmit={onSubmit}>
              <TextFieldGroup
                placeholder='* Company'
                name='company'
                value={form.company}
                onChange={onChange}
                error={errors.company}
              />
              <TextFieldGroup
                placeholder='* Job Title'
                name='title'
                value={form.title}
                onChange={onChange}
                error={errors.title}
              />
              <TextFieldGroup
                placeholder='Location'
                name='location'
                value={form.location}
                onChange={onChange}
                error={errors.location}
              />
              <h6>From Date</h6>
              <TextFieldGroup
                type='date'
                name='from'
                value={form.from}
                onChange={onChange}
                error={errors.from}
              />
              <h6>To Date</h6>
              <TextFieldGroup
                type='date'
                name='to'
                value={form.to}
                onChange={onChange}
                error={errors.to}
                disabled={form.disabled ? 'disabled' : ''}
              />
              <div className='form-check mb-4'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  name='current'
                  value={form.disabled}
                  onChange={onCheck}
                  id='current'
                />
                <label className='form-check-label' htmlFor='current'>
                  Current Job
                </label>
              </div>

              <TextAreaFieldGroup
                placeholder='Job Description'
                name='description'
                value={form.description}
                onChange={onChange}
                error={errors.description}
                info='Tell us about your position'
              />

              <input type='submit' className='btn btn-info btn-block mt-4' />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddExperience
