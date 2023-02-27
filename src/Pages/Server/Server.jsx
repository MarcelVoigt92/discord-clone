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

  // const { id } = useParams();
  // console.log(id);
  return (
    <div className="server">
      <HeaderChat />
      <SidebarUsers />
      <SidebarServer serverName={document?.name} />
      <Chat />
      <Input />
    </div>
  );
};

export default Server;
