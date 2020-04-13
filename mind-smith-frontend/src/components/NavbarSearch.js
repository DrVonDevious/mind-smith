import React, { useState } from 'react'
import './NavbarSearch.css'
import Autosuggest from 'react-autosuggest';

const NavbarSearch = (props) => {

  const [value, setValue] = useState("")
  const [suggestions, setSuggestions] = useState([])

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase()
    const inputLength = inputValue.length

    if (inputLength === 0) { return [] }
    return(
      props.channels.filter(channel => channel.name.toLowerCase().slice(0, inputLength) === inputValue)
    )
  }

  const renderSuggestion = (suggestion) => {
    return (
      <div>
        {suggestion.name}
      </div>
    )
  }

  const getSuggestionValue = (suggestion) => {
    return suggestion.value
  }

  const handleChange = (value) => {
    setValue(value)
  }

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value))
  }

  const onSuggestionsClearRequested = () => {
    setSuggestions([])
  }

  const inputProps = {
    value,
    placeholder: "Search Channels...",
    onChange: (e) => handleChange(e.target.value)
  }

  return (
    <div>
      <form autocomplete="off" onSubmit={(e) => { props.handleChangePage(value.toLowerCase()); e.preventDefault()}}>
        <div className="navbar-search">
          <Autosuggest
            suggestions={suggestions}
            renderSuggestion={renderSuggestion}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            inputProps={inputProps}
            getSuggestionValue={getSuggestionValue}
          />
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
