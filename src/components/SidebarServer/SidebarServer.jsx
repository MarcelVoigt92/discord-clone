// Server Sidebar for accessing and managing Channels
import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { HeaderServer } from "../index.js";
import { GrChannel } from "react-icons/gr";

import CreateRoom from "../CreateRoom/CreateRoom";
import "./SidebarServer.css";
import { Footer } from "../index.js";
import { db } from "../../firebase/config.js";
import { Link, useParams } from "react-router-dom";

/* , IoIosArrowForward */

function SidebarServer({ serverName }) {
  const { id } = useParams();
  const [rotateTextArrow, setRotateTextArrow] = useState(false);
  const handleTextRotate = () => setRotateTextArrow(!rotateTextArrow);
  const rotateText = rotateTextArrow ? "rotate(-90deg)" : "rotate(0)";
  const [rooms, setRooms] = useState([]);
  const [rotateVoiceArrow, setRotateVoiceArrow] = useState(false);
  const handleVoiceRotate = () => setRotateVoiceArrow(!rotateVoiceArrow);
  const rotateVoice = rotateVoiceArrow ? "rotate(-90deg)" : "rotate(0)";
  const [showCreateRomm, setShowCreateRoom] = useState(false);

  const getRooms = () => {
    const ref = db.collection("servers").doc(id);
    const rooms = ref.collection("rooms");
    rooms.onSnapshot((snapShot) => {
      let result = [];
      snapShot.docs.forEach((doc) => {
        result.push({ ...doc.data(), id: doc.id });
      });
      setRooms(result);
    });
  };
  useEffect(() => {
    getRooms();
  }, [id]);
  return (
    <>
      <div className="sidebar sidebarServer">
        <>
          {showCreateRomm && (
            <CreateRoom
              showRoom={setShowCreateRoom}
              show1={setShowCreateRoom}
            />
          )}
        </>
        <HeaderServer serverName={serverName} />
        <div className="sidebar__channels">
          <div className="sidebar__channelsHeader">
            <div className="sidebar__header">
              <IoIosArrowDown
                style={{ transform: rotateText, transition: "all 0.2s linear" }}
                onClick={handleTextRotate}
              />
              {/* show/hide textchannels */}
              <span onClick={handleTextRotate}>Text Channels</span>
            </div>
            <AiOutlinePlus
              className="sidebar__addChannel"
              onClick={() => setShowCreateRoom(!showCreateRomm)}
            />
          </div>
          <div>
            <ul>
              {rooms.map((room) => (
                <Link to={`rooms/${room.id}`}>
                  {" "}
                  <li key={room.id}>
                    <GrChannel /> {room.roomName}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="sidebar__channelsHeader">
            <div className="sidebar__header">
              <IoIosArrowDown
                style={{
                  transform: rotateVoice,
                  transition: "all 0.2s linear",
                }}
                onClick={handleVoiceRotate}
              />{" "}
              {/* show/hide textchannels */}
              <span onClick={handleVoiceRotate}>Voice Channels</span>{" "}
              {/* non existent voice channels kekw */}
            </div>
            <AiOutlinePlus className="sidebar__addChannel" />
          </div>
          <ul>
            <li>to be added </li>
          </ul>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default SidebarServer;
