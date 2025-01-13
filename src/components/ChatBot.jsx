import React, { useState } from "react";
import "./Styles/ChatBot.css";
import chatbot from './assets/chatbot.gif'

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleToggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text: input }]);

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: `You said: "${input}"` },
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="chatbot">
      {/* Chatbot Launcher */}
      <div className="chatbot-launcher" onClick={handleToggleChat}>
        <img
          src={chatbot}
          alt="Chatbot"
          className="chatbot-launcher-img"
        />
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <span>AI ChatBot</span>
            <button onClick={handleToggleChat} className="chatbot-close-btn">
              ✖
            </button>
          </div>
          <div className="chatbot-body">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chatbot-message ${
                  msg.sender === "user" ? "user-message" : "bot-message"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="chatbot-input-field"
            />
            <button onClick={handleSendMessage} className="chatbot-send-btn">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
