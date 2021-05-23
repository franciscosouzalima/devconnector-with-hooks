import React, { useState } from 'react'
import TextAreaFieldGroup from '../common/TextAreaFieldGroup'
import { addComment, clearErrors } from '../../actions/postActions'
import { useDispatch, useSelector } from 'react-redux'

const CommentForm = ({ postId }) => {
  const [text, setText] = useState('')
  const { errors, auth } = useSelector((state) => state)
  const dispatch = useDispatch()

  const newComment = {
    text,
    name: auth.user.name,
    avatar: auth.user.avatar,
  }

  function handleChange(e) {
    setText(e.target.value)
  }

  function onSubmit(e) {
    e.preventDefault()
    dispatch(addComment(postId, newComment))
    setText('')
  }

  return (
    <div className='post-form mb-3'>
      <div className='card card-info'>
        <div className='card-header bg-info text-white'>Make a comment...</div>
        <div className='card-body'>
          <form onSubmit={onSubmit}>
            <div className='form-group'>
              <TextAreaFieldGroup
                placeHolder='Reply to post'
                name='text'
                value={text}
                onChange={handleChange}
                error={errors.text}
              />
            </div>
            <button type='submit' className='btn btn-dark'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CommentForm
