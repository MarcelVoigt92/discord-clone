//Footer with User Avatar, Clients Options, online status etc.
import React, { useState } from "react";
import { MdHeadset, MdHeadsetOff } from "react-icons/md";
import { FaCog } from "react-icons/fa";
import { BiMicrophone, BiMicrophoneOff, BiCog } from "react-icons/bi";

import "./Footer.css";
import { useAuthContext } from "../../hooks/useAuthContext";

function Footer() {
  const [micMute, setMicMute] = useState(false);
  const handleMicMute = () => setMicMute(!micMute);
  const micIcon = micMute ? <BiMicrophoneOff /> : <BiMicrophone />;

  const [headsetMute, setHeadsetMute] = useState(false);
  const handleHeadsetMute = () => setHeadsetMute(!headsetMute);
  const headsetIcon = headsetMute ? <MdHeadsetOff /> : <MdHeadset />;

  const [online, setOnline] = useState(false);
  const handleOnline = () => setOnline(!online);
  const onlineColor = online ? "red" : "green";
  const { user } = useAuthContext();
  return (
    <div className="footer">
      <div className="avatarContainer">
        <img src={user.photoURL} alt="" /> {/* UserAvatar */}
        <div
          className="onlineStatus"
          onClick={handleOnline}
          style={{ backgroundColor: `${onlineColor}` }}
        ></div>{" "}
        {/* Online/Offline Toggle */}
      </div>
      <div className="nameStatusContainer">
        <span>{user.displayName}</span>
        {/* <span>Status</span> */}
      </div>
      <div className="footerIcons">
        <span onClick={handleMicMute}>{micIcon}</span>
        {/* Mic Mute/Unmute Button */}
        <span onClick={handleHeadsetMute}>{headsetIcon}</span>
        {/* Headphones Mute/Unmute Button */}
        <BiCog /> {/*or <HiCog/> (Options Cogwheel) */}
      </div>
    </div>
  );
}

export default Footer;
