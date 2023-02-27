import { useState } from "react";
import { useFireStore } from "../../hooks/useFirebase";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import discord from "../../assets/discord.png";
import "./CreateServer.css";

const CreateServer = () => {
  const { addDocument, response } = useFireStore("servers");
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [formError, setFormError] = useState("");

  const roomCategories = [
    { value: "general", label: "General" },
    { value: "meme", label: "Memes" },
    { value: "gaming", label: "Gaming" },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormError(null);
    if (!category) {
      setFormError("Please select a Starting Room");
    }
    const server = {
      name: name,
      room: [
        {
          name: category.value,
          messages: [],
        },
      ],
    };
    await addDocument(server);
    if (!response.error) {
      navigate("/");
    }
  };

  return (
    <div className="container">
      <img src={discord} alt="" />
      <form className="create-form" onSubmit={(e) => handleSubmit(e)}>
        <h2 id="create-h2">Create Your Own Server</h2>
        <div>
          <label id="create-label">
            <span className="create-span">Server Name:</span>
            <input
              className="create-input"
              type="text"
              placeholder="Server Name"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </label>
        </div>

        <div>
          <label>
            <span className="create-span">Choose Your First Channel:</span>
            <Select
              options={roomCategories}
              onChange={(option) => {
                console.log(option);
                setCategory(option);
              }}
            />
          </label>
        </div>
        <button className="create-btn" type="submit">
          Create Server
        </button>
      </form>
    </div>
  );
};

export default CreateServer;
