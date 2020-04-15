import React from 'react'
import './Conversation.css'

const Conversation = (props) => {
  return (
    <div className="message">
      {props.conversation.message}
    </div>
  )
}

export default Conversation
