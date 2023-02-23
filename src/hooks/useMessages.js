import { useState, useEffect } from "react";
import db from "../firebase/config";

// Define a custom hook called useMessages that returns an array of messages
const useMessages = () => {
  // Define a state variable called messages and a function to update it called setMessages
  const [messages, setMessages] = useState([]);

  // Use the useEffect hook to subscribe to the "messages" collection in Firestore
  useEffect(() => {
    // Subscribe to the "messages" collection and order the results by timestamp in descending order
    const unsubscribe = db
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        // Create an array to hold the messages
        const messagesList = [];
        // Loop through the snapshot and push each message object to the array
        snapshot.forEach((doc) => {
          messagesList.push({ id: doc.id, ...doc.data() });
        });
        // Update the state of the messages array with the latest messages
        setMessages(messagesList);
      });
    // Return an unsubscribe function to remove the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  // Return the messages array
  return messages;
};

// Export the useMessages hook as the default export of this module
export default useMessages;
