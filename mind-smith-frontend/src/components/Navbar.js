import React from 'react'
import NavbarSearch from './NavbarSearch'
import './Navbar.css'

const Navbar = (props) => {
 
  return (
    <div className="navbar">
      <button className="navbar-brand" onClick={() => props.handleChangePage("home")}>MindSmith</button>
      <NavbarSearch />
       <button className="navbar-link">{props.currentUser&&` Welcome ${props.currentUser.username}`}</button>
       {props.currentUser&& <button onClick={props.handleLogout} className="navbar-link" >Logout</button>}
       {!props.currentUser && <button className="navbar-link" onClick={() => props.handleLoginRegister("login")}>Login</button>}
       {!props.currentUser &&<button className="navbar-link" onClick={() => props.handleLoginRegister("register")}>Register</button>}
      <button className="navbar-link" onClick={() => props.handleChangePage("channels")}>Channels</button>
      <img  className="navbar-profile" src="" />
    </div>
  )
}

export default Navbar
