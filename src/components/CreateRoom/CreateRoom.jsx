import { AiOutlineClose, AiFillLock } from "react-icons/ai";
import { BiHash } from "react-icons/bi";
import { HiSpeakerWave } from "react-icons/hi2";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../../firebase/config";
import "animate.css";
import "./CreateRoom.css";

const CreateRoom = ({ showRoom, show1 }) => {
  const { id } = useParams();
  const [roomName, setRoomName] = useState("");
  const [roomType, setRoomType] = useState("");
  const createNewRoom = async () => {
    const room = {
      roomName,
      roomType,
    };
    await db.collection("servers").doc(id).collection("rooms").add(room);

    showRoom(!show1);
  };
  return (
    <div className={` ${show1 ? "overlay" : ""}`}>
      <div
        className={`modalContainer animate__animated animate__backInDown animate__faster ${
          show1 ? "" : "hide"
        }`}
      >
        <div className="modal ">
          <div>
            <AiOutlineClose onClick={() => showRoom(!show1)} />
          </div>
          <div className="channelType">
            <label className="roomNames">
              <BiHash />
              <span>Text-Channel</span>
              <input
                type="radio"
                name="text"
                id="text"
                placeholder="New Channel"
                value="text"
                onChange={(e) => setRoomType(e.target.value)}
                style={{ transform: "scale(1.5)", marginRight: "10px" }}
              />
            </label>
            <label className="roomNames">
              <HiSpeakerWave />
              <span>Voice-Channel</span>
              <input
                type="radio"
                name="text"
                id="voice"
                value="voice"
                placeholder="New Channel"
                onChange={(e) => setRoomType(e.target.value)}
                style={{ transform: "scale(1.5)", marginRight: "10px" }}
              />
            </label>
          </div>
          <div>
            <label className="roomNames">
              <span>Enter Room name</span>
              <input
                className="creation-input"
                type="text"
                placeholder="Channel Name"
                required
                onChange={(e) => setRoomName(e.target.value)}
              />
            </label>
          </div>
          <div className="private roomNames ">
            <AiFillLock />
            <span>Private </span>
            <label className="switch  ">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
        <div className="button-div">
          {" "}
          <button onClick={createNewRoom}>Create</button>
          <button onClick={() => showRoom(!show1)}> Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default CreateRoom;
