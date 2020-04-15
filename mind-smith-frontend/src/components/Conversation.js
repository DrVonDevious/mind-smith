import React from 'react'
import './Conversation.css'

const Conversation = (props) => {
  return (
    <div className="message" onClick={() => props.handleMessages(props.conversation)}>
      {props.conversation.username}
    </div>
  )
}

export default Conversation
