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

  const [server, setServer] = useState(null);

  setTimeout(() => {
    setServer(document);
  }, 100);
  // const { id } = useParams();
  // console.log(id);
  return (
    <div className="server">
      <HeaderChat name={server?.room?.[0].name} />
      <SidebarUsers />
      <SidebarServer serverName={server?.name} rooms={server?.room} />
      <Room />
    </div>
  );
};

export default Server;
