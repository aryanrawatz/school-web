
import { useState } from "react";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";
import "../styles/chatbot.css";

function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hello! I am Aryen AI Assistant. How can I help you?"
    }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input
    };

    let reply = "Please contact school administration for more details.";

    if (input.toLowerCase().includes("admission"))
      reply = "Admissions are open for Session 2026-27.";
    else if (input.toLowerCase().includes("fees"))
      reply = "Please contact the office for fee details.";
    else if (input.toLowerCase().includes("transport"))
      reply = "Yes, transport facilities are available.";
    else if (input.toLowerCase().includes("timing"))
      reply = "School timing is 8:00 AM to 2:00 PM.";

    const botMessage = {
      sender: "bot",
      text: reply
    };

    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  return (
    <>
      <div className={`chat-window ${open ? "show" : ""}`}>
        <div className="chat-header">
          Aryen AI Assistant
        </div>

        <div className="chat-body">
          {messages.map((msg, index) => (
            <div key={index} className={msg.sender}>
              {msg.text}
            </div>
          ))}
        </div>

        <div className="chat-input">
          <input
            type="text"
            placeholder="Type your question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button onClick={handleSend}>
            <FaPaperPlane />
          </button>
        </div>
      </div>

      <button className="chat-toggle" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaRobot />}
      </button>
    </>
  );
}

export default ChatBot;