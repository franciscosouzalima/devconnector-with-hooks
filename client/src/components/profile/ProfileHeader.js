import React from 'react'
import isEmpty from '../../../src/validation/is-empty'
import PropTypes from 'prop-types'

const ProfileHeader = ({ profile }) => {
  return (
    <div className='row'>
      <div className='col-md-12'>
        <div className='card card-body bg-info text-white mb-3'>
          <div className='row'>
            <div className='col-4 col-md-3 m-auto'>
              <img
                className='rounded-circle'
                src={profile.user.avatar}
                alt={profile.user.name}
              />
            </div>
          </div>
          <div className='text-center'>
            <h1 className='display-4 text-center'>{profile.user.name}</h1>
            <p className='lead text-center'>
              {profile.status}{' '}
              {isEmpty(profile.company) ? null : (
                <span>at {profile.company}</span>
              )}
            </p>
            <p>
              {isEmpty(profile.location) ? null : (
                <span>{profile.location}</span>
              )}
            </p>
            <p>
              {isEmpty(profile.website) ? null : (
                <a
                  className='text-white p-2'
                  href={profile.website}
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='fas fa-globe fa-2x'></i>
                </a>
              )}

              {isEmpty(profile.social?.twitter) ? null : (
                <a
                  className='text-white p-2'
                  href={profile.social.twitter}
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='fab fa-twitter fa-2x'></i>
                </a>
              )}

              {isEmpty(profile.social?.facebook) ? null : (
                <a
                  className='text-white p-2'
                  href={profile.social.facebook}
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='fab fa-facebook fa-2x'></i>
                </a>
              )}

              {isEmpty(profile.social?.linkedin) ? null : (
                <a
                  className='text-white p-2'
                  href={profile.social.linkedin}
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='fab fa-linkedin fa-2x'></i>
                </a>
              )}

              {isEmpty(profile.social?.instagram) ? null : (
                <a
                  className='text-white p-2'
                  href={profile.social.instagram}
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='fab fa-instagram fa-2x'></i>
                </a>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

ProfileHeader.propTypes = {
  profile: PropTypes.object.isRequired,
}

export default ProfileHeader
