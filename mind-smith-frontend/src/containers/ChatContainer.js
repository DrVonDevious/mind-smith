import React, { useState, useEffect } from 'react'
import Message from '../components/Message.js'
import './ChatContainer.css'

const ChatContainer = (props) => {

  const [showChat, setShowChat] = useState(false)
  const [conversations, setConversations] = useState([])
  const [messages, setMessages] = useState([])

  const getMessages = () => {
    fetch("http://localhost:3000/messages")
      .then(res => res.json())
      .then(messages => {
        setMessages(messages.filter(m => m.user_id === props.currentUser.id || m.recipient_user_id === props.currentUser.id))
      })
  }

  useEffect(() => {
    getMessages()
  }, [])

  return (
    <div>

      { showChat
        ? [
          <div className="chatbox">
            <div className="chat-header">
              <i className="hide-button angle down icon" onClick={() => setShowChat(false)} />
              <span className="header-name" >Tim Cook</span>
              <img className="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQX4xHMVvyT4oat719m-Ol-2Rckw6LecPR65Umj0r82oZX3mTKv&usqp=CAU" />
            </div>
            <div className="message-list">
              {messages.map(m => <Message content={m.content}/>)}
              <div className="footer"></div>
            </div>
            <div className="message-box">
              <input type="text" className="message-input"></input>
              <i className="send-button paper plane outline icon" />
            </div>
          </div>
        ] : [
          <div className="open-chat" onClick={() => setShowChat(true)} >
            <svg class="open-chat-button bi bi-chat-square-dots-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M0 2a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2h-2.5a1 1 0 00-.8.4l-1.9 2.533a1 1 0 01-1.6 0L5.3 12.4a1 1 0 00-.8-.4H2a2 2 0 01-2-2V2zm5 4a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/>
            </svg>
          </div>
        ]
      }

    </div>
  )
}

export default ChatContainer
