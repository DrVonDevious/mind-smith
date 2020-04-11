import React, { useState } from 'react';
import Navbar from './components/Navbar'
import Login from './components/LoginForm'
import Register from './components/Register'
import DynamicContainer from './components/DynamicContainer'
import ProfileContainer from './containers/ProfileContainer'
import Channels from './components/Channels'


function App() {

  const [currentPage, setCurrentPage] = useState("post")
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

  return (
    <div >
      <Navbar handleLoginRegister={showLoginRegister} />
      <DynamicContainer />
      {/* <Channels/> */}
      {loginOverlay && <Login handleCloseOverlay={closeOverlay} />}
      {registerOverlay && <Register handleCloseOverlay={closeOverlay} />}
      {currentPage === "profile"
        ? <ProfileContainer />
        : currentPage === "post"
          ? <PostView />
          : null}
    </div>
  );
}

export default App;
