import React from 'react'
import ProfileHeader from '../components/ProfileHeader'
import ProfilePostsContainer from './ProfilePostsContainer'
import './ProfileContainer.css'

const ProfileContainer = () => {
  return (
    <div className="profile">
      <ProfileHeader />
      <ProfilePostsContainer />
    </div>
  )
}

export default ProfileContainer
