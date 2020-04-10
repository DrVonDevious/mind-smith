import React, { useState } from 'react';
import Navbar from './components/Navbar'
import Login from './components/LoginForm'
import Register from './components/Register'
import ProfileContainer from './containers/ProfileContainer'
import Channels from './components/Channels'


function App() {

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

  const changePage = (e) => {
    setCurrentPage(e)
  }

  return (
    <div >
      <Navbar handleLoginRegister={showLoginRegister} handleChangePage={changePage}/>
      {loginOverlay && <Login handleCloseOverlay={closeOverlay}/>}
      {registerOverlay && <Register handleCloseOverlay={closeOverlay}/>}
      {currentPage === "profile" ? <ProfileContainer /> : null}
      {currentPage === "channels" ? <Channels /> : null}
    </div>
  );
}

export default App;
