import React, { useState } from 'react'
import './ProfileHeader.css'

const ProfileHeader = (props) => {

  const [showBioForm, setShowBioForm] = useState(false)
  const [showUsernameForm, setShowUsernameForm] = useState(false)
  const [showImgForm, setShowImgForm] = useState(false)

  const toggleForm = (div) => {
    switch(div) {
      case "bio":
        setShowBioForm(!showBioForm)
        break
      case "img":
        setShowImgForm(!showImgForm)
        break
      case "Username":
        setShowUsernameForm(!showUsernameForm)
        break
      default: return null
    }
  }

  const renderForm = (form) => {
    switch(form) {
      case "bio":
        return [
          <form onSubmit={(e) => {props.handleUpdateUser(e, form); toggleForm(form)}}>
            <input type="text" placeholder="Enter a new bio..." />
            <button>Submit</button>
          </form>
        ]
      case "username":
        return [
          <form onSubmit={(e) => {props.handleUpdateUser(e, form); toggleForm(form)}}>
            <input type="text" placeholder="Enter a new Username..." />
            <button>Submit</button>
          </form>
        ]
      case "img":
        return [
          <form onSubmit={(e) => {props.handleUpdateUser(e, form); toggleForm(form)}}>
            <input type="text" placeholder="Enter an image url..." />
            <button>Submit</button>
          </form>
        ]
      default: return null
    }
  }

  return (
    <div className="profile-header">
      <img className="profile-img" 
        src={ props.user.img_url /*"https://giantbomb1.cbsistatic.com/uploads/square_small/3/34651/1145914-jackburton.jpg"*/}
           onClick={() => toggleForm("img")}
      />
      <div className="profile-info">
        <h2 className="profile-name">{props.user.username}</h2>
        <h4 className="profile-bio">
          {props.user.bio ? props.user.bio : "Your bio is empty..."}  <i
            class="pencil alternate icon" onClick={() => toggleForm("bio")}></i>
        </h4>
        { showBioForm ? renderForm("bio") : null }
        { showImgForm ? renderForm("img") : null }
      </div>
    </div>
  )
}

export default ProfileHeader
