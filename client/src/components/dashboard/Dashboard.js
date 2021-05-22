import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCurrentProfile, deleteAccount } from '../../actions/profileActions'
import ProfileActions from './ProfileActions'
import Spinner from '../common/Spinner'

const Dashboard = () => {
  const dispatch = useDispatch()
  const { profile, loading } = useSelector((state) => state.profile)
  const user = useSelector((state) => state.auth.user)

  useEffect(() => {
    dispatch(getCurrentProfile())
    // getCurrentProfile()
  }, [dispatch])

  function onDeleteClick(e) {
    dispatch(deleteAccount())
  }

  let dashBoardContent

  if (profile === null || loading) {
    dashBoardContent = <Spinner />
  } else {
    if (Object.keys(profile).length > 0) {
      dashBoardContent = (
        <div>
          <p className='lead text-muted'>
            Welcome <Link to={`/profile/${profile.handle}`}>{user.name}</Link>
          </p>
          <ProfileActions />
          <div style={{ marginBottom: '60px' }}>
            <button onClick={onDeleteClick} className='btn btn-danger'>
              Delete My Acount
            </button>
          </div>
        </div>
      )
    } else {
      dashBoardContent = (
        <div>
          <p className='lead text-muted'>Welcome {user.name}</p>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to='/create-profile' className='btn btn-lg btn-info'>
            Create Profile
          </Link>
        </div>
      )
    }
  }

  return (
    <div className='dashboard'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h1 className='display-4'>Dashboard</h1>
            {dashBoardContent}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
