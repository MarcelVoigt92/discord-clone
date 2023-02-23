import useMessages from "../../hooks/useMessages";
import "./Chat.css";

const Messages = ({ roomId }) => {
  const messages = useMessages(roomId);

  return (
    <div className="messages-wrapper">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id}>
            <p className="message-text">{message.text}</p>
            <p className="message-username">{message.username}</p>
            <p className="message-timestamp">
              {message.timestamp.toDate().toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
