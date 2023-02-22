import { useState } from "react";
import useMessages from "../hooks/useMessages";
import Messages from "./Messages";
import { db } from "../firebase/config";

const Chat = ({ roomId }) => {
  const [newMessage, setNewMessage] = useState("");
  const messages = useMessages(roomId);

  const handleNewMessage = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Add a new message to the "messages" collection in Firestore with the roomId
      await db.collection("messages").add({
        text: newMessage,
        username: "TODO: Implement username",
        timestamp: new Date(),
        roomId,
      });
      // Clear the input field
      setNewMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div>
      <h1>Chat</h1>
      <Messages messages={messages} />
      <form onSubmit={handleSubmit}>
        <input type="text" value={newMessage} onChange={handleNewMessage} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
