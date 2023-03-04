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
    console.log(db.collection("servers").doc(id).collection("rooms"));
    showRoom(!show1);
  };
  return (
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
            <span>
              <BiHash />
              Text
            </span>
            <input
              type="radio"
              name="text"
              id="text"
              placeholder="New Channel"
              value="text"
              onChange={(e) => setRoomType(e.target.value)}
            />
          </label>
          <label className="roomNames">
            <span>
              <HiSpeakerWave />
              voice
            </span>
            <input
              type="radio"
              name="text"
              id="voice"
              value="voice"
              placeholder="New Channel"
              onChange={(e) => setRoomType(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            <span>Enter the Room name</span>
            <input
              type="text"
              placeholder="channleName"
              required
              onChange={(e) => setRoomName(e.target.value)}
            />
          </label>
        </div>
        <div className="private roomNames ">
          <span>
            <AiFillLock />
            Private{" "}
          </span>
          <label className="switch  ">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <button onClick={createNewRoom}>Create</button>
      <button onClick={() => showRoom(!show1)}> Cancel</button>
    </div>
  );
};

export default CreateRoom;
