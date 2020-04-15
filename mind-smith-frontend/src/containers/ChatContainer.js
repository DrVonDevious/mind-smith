import React, { useState, useEffect } from 'react'
import Message from '../components/Message'
import Conversation from '../components/Conversation'
import './ChatContainer.css'

const ChatContainer = (props) => {

  const [messages, setMessages] = useState([])
  const [conversations, setConversations] = useState([])
  const [currentConversation, setCurrentConversation] = useState(null)
  const [showChat, setShowChat] = useState(false)

  useEffect(() => {
    fetch("http://localhost:3000/messages")
      .then(res => res.json())
      .then(messages => {
        setMessages(messages.filter(m => m.user_id === props.currentUser.id || m.recipient_user_id === props.currentUser.id))
        console.log(messages)
        var id_array = messages.map(m => m.user_id && m.recipient_user_id).filter(id => id !== props.currentUser.id)
        id_array = [...new Set(id_array)]
        setConversations(props.users.filter(u => id_array.includes(u.id)))
      })
  }, [])

  const renderChatButton = () => (
    // Bootstrap icon
    <svg className="open-chat-button bi bi-chat-square-dots-fill" 
         width="1em" 
         height="1em" 
         viewBox="0 0 16 16"
         fill="currentColor"
         xmlns="http://www.w3.org/2000/svg"
         onClick={() => setShowChat(true)}>
      <path fillRule="evenodd" d="M0 2a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2h-2.5a1 1 0 00-.8.4l-1.9 2.533a1 1 0 01-1.6 0L5.3 12.4a1 1 0 00-.8-.4H2a2 2 0 01-2-2V2zm5 4a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
    </svg>
  )

  const renderNoConversations = () => {

  }

  const renderConversation = () => {
    var msg_array = messages.filter(m => m.user_id === currentConversation.id || m.recipient_user_id === currentConversation.id)
    return (
      msg_array.map(m => <Message message={m} />)
    )
  }

  const renderMessages = (conversation) => {
    console.log(conversation)
    setCurrentConversation(conversation)
  }

  const renderChatbox = () => (
    <div className="chatbox">
        <div className="chat-header">
          <i className="hide-button angle down icon" onClick={() => {setCurrentConversation(null); setShowChat(false)}} />
          <span className="header-name">{ currentConversation ? currentConversation.username : "Conversations"}</span>
        </div>
      { conversations.length === 0 ? [
        <div>
          <span className="no-convos">You Do Not Have Any Active Conversations</span>
          <div className="user-search-bar">
            <input type="text" className="user-search-input" />
          </div>
        </div>
      ] : [
        <div className="message-list">
          { !currentConversation ? conversations.map(c => <Conversation key={c.id} handleMessages={renderMessages} conversation={c} />) : null}
          { currentConversation ? renderConversation() : null }
          <div className="footer" />
        </div>
      ]}
    </div>
  )

  return (
    <div className="chat-container">
      { !showChat ? renderChatButton() : renderChatbox() }
    </div>
  )

}

export default ChatContainer
