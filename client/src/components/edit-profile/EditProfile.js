import React, { useEffect, useState } from 'react'
import TextAreaFieldGroup from '../common/TextAreaFieldGroup'
import SelectListGroup from '../common/SelectListGroup'
import TextFieldGroup from '../common/TextFieldGroup'
import InputGroup from '../common/InputGroup'
import { createProfile, getCurrentProfile } from '../../actions/profileActions'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'

const CreateProfile = () => {
  const [form, setForm] = useState({
    displaySocialInputs: false,
    handle: '',
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: '',
    errors: {},
  })

  const errors = useSelector((state) => state.errors)
  const profile = useSelector((state) => state.profile.profile)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    dispatch(getCurrentProfile())

    setForm({
      ...form,
      handle: profile.handle,
      company: profile.company,
      website: profile.website,
      location: profile.location,
      status: profile.status,
      githubusername: profile.githubusername,
      bio: profile.bio,
      skills: profile.skills.join(','),
      twitter: profile.social.twitter,
      facebook: profile.social.facebook,
      linkedin: profile.social.linkedin,
      youtube: profile.social.youtube,
      instagram: profile.social.instagram,
    })
  }, [])

  function onSubmit(e) {
    e.preventDefault()
    dispatch(createProfile(form, history))
  }

  function onChange(e) {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  function handleSocialToggle(e) {
    e.preventDefault()
    setForm({
      ...form,
      displaySocialInputs: !form.displaySocialInputs,
    })
  }

  // Select options for status
  const options = [
    { label: '* Select Professional Status', value: 0 },
    { label: 'Developer', value: 'Developer' },
    { label: 'Junior Developer', value: 'Junior Developer' },
    { label: 'Senior Developer', value: 'Senior Developer' },
    { label: 'Manager', value: 'Manager' },
    { label: 'Student or Learning', value: 'Student or Learning' },
    { label: 'Instructor or Teacher', value: 'Instructor or Teacher' },
    { label: 'Intern', value: 'Intern' },
    { label: 'Other', value: 'Other' },
  ]

  const socialInputs = (
    <div>
      <InputGroup
        placeholder='Twitter Profile URL'
        name='twitter'
        icon='fab fa-twitter'
        value={form.twitter}
        onChange={onChange}
        error={errors.twitter}
      />

      <InputGroup
        placeholder='Facebook Page URL'
        name='facebook'
        icon='fab fa-facebook'
        value={form.facebook}
        onChange={onChange}
        error={errors.facebook}
      />

      <InputGroup
        placeholder='Linkedin Profile URL'
        name='linkedin'
        icon='fab fa-linkedin'
        value={form.linkedin}
        onChange={onChange}
        error={errors.linkedin}
      />

      <InputGroup
        placeholder='YouTube Channel URL'
        name='youtube'
        icon='fab fa-youtube'
        value={form.youtube}
        onChange={onChange}
        error={errors.youtube}
      />

      <InputGroup
        placeholder='Instagram Page URL'
        name='instagram'
        icon='fab fa-instagram'
        value={form.instagram}
        onChange={onChange}
        error={errors.instagram}
      />
    </div>
  )

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <Link to='/dashboard' className='btn btn-light'>
              Go Back
            </Link>
            <h1 className='display-4 text-center'>Edit Your Profile</h1>

            <small className='d-block pb-4'>* = required fields</small>

            <form onSubmit={onSubmit}>
              <TextFieldGroup
                placeholder='* Profile Handle'
                name='handle'
                value={form.handle}
                onChange={onChange}
                error={errors.handle}
                info='A unique handle for your profile URL. Your full name, company name, nickname'
              />
              <SelectListGroup
                placeholder='Status'
                name='status'
                value={form.status}
                onChange={onChange}
                options={options}
                error={errors.status}
                info='Give us an idea of where you are at in your career'
              />
              <TextFieldGroup
                placeholder='Company'
                name='company'
                value={form.company}
                onChange={onChange}
                error={errors.company}
                info='Could be your own company or one you work for'
              />
              <TextFieldGroup
                placeholder='Website'
                name='website'
                value={form.website}
                onChange={onChange}
                error={errors.website}
                info='Could be your own website or a company one'
              />
              <TextFieldGroup
                placeholder='Location'
                name='location'
                value={form.location}
                onChange={onChange}
                error={errors.location}
                info='City or city & state suggested (eg. Boston, MA)'
              />
              <TextFieldGroup
                placeholder='* Skills'
                name='skills'
                value={form.skills}
                onChange={onChange}
                error={errors.skills}
                info='Please use comma separated values eg.
                    HTML,CSS,JavaScript,PHP'
              />
              <TextFieldGroup
                placeholder='Github Username'
                name='githubusername'
                value={form.githubusername}
                onChange={onChange}
                error={errors.githubusername}
                info='If you want your latest repos and a Github link, include your username'
              />
              <TextAreaFieldGroup
                placeholder='Short Bio'
                name='bio'
                value={form.bio}
                onChange={onChange}
                error={errors.bio}
                info='Tell us a little about yourself'
              />

              <div className='mb-3'>
                <button
                  type='button'
                  onClick={handleSocialToggle}
                  className='btn btn-light'
                >
                  Add Social Network Links
                </button>
                <span className='text-muted'>Optional</span>
              </div>
              {form.displaySocialInputs && socialInputs}
              <input
                type='submit'
                onSubmit={onSubmit}
                className='btn btn-block btn-info mt-4'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateProfile
