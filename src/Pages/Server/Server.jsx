import "./Server.css";
import {
  HeaderChat,
  SidebarServer,
  SidebarUsers,
  Chat,
} from "../../components/index";
import { useDocument } from "../../hooks/useDocument";
import { useEffect, useState } from "react";

const Server = () => {
  const [id, setId] = useState("FNBxYAY4F5xx5KFH3fbO");
  const { document } = useDocument("servers", id);

  // const { id } = useParams();
  // console.log(id);
  return (
    <div className="server">
      <HeaderChat />
      <SidebarUsers />
      <SidebarServer serverName={document?.name} />
      <Chat />
    </div>
  );
};

export default Server;
