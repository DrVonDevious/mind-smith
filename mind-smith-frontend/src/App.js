import React, { useState } from 'react';
import Navbar from './components/Navbar'
import Login from './components/LoginForm'
import Register from './components/Register'
import ProfileContainer from './containers/ProfileContainer'
import Channels from './components/Channels'
import SideBar from './components/SideBar'

function App() {

  // TODO: Should use actual authentication because we dont want to end up like Zoom :(
  const [currentUser, setCurrentUser] = useState({})

  const [currentPage, setCurrentPage] = useState("home")
  const [loginOverlay, setLoginOverlay] = useState(false)
  const [registerOverlay, setRegisterOverlay] = useState(false)

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
      case "channels": return <Channels/>
    }
  const changePage = (e) => {
    setCurrentPage(e)
  }

  return (
    <div >
      <Navbar currentUser={currentUser} handleLoginRegister={showLoginRegister} handleChangePage={changePage}/>
      {loginOverlay && <Login handleCloseOverlay={closeOverlay}/>}
      {registerOverlay && <Register handleCloseOverlay={closeOverlay}/>}
      {displayCurrentPage()}
      <SideBar/>
    </div>
  );
}

export default App;
