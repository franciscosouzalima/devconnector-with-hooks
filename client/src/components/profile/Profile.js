import React, { useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { getProfileByHandle } from '../../actions/profileActions'
import ProfileCreds from './ProfileCreds'
import ProfileAbout from './ProfileAbout'
import ProfileGithub from './ProfileGithub'
import ProfileHeader from './ProfileHeader'
import Spinner from '../common/Spinner'

const Profile = () => {
  const { handle } = useParams()
  const dispatch = useDispatch()
  const { profile, loading } = useSelector((state) => state.profile)
  const history = useHistory()

  useEffect(() => {
    if (handle) {
      dispatch(getProfileByHandle(handle))
    }
  }, [handle, dispatch])

  useEffect(() => {
    if (profile === null && loading) {
      history.push('/not-found')
    }
  }, [profile, history, loading])

  let profileContent

  if (profile === null || loading) {
    profileContent = <Spinner />
  } else {
    profileContent = (
      <div>
        <div className='row'>
          <div className='col-md-6'>
            <Link to='/profiles' className='btn btn-light mb-3 float-left'>
              Back to Profiles
            </Link>
          </div>
          <div className='col-md-6' />
        </div>
        <ProfileHeader profile={profile} />
        <ProfileAbout profile={profile} />
        <ProfileCreds
          education={profile.education}
          experience={profile.experience}
        />
        {profile.githubusername ? (
          <ProfileGithub username={profile.githubusername} />
        ) : null}
      </div>
    )
  }

  return (
    <div className='profile'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>{profileContent}</div>
        </div>
      </div>
    </div>
  )
}

export default Profile
