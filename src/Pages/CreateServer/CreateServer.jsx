import { useState } from "react";
import { useFirestore } from "../../hooks/useFirebase";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

const CreateServer = () => {
  const navigate = useNavigate();
  const { addDocument, response } = useFirestore("servers");
  const [name, setName] = useState("");
  const [formError, setFormError] = useState("");
  const [roomCategory, setRoomCategory] = useState("");

  const roomCategories = [
    { value: "general", label: "General" },
    { value: "meme", label: "Memes" },
    { value: "design", label: "Design" },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormError(null);
    if (!roomCategory) {
      setRoomCategory("Please select a Starting Room");
    }
    const server = {
      name,
      rooms: {
        roomCategory,
      },
    };
    await addDocument(server);
    if (!response.error) {
      navigate("/");
    }
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h2>Create Your Owm Server</h2>
        <div>
          <label>
            <span>Server Name:</span>
            <input
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </label>
        </div>

        <div>
          <label>
            <span>Choose Your First Chanal:</span>
            <Select
              options={roomCategories}
              onChange={(option) => {
                console.log(option);
                setRoomCategory(option);
              }}
            />
          </label>
        </div>
        <button type="submit">Create Server</button>
      </form>
    </div>
  );
};

export default CreateServer;
