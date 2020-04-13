import React from 'react'
import './NavbarSearch.css'

const NavbarSearch = (props) => {
  return (
    <div>
      <form autocomplete="off" onSubmit={() => console.log("searched")}>
        <div className="navbar-search">
          <input className="awesomplete search"
                 maxitems={5}
                 list="suggestions"
                 type="text"
                 placeholder="Search..." />
        </div>
      </form>
      <datalist id="suggestions">
        {props.users.map(u => <option>{u.username}</option>)}
        {props.channels.map(c => <option>{c.name}</option>)}
      </datalist>
    </div>
  )
}

export default NavbarSearch
