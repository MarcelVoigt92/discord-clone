import "./Server.css";
import {
  HeaderChat,
  SidebarServer,
  SidebarUsers,
  Chat,
  Navbar,
  Input,
} from "../../components/index";
import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import { useEffect, useState } from "react";

const Server = () => {
  const { id } = useParams();
  const { document, error } = useDocument("servers", id);
  const [server, setServer] = useState(null);
  setTimeout(() => {
    setServer(document);
  }, 1000);

  console.log("doc", document);
  // const { id } = useParams();
  // console.log(id);
  return (
    <div className="server">
      <HeaderChat />
      <SidebarUsers />
      <SidebarServer serverName={document?.name} rooms={document?.room} />
      <Chat />
      <Input />
    </div>
  );
};

export default Server;
