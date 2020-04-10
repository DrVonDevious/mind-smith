import React, { useState } from 'react';
import Navbar from './components/Navbar'
import Login from './components/LoginForm'
import Register from './components/Register'
import ProfileContainer from './containers/ProfileContainer'
import Channels from './components/Channels'

function App() {

  const [currentPage, setCurrentPage] = useState("home")
  const [loginOverlay, setLoginOverlay] = useState(true)
  const [registerOverlay, setRegisterOverlay] = useState(false)

  return (
    <div >
      <Navbar />
      <Channels/>
      {loginOverlay && <Login />}
      {registerOverlay && <Register />}
      {currentPage === "profile" ? <ProfileContainer /> : null}
    </div>
  );
}

export default App;
