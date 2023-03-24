import "./Server.css";
import {
  HeaderChat,
  SidebarServer,
  SidebarUsers,
  Chat,
  Input,
} from "../../components/index";
import { db } from "../../firebase/config";
import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import { useState } from "react";
import Room from "../Room/Room";

const Server = () => {
  const { id } = useParams();
  const { document, error } = useDocument("servers", id);
  const [room, setRoom] = useState(false);
  const [server, setServer] = useState(null);

  setTimeout(() => {
    setServer(document);
  }, 100);

  return (
    <div className="server">
      <HeaderChat />

      <SidebarUsers />
      <SidebarServer
        serverName={server?.name}
        rooms={server?.room}
        state={room}
        setState={setRoom}
      />
      {room && <Room />}
    </div>
  );
};

export default Server;
