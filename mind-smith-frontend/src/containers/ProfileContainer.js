import React, { useState, useEffect } from 'react'
import ProfileHeader from '../components/ProfileHeader'
import ProfilePostsContainer from './ProfilePostsContainer'
import './ProfileContainer.css'

const ProfileContainer = (props) => {

  const [posts, setPosts] = useState([])

  const getPosts = () => {
    fetch("http://localhost:3000/posts")
      .then(res => res.json())
      .then(posts => {
        setPosts(posts.filter(p => p.user_id === props.user.id))
      })
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div>
      <ProfileHeader handleUpdateUser={props.handleUpdateUser} user={props.user}/>
      <ProfilePostsContainer posts={posts} />
    </div>
  )
}

export default ProfileContainer
