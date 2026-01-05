import { useState, useEffect, useRef } from "react";
import "./chat.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SendIcon from "@mui/icons-material/Send";

function Chat() {
  const [text, setText] = useState("");
  const [showSidebar, setShowSidebar] = useState(true);
  const [activeChat, setActiveChat] = useState(null);
  const [messages, setMessages] = useState([]);

  const endRef = useRef(null);

  useEffect(() => {
    if (activeChat === null) return;

    setMessages([
      { msg: `Hello from User ${activeChat + 1}`, type: "other" },
      { msg: "Hi ", type: "me" },
    ]);
  }, [activeChat]);

  const sendMessage = () => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { msg: text, type: "me" }]);
    setText("");
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="wa-container">

      
      <div className={`wa-sidebar ${showSidebar ? "show" : ""}`}>
        <div className="sb-header">
          <span>WhatsApp</span>
          <div className="sb-icons">
            <ChatBubbleOutlineIcon />
            <MoreVertIcon />
          </div>
        </div>

        <div className="sb-search">
          <input placeholder="Search or start new chat" />
        </div>

        <div className="sb-chat-list">
          {[...Array(20)].map((_, i) => (
            <div
              key={i} className={`sb-chat ${activeChat === i ? "active" : ""}`}
              onClick={() => {setActiveChat(i);setShowSidebar(false);}}
            >
              <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png"className="sb-chat-avatar"alt=""/>
              <div className="sb-chat-info">
                <div className="sb-chat-name">User {i + 1}</div>
                <div className="sb-chat-last">Last message...</div>
              </div>
              <div className="sb-time">12:30</div>
            </div>
          ))}
        </div>
      </div>

      
      <div className={`wa-chat ${showSidebar ? "hide" : ""}`}>
        {activeChat === null ? (
          <div className="wa-placeholder">
            <h2>Chat Start</h2>
            <p>Select a chat to start messaging</p>
          </div>
        ) : (
          <>
            <div className="wa-header">
              <button className="back-btn"onClick={() => setShowSidebar(true)}>
                <ArrowBackIcon />
              </button>

              <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png"className="avatar"alt=""/>
              <div className="user-info">
                <h4>User {activeChat + 1}</h4>
                <span>online</span>
              </div>
            </div>

            <div className="wa-body">
              {messages.map((item, i) => (
                <div key={i} className={`bubble ${item.type}`}>
                  {item.msg}
                </div>
              ))}
              <div ref={endRef} />
            </div>

            <div className="wa-footer">
              <input placeholder="Type a message"value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button onClick={sendMessage}>
                <SendIcon />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Chat;
