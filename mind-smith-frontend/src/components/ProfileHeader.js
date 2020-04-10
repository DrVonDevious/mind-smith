import React from 'react'
import './ProfileHeader.css'

const ProfileHeader = () => {
  return (
    <div className="profile-header">
      <img className="profile-img" src="https://giantbomb1.cbsistatic.com/uploads/square_small/3/34651/1145914-jackburton.jpg" />
      <div className="profile-info">
        <h2 className="profile-name">Profile Name</h2>
        <h4 className="profile-bio">Profile Bio</h4>
      </div>
    </div>
  )
}

export default ProfileHeader
