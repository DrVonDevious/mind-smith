import React from 'react'
import NavbarSearch from './NavbarSearch'
import './Navbar.css'

const Navbar = (props) => {
  return (
    <div className="navbar">
      <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
      <button className="navbar-brand" onClick={() => props.handleChangePage("home")}>MindSmith</button>
      <div className="navbar-right">
        <NavbarSearch />
        {/* <button className="navbar-link">{props.currentUser&&` Welcome ${props.currentUser.username}`}</button> */}
        {props.currentUser && <button onClick={props.handleLogout} className="navbar-link" >Logout</button>}
        {!props.currentUser && <button className="navbar-link" onClick={() => props.handleLoginRegister("login")}>Login</button>}
        {!props.currentUser &&<button className="navbar-link" onClick={() => props.handleLoginRegister("register")}>Register</button>}
        <button className="navbar-link" onClick={() => props.handleChangePage("channels")}>Channels</button>
        {props.currentUser && 
          <img className="navbar-profile" 
               src='https://edsurge.imgix.net/uploads/post/image/12176/coding-1556754232.jpg?auto=compress%2Cformat&w=640&h=259&fit=crop'
               onClick={() => props.handleChangePage('profile')}/>
        }
      </div>
    </div>
  )
}

export default Navbar
