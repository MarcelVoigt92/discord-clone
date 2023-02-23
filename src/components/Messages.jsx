import useMessages from "../hooks/useMessages";

// Define a component called Messages that takes a roomId prop
const Messages = ({ roomId }) => {
  // Call the useMessages hook with the roomId to get an array of messages for the current room
  const messages = useMessages(roomId);

  // Render a div that maps over the messages array and renders the text, username, and timestamp of each message
  return (
    <div className="messages">
      {messages.map((message) => (
        <div key={message.id}>
          <p>{message.text}</p>
          <p>{message.username}</p>
          <p>{message.timestamp.toDate().toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

// Export the Messages component as the default export of this module
export default Messages;
