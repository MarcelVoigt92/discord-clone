import db from "../firebase/config";

// Define a custom hook called useMessages that returns an array of messages
export const useAddServer = () => {
  const addServer = async (name) => {
    await db.collection("servers").add({
      name,
    });
  };

  // Return the messages array
  return addServer;
};
