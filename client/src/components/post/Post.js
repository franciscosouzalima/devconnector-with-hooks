import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getPost } from '../../actions/postActions'
import { useParams } from 'react-router-dom'
import PostItem from '../posts/PostItem'
import CommentForm from './CommentForm'
import CommentFeed from './CommentFeed'
import Spinner from '../common/Spinner'
import { useDispatch, useSelector } from 'react-redux'

const Post = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { post, loading } = useSelector((state) => state.post)

  useEffect(() => {
    dispatch(getPost(id))
  }, [dispatch, id])

  return (
    <div className='post'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <Link to='/feed' className='btn btn-light mb-3'>
              Back to Feed
            </Link>
            {post === null || loading || Object.keys(post).length === 0 ? (
              <Spinner />
            ) : (
              <div>
                <PostItem post={post} showActions={false} />
                <CommentForm postId={post._id} />
                <CommentFeed postId={post._id} comments={post.comments} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
