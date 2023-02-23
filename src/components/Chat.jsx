import { useState } from "react";
import Messages from "./Messages";
import { db } from "../firebase/config";

// Define a component called Chat that takes a roomId prop
const Chat = ({ roomId }) => {
  const [newMessage, setNewMessage] = useState("");

  const handleNewMessage = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Add a new message to the "messages" subcollection of the current room in Firestore
      await db.collection("servers").doc(roomId).collection("messages").add({
        text: newMessage,
        username: "TODO: Implement username",
        timestamp: new Date(),
      });
      // Clear the input field
      setNewMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="chat">
      <h1>Chat</h1>
      <Messages roomId={roomId} />
      <form onSubmit={handleSubmit}>
        <input type="text" value={newMessage} onChange={handleNewMessage} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
