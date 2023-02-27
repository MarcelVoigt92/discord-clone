import { useState } from "react";

import { useAuthContext } from "../../hooks/useAuthContext";
import { useDocument } from "../../hooks/useDocument";
import { useFireStore } from "../../hooks/useFirebase";
import { useParams } from "react-router-dom";

const Input = () => {
  const { user } = useAuthContext();
  const { id } = useParams();
  const [newMessage, setNewMessage] = useState("");
  const { updateDocument, response } = useFireStore("servers");
  const { document } = useDocument("servers", id);

  const handleNewMessage = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const message = {
      messageBody: newMessage,
      user: user.displayName,
      time: new Date().toLocaleString(),
      image: user.photoURL,
    };

    await updateDocument(document.id, {
      messsages: [...document.messsages, message],
    });
    setNewMessage("");
  };
  return (
    <div className="chatInput">
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
