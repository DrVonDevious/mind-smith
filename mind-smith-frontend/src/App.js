import React, { useState } from 'react';
import Login from './components/LoginForm'
import Register from './components/Register'
import DynamicContainer from './components/DynamicContainer'
import ProfileContainer from './containers/ProfileContainer'


function App() {

  const [currentPage, setCurrentPage] = useState("home")
  const [loginOverlay, setLoginOverlay] = useState(true)
  const [registerOverlay, setRegisterOverlay] = useState(false)

  return (
    <div >
      <DynamicContainer />
      <Channels />
      {loginOverlay && <Login />}
      {registerOverlay && <Register />}
      {currentPage === "profile" ? <ProfileContainer /> : null}
    </div>
  );
}

export default App;
