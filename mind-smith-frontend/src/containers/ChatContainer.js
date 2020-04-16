import React, { useState, useEffect } from 'react'
import Message from '../components/Message'
import Conversation from '../components/Conversation'
import './ChatContainer.css'

const ChatContainer = (props) => {

  const [messages, setMessages] = useState([])
  const [conversations, setConversations] = useState([])
  const [currentConversation, setCurrentConversation] = useState(null)
  const [message, setMessage] = useState("")
  const [showChat, setShowChat] = useState(false)
  const [filter, setFilter] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/messages")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        var filtered_data = data.filter(m => m.user_id === props.currentUser.id || m.recipient_user_id === props.currentUser.id)
        console.log(filtered_data)
        setMessages(filtered_data)
        var id_array = filtered_data.map(m => m.user_id && m.recipient_user_id).filter(id => id !== props.currentUser.id)
        id_array = [...new Set(id_array)]
        console.log(id_array)
        setConversations(props.users.filter(user => user.id !== props.currentUser.id)/*.filter(u => id_array.includes(u.id))*/)
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

  const renderUserSearch = () => (
    <div className="user-search-bar">
      <input  onChange={(e) => setFilter(e.target.value)} type="text" className="user-search-input" />
      <svg className="user-search-icon bi bi-search" width="1.3em" height="1.3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clipRule="evenodd"/>
        <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clipRule="evenodd"/>
      </svg>
    </div>
  )

  const renderNoConversations = () => (
        <div className="no-convos-container">
          <span className="no-convos-msg">You Do Not Have Any Active Conversations</span>
          {renderUserSearch()}
        </div>
  )

  const renderConversation = () => {
    var msg_array = messages.filter(m => m.user_id === currentConversation.id || m.recipient_user_id === currentConversation.id)
    return (
      <div>
        {msg_array.map(m => <Message message={m} />)}
        <div className="footer" />
      </div>
    )
  }

  const renderMessages = (conversation) => {
    console.log(conversation)
    setCurrentConversation(conversation)
  }

  const sendMessage = (msg) => {
    fetch("http://localhost:3000/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        content: msg,
        user_id: props.currentUser.id,
        recipient_user_id: currentConversation.id
      })
    })
      .then(res => res.json())
      .then(data => {
        setMessages([...messages, data])
        setMessage("")
      })
  }

  const renderChatbox = () => (
    <div className="chatbox">
        <div className="chat-header">
          <i className="hide-button angle down icon" onClick={() => {setCurrentConversation(null); setShowChat(false)}} />
          <span className="header-name">{ currentConversation ? currentConversation.username : "Conversations"}</span>
        </div>
      { conversations.length === 0 ? renderNoConversations() : [
        <div style={{display: "grid", height: "89%"}}>
          <div className="message-list">
            { !currentConversation ? [
                /\S/.test(filter) ? [ // Checks if filter only contains spaces
                  conversations.filter(c => c.username.toLowerCase().includes(filter.toLowerCase())).map(c => <Conversation key={c.id} handleMessages={renderMessages} conversation={c} />)
                ] : [
                  conversations.map(c => <Conversation key={c.id} handleMessages={renderMessages} conversation={c} />)
                ]
              ] : null }
            { currentConversation ? renderConversation() : null }
          </div>
          { currentConversation ? [
            <div className="message-bar">
              <input className="message-input" onChange={(e) => setMessage(e.target.value)} value={message} />
              <i onClick={() => sendMessage(message)} className="send-button paper plane icon"></i>
            </div>
          ] : [
            renderUserSearch()
          ]}
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
