import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletePost, addLike, removeLike } from '../../actions/postActions'
import { Link } from 'react-router-dom'

const PostItem = ({ post, showActions }) => {
  const dispatch = useDispatch()
  const { auth } = useSelector((state) => state)

  function onDeleteClick(e) {
    dispatch(deletePost(post._id))
  }
  function onLikeClick(e) {
    dispatch(addLike(post._id))
  }
  function onUnlikeClick(e) {
    dispatch(removeLike(post._id))
  }

  const likesArray = post.likes.map((like) => like.user)

  return (
    <div className='card card-body mb-3'>
      <div className='row'>
        <div className='col-md-2'>
          <Link to=''>
            <img
              className='rounded-circle d-none d-md-block'
              src={post.avatar}
              alt=''
            />
          </Link>
          <br />
          <p className='text-center'>{post.name}</p>
        </div>
        <div className='col-md-10'>
          <p className='lead'>{post.text}</p>
          {showActions ? (
            <span>
              <button
                type='button'
                className='btn btn-light mr-1'
                onClick={onLikeClick}
              >
                <i
                  className={`fas fa-thumbs-up ${
                    likesArray.includes(auth.user.id) && 'text-info'
                  }`}
                ></i>
                <span className='badge badge-light'>{post.likes.length}</span>
              </button>
              <button
                type='button'
                className='btn btn-light mr-1'
                onClick={onUnlikeClick}
              >
                <i className='text-secondary fas fa-thumbs-down'></i>
              </button>
              <Link to={`/post/${post._id}`} className='btn btn-info mr-1'>
                Comments
              </Link>
              {post.user === auth.user.id ? (
                <button
                  type='button'
                  className='btn btn-danger mr-1'
                  onClick={onDeleteClick}
                  id={post._id}
                >
                  <i className='fas fa-times' />
                </button>
              ) : null}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  )
}

PostItem.defaultProps = {
  showActions: true,
}

export default PostItem
