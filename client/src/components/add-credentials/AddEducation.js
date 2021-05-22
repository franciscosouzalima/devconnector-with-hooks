import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import TextAreaFieldGroup from '../common/TextAreaFieldGroup'
import TextFieldGroup from '../common/TextFieldGroup'
import { addEducation } from '../../actions/profileActions'

const AddEducation = () => {
  const [form, setForm] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
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
    dispatch(addEducation(form, history))
  }

  function onCheck() {
    setForm({ ...form, current: !form.current, disabled: !form.disabled })
  }

  return (
    <div className='section add-education'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <Link to='/dashboard' className='btn btn-light'>
              Go Back
            </Link>
            <h1 className='display-4 text-center'>Add Education</h1>
            <p className='lead text-center'>
              Add any school/bootcamp you have attended
            </p>
            <small className='d-block pb-3'>* = required field</small>
            <form onSubmit={onSubmit}>
              <TextFieldGroup
                placeholder='* School'
                name='school'
                value={form.school}
                onChange={onChange}
                error={errors.school}
              />
              <TextFieldGroup
                placeholder='* Degree or Certification'
                name='degree'
                value={form.degree}
                onChange={onChange}
                error={errors.degree}
              />
              <TextFieldGroup
                placeholder='* Field of Study'
                name='fieldofstudy'
                value={form.fieldofstudy}
                onChange={onChange}
                error={errors.fieldofstudy}
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
                <label className='form-check-label' for='current'>
                  Current
                </label>
              </div>

              <TextAreaFieldGroup
                placeholder='Program Description'
                name='description'
                value={form.description}
                onChange={onChange}
                error={errors.description}
                info='Tell us about the program'
              />

              <input type='submit' className='btn btn-info btn-block mt-4' />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddEducation
