import React, { useState } from 'react'
import './NavbarSearch.css'
import Autosuggest from 'react-autosuggest';

// BUNCH OF COPY PASTA FROM Autosuggest
const NavbarSearch = (props) => {

  const [value, setValue] = useState("")
  const [suggestions, setSuggestions] = useState([])

  const escapeRegexCharacters = (str) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  }

  const getSuggestions = (value) => {
    const escapedValue = escapeRegexCharacters(value.trim())

    if (escapedValue === "") {
      return []
    }

    const regex = new RegExp("^" + escapedValue, "i")

    return(
      props.channels.filter(channel => regex.test(channel.name))
    )
  }

  const renderSuggestion = (suggestion) => (
    <span>{suggestion.name}</span>
  )

  const getSuggestionValue = (suggestion) => {
    return suggestion.name
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

  const onSubmit = (e) => {
    e.preventDefault()
    var c = props.channels.find(c => c.name === value)
    if (c) {
      props.setChannel(c)
      props.handleChangePage("channel")
    }
  }

  return (
    <div>
      <form autocomplete="off" onSubmit={(e) => onSubmit(e)}>
        <div className="navbar-search">
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
          />
        </div>
      </form>
    </div>
  )
}

export default NavbarSearch
