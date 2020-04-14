import React from 'react'
import Post from '../components/PostView'

const ProfilePostsContainer = (props) => {
  console.log(props.posts)
  return (
    <div>
      {props.posts.map(p => <Post postId={p.id} />)}
    </div>
  )
}

export default ProfilePostsContainer
