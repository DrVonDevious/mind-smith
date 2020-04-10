import React, { useState } from 'react';
import Navbar from './components/Navbar'
import Login from './components/LoginForm'
import Register from './components/Register'
import ProfileContainer from './containers/ProfileContainer'
import Channels from './components/Channels'
import SideBar from './components/SideBar'


function App() {

  const [currentPage, setCurrentPage] = useState("channels")
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
  }

  return (
    <div >
      <Navbar handleLoginRegister={showLoginRegister} />
      {loginOverlay && <Login handleCloseOverlay={closeOverlay}/>}
      {registerOverlay && <Register handleCloseOverlay={closeOverlay}/>}
      {displayCurrentPage()}
      <SideBar/>
    </div>
  );
}

export default App;
