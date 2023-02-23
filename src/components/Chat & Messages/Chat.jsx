import Messages from "./Messages";
import Input from "./Input";
import "./Chat.css";

const Chat = ({ roomId }) => {
  return (
    <div className="chat">
      <div id="style-2">
        <div className="chat-messages">
          <Messages roomId={roomId} />
        </div>
      </div>
      <Input />
    </div>
  );
};

export default Chat;
