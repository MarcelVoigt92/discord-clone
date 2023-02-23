import { useState } from "react";
import db from "../../firebase/config";
const Input = ({ roomId }) => {
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
    <div className="chatInput">
      {" "}
      <form onSubmit={handleSubmit} className="chat-form">
        <input
          type="text"
          value={newMessage}
          onChange={handleNewMessage}
          className="chat-input"
          placeholder="Type your message here"
        />
      </form>
    </div>
  );
};

export default Input;
