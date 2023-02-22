// Fetch all servers
// react-router by click update url und übergib id von server
// mit useParams die ID von server rausholen und weiterleiten an einen neuen hook (useRooms) der als parameter die ID von rooms hat der angelickt wird
// react-router by click update url und übergib id von rooms (localhost:3000/server/id/rooms/roomid)
// finally show messages belonging to selected room.
// FINALFINALLY BOOM HEADSHOT

import { useState, useEffect } from "react";
import { db } from "../firebase/config";

// Define a custom hook called useRoomData that returns an object containing messages and members
const useRoomData = (serverId, roomId) => {
  // Define state variables for messages and members
  const [messages, setMessages] = useState([]);
  const [members, setMembers] = useState([]);

  // Use the useEffect hook to subscribe to the "messages" collection and "members" subcollection in Firestore
  useEffect(() => {
    // Subscribe to the "messages" collection and order the results by timestamp in descending order
    const unsubscribeMessages = db
      .collection("servers")
      .doc(serverId)
      .collection("rooms")
      .doc(roomId)
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

    // Subscribe to the "members" subcollection and order the results by username
    const unsubscribeMembers = db
      .collection("servers")
      .doc(serverId)
      .collection("members")
      .orderBy("username")
      .onSnapshot((snapshot) => {
        // Create an array to hold the members
        const membersList = [];
        // Loop through the snapshot and push each member object to the array
        snapshot.forEach((doc) => {
          membersList.push({ id: doc.id, ...doc.data() });
        });
        // Update the state of the members array with the latest members
        setMembers(membersList);
      });

    // Return an unsubscribe function to remove the listeners when the component unmounts
    return () => {
      unsubscribeMessages();
      unsubscribeMembers();
    };
  }, [serverId, roomId]);

  // Return an object containing the messages and members arrays
  return { messages, members };
};

export default useRoomData;
