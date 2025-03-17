import React, { useState } from 'react';
import './ChatSupport.css'; 

const ChatSupport = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleMessageSend = () => {
    if (input.trim() === '') return;
    setMessages([...messages, { text: input, fromUser: true }]);
    setInput('');
    // Call backend API to get response
    fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: input }),
    })
      .then(response => response.json())
      .then(data => {
        setMessages([...messages, { text: data.message, fromUser: false }]);
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="chat-support">
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.fromUser ? 'user-message' : 'bot-message'}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleMessageSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatSupport;
