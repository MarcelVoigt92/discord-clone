import useMessages from "../hooks/useMessages";

// Define a component called Messages
const Messages = () => {
  // Call the useMessages hook to get an array of messages
  const messages = useMessages();

  // Render a div that maps over the messages array and renders the text, username, and timestamp of each message
  return (
    <div>
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
