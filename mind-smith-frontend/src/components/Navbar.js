import React from 'react'
import NavbarSearch from './NavbarSearch'
import './Navbar.css'

const Navbar = (props) => {
  return (
    <div className="navbar">
      <button className="navbar-brand" onClick={() => props.handleChangePage("home")}>MindSmith</button>
      <NavbarSearch />
      <button className="navbar-link" onClick={() => props.handleLoginRegister("login")}>Login</button>
      {/* <button className="navbar-link">Logout</button> */}
      <button className="navbar-link" onClick={() => props.handleLoginRegister("register")}>Register</button>
      <button className="navbar-link" onClick={() => props.handleChangePage("channels")}>Channels</button>
      <img  className="navbar-profile" src="" />
    </div>
  )
}

export default Navbar
