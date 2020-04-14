import React from 'react'
import NavbarSearch from './NavbarSearch'
import './Navbar.css'
import {Link} from "react-router-dom";


const Navbar = (props) => {
  return (
    <div className="headernav">
        <div className="container">
          <div class="row">
        <div className="navbar"> 
       
      <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
      <Link to="/home"><button className="navbar-brand" >MindSmith</button></Link>
      <div className="navbar-right">
        <NavbarSearch users={props.users} channels={props.channels} handleChangePage={props.handleChangePage} setChannel={props.setChannel} />
        {/* <button className="navbar-link">{props.currentUser&&` Welcome ${props.currentUser.username}`}</button> */}
        {props.currentUser && <button onClick={props.handleLogout} className="navbar-link" >Logout</button>}
        {!props.currentUser && <button className="navbar-link" onClick={() => props.handleLoginRegister("login")}>Login</button>}
        {!props.currentUser &&<button className="navbar-link" onClick={() => props.handleLoginRegister("register")}>Register</button>}
        <Link to="/channels"><button className="navbar-link">Channels</button></Link>
        {props.currentUser && 
        <Link to="/profile">
          <img className="navbar-profile" 
               src='https://edsurge.imgix.net/uploads/post/image/12176/coding-1556754232.jpg?auto=compress%2Cformat&w=640&h=259&fit=crop'
              /></Link>
        }
        </div>
        </div>

       
        </div>
      </div>
    </div> 
  )
}

export default Navbar
