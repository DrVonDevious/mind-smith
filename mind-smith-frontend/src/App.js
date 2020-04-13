import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar'
import Login from './components/LoginForm'
import Register from './components/Register'
// import DynamicContainer from './components/DynamicContainer'
import ProfileContainer from './containers/ProfileContainer'
import Channels from './components/Channels'
import SideBar from './components/SideBar'
import ChannelPosts from './components/ChannelPosts'
import PostView from './components/PostView'

function App() {


  // TODO: Should use actual authentication because we dont want to end up like Zoom :(
  const [currentUser, setCurrentUser] = useState(null)
  const [currentPage, setCurrentPage] = useState("home")
  const [loginOverlay, setLoginOverlay] = useState(false)
  const [registerOverlay, setRegisterOverlay] = useState(false)
  const [users, setUsers] = useState([])
  const [channel, setChannel] = useState(null)
  const [post, setCurrentPost] = useState(null)



  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then(res => res.json())
      .then(users => {
        setUsers(users)
      })
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

  const displayCurrentPage = () => {
    switch (currentPage) {
      case "profile": return <ProfileContainer />
      case "channels": return <Channels setChannel={setChannel} changePage={changePage} currentUser={currentUser} />
      case "channelPosts": return <ChannelPosts channel={channel} />
      case "post": return <PostView postId={8} changePost={changePost} />
    }
  }

  const changePost = (e) => {
    setCurrentPost(e)
  }

  const changePage = (e) => {
    setCurrentPage(e)
  }

  const handleLogout = () => {
    setCurrentUser(null)
    //toDo clear token here
  }





  return (
    <div >

      <Navbar currentUser={currentUser} handleLoginRegister={showLoginRegister} handleChangePage={changePage} handleLogout={handleLogout} />
      {!currentUser && loginOverlay && <Login setUser={setCurrentUser} users={users} handleCloseOverlay={closeOverlay} />}
      {!currentUser && registerOverlay && <Register handleCloseOverlay={closeOverlay} setUser={setCurrentUser} />}
      {displayCurrentPage()}
      <SideBar />

    </div>
  );
}

export default App
