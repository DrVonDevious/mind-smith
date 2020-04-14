import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar'
import Login from './components/LoginForm'
import Register from './components/Register'
import ProfileContainer from './containers/ProfileContainer'
import Channels from './components/Channels'
import SideBar from './components/SideBar'
import ChannelPosts from './components/ChannelPosts'
import ChatContainer from './containers/ChatContainer'

function App() {

  // TODO: Should use actual authentication because we dont want to end up like Zoom :(
  const [currentUser, setCurrentUser] = useState(null)
  const [currentPage, setCurrentPage] = useState("channels") //TODO: Set to home once it's created
  const [loginOverlay, setLoginOverlay] = useState(false)
  const [registerOverlay, setRegisterOverlay] = useState(false)
  const [users, setUsers] = useState([])
  const [channels, setChannels] = useState([])
  const [channel, setChannel] = useState(null)

  useEffect(() => {
    // Get all users
    fetch("http://localhost:3000/users")
      .then(res => res.json())
      .then(users => {
        setUsers(users)
      })
    // Get all channels
    fetch("http://localhost:3000/channels")
      .then(res => res.json())
      .then(channels => setChannels(channels))
  }, [])

  const showLoginRegister = (e) => {
    if (e === "login") {
      setRegisterOverlay(false)
      setLoginOverlay(true)
    } else {
      setRegisterOverlay(true)
      setLoginOverlay(false)
    }
  }

  const closeOverlay = () => {
    setRegisterOverlay(false)
    setLoginOverlay(false)
  }

  const updateUser = (e, section) => {
    e.preventDefault()
    fetch(`http://localhost:3000/users/${currentUser.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: section === "username" ? e.target[0].value : currentUser.username,
        bio: section === "bio" ? e.target[0].value : currentUser.bio,
        img_url: section === "img" ? e.target[0].value : currentUser.img_url
      })
    })
    switch(section) {
      case "bio":
        setCurrentUser((user) => { return {...user, bio: e.target[0].value }})
        break
      case "img":
        setCurrentUser((user) => { return {...user, img_url: e.target[0].value }})
        break
      case "username":
        setCurrentUser((user) => { return {...user, username: e.target[0].value }})
        break
      default: return null
    }
  }

  const displayCurrentPage = () => {
    switch (currentPage) {
      case "profile": return <ProfileContainer user={currentUser} handleUpdateUser={updateUser}/>
      case "channels": return <Channels onCreateChannel={onCreateChannel} channels={channels} setChannel={setChannel} changePage={changePage} currentUser={currentUser}/>
      case "channelPosts": return <ChannelPosts channel={channel}/>
    }
  }

  const onCreateChannel = (c) => {
    setChannels([...channels, c])
  }

  const changePage = (e) => {
    setCurrentPage(e)
  }

  const handleLogout = () =>{
    setCurrentUser(null)
    //toDo clear token here
  }


  return (
    <div className="root">

      <Navbar users={users}
              channels={channels}
              currentUser={currentUser}
              handleLoginRegister={showLoginRegister}
              handleChangePage={changePage}
              handleLogout={handleLogout}
              setChannel={setChannel}
      />


      <section  className="content">
        <div className="container">
          <div className="row">

            {!currentUser && loginOverlay && <Login setUser={setCurrentUser} users={users} handleCloseOverlay={closeOverlay}/>}
            {!currentUser && registerOverlay && <Register handleCloseOverlay={closeOverlay} setUser={setCurrentUser}/>}
            {displayCurrentPage()}
            {/* {!currentPage === "profile" ? <SideBar/> : null} */}
            <SideBar></SideBar>
            <ChatContainer />

          </div>
        </div>
      </section>

    </div>
  );
}

export default App
