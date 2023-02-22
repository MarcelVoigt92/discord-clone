import { useState } from "react";
import useMessages from "../hooks/useMessages";
import Messages from "../components/Messages";
import { db } from "../firebase/config";

const Room = ({ roomId }) => {
  const [newMessage, setNewMessage] = useState("");
  const messages = useMessages(roomId);

  const handleNewMessage = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Add a new message to the current room's "messages" subcollection in Firestore
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
    <div>
      <h1>Room {roomId}</h1>
      <Messages messages={messages} />
      <form onSubmit={handleSubmit}>
        <input type="text" value={newMessage} onChange={handleNewMessage} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

const Rooms = () => {
  const [currentRoomId, setCurrentRoomId] = useState("");

  const handleRoomChange = (roomId) => {
    setCurrentRoomId(roomId);
  };

  return (
    <div>
      <h1>Rooms</h1>
      <ul>
        <li onClick={() => handleRoomChange("room1")}>Room 1</li>
        <li onClick={() => handleRoomChange("room2")}>Room 2</li>
        {/* Add more rooms here */}
      </ul>
      {currentRoomId && <Room roomId={currentRoomId} />}
    </div>
  );
};

export default Rooms;
