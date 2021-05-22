import React from 'react'
import Moment from 'react-moment'
import { useDispatch } from 'react-redux'
import { deleteExperience } from '../../actions/profileActions'

const Experience = ({ experience }) => {
  const dispatch = useDispatch()

  function onDelete(e) {
    dispatch(deleteExperience(e.target.id))
  }

  const renderExperience = experience.map((exp) => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td>{exp.title}</td>
      <td>
        <Moment format='DD//MM/YYYY'>{exp.from}</Moment> -{' '}
        {exp.to === null ? (
          ' Now'
        ) : (
          <Moment format='DD//MM/YYYY'>{exp.to}</Moment>
        )}
      </td>
      <td>
        <button onClick={onDelete} id={exp._id} className='btn btn-danger'>
          Delete
        </button>
      </td>
    </tr>
  ))

  return (
    <div>
      <h4 className='mb-4'>Experience Credentials</h4>
      <table className='table'>
        <tr>
          <th>Company</th>
          <th>Title</th>
          <th>Years</th>
          <th></th>
        </tr>
        <tbody>{renderExperience}</tbody>
      </table>
    </div>
  )
}

export default Experience
