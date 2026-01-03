import { useState, useEffect, useRef } from "react";
import "./chat.css";

function Chat() {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([
    { msg: "Hello", type: "other" },
    { msg: "Hi, kaise ho?", type: "me" },
    { msg: "Badhiya", type: "other" },
  ]);

  const endRef = useRef(null);

  const sendMessage = () => {
    if (!text.trim()) return;
    setMessages([...messages, { msg: text, type: "me" }]);
    setText("");
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="wa-container">

      <div className="wa-sidebar">
        <div className="sb-header">
          <span>Whatsapp</span>
          
          <div className="sb-icons">
            <span>💬</span>
            <span>⋮</span>
          </div>
        </div>

        <div className="sb-search">
          <input placeholder="Search or start new chat" />
        </div>

        <div className="sb-chat-list">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`sb-chat ${i === 0 ? "active" : ""}`}>
              <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png"className="sb-chat-avatar" />
              <div className="sb-chat-info">
                <div className="sb-chat-name">User {i + 1}</div>
                <div className="sb-chat-last">Last message...</div>
              </div>
              <div className="sb-time">10:33</div>
            </div>
          ))}
        </div>
      </div>

    
    
      <div className="wa-chat">
        <div className="wa-header">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className="avatar" />
          <div className="user-info">
            <h4>Coder boy</h4>
            <span>online</span>
          </div>
        </div>

        <div className="wa-body">
          {messages.map((item, i) => (
            <div key={i} className={`bubble ${item.type}`}>
              {item.msg}
            </div>
          ))}
          <div ref={endRef}></div>
        </div>

        <div className="wa-footer">
          <input placeholder="Type a message"value={text}  onChange={(e) => setText(e.target.value)}onKeyDown={(e) => e.key === "Enter" && sendMessage()}/>
          <button onClick={sendMessage}>➤</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
