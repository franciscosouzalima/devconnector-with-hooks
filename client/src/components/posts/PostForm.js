import React, { useState } from 'react'
import TextAreaFieldGroup from '../common/TextAreaFieldGroup'
import { addPost } from '../../actions/postActions'
import { useDispatch, useSelector } from 'react-redux'

const PostForm = () => {
  const [text, setText] = useState('')
  const { errors, auth } = useSelector((state) => state)
  const dispatch = useDispatch()

  const newPost = {
    text,
    name: auth.user.name,
    avatar: auth.user.avatar,
  }

  function handleChange(e) {
    setText(e.target.value)
  }

  function onSubmit(e) {
    e.preventDefault()
    dispatch(addPost(newPost))
    setText('')
  }

  return (
    <div className='post-form mb-3'>
      <div className='card card-info'>
        <div className='card-header bg-info text-white'>Say Something...</div>
        <div className='card-body'>
          <form onSubmit={onSubmit}>
            <div className='form-group'>
              <TextAreaFieldGroup
                placeHolder='Create a post'
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

export default PostForm
