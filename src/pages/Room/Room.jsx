import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Chat, Input } from "../../components/index";
import { db } from "../../firebase/config";
import "./Room.css";

const Room = () => {
  return (
    <div className="room">
      <Chat />
      <Input />
    </div>
  );
};

export default Room;
