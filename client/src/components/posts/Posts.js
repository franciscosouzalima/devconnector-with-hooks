import React, { useEffect } from 'react'
import PostForm from './PostForm'
import Spinner from '../common/Spinner'
import PostFeed from './PostFeed'
import { getPosts } from '../../actions/postActions'
import { useDispatch, useSelector } from 'react-redux'

const Posts = () => {
  const dispatch = useDispatch()
  const { posts, loading } = useSelector((state) => state.post)

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <div className='feed'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <PostForm />
            {posts === null || loading ? (
              <Spinner />
            ) : (
              <PostFeed posts={posts} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Posts
