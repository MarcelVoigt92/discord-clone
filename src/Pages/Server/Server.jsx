import "./Server.css";
import {
  HeaderChat,
  SidebarServer,
  SidebarUsers,
  Chat,
  Navbar,
} from "../../components/index";
import { useCallback } from "react";
import { useEffect, useState } from "react";
import db from "../../firebase/config";

const Server = () => {
  const [server, setServer] = useState(null);

  const getServer = (_collection, _id) => {
    const response = db.collection(_collection).doc(_id);
    const unsub = response.onSnapshot((snapshot) => {
      if (snapshot.data()) {
        // firebase method to get data and get the id
        setServer({ ...snapshot.data(), id: snapshot.id });
      } else {
        console.log("Project doesn't exist");
      }
    });
  };
  useEffect(() => {
    getServer("servers", localStorage.getItem("item"));
  }, [server]);
  // const { id } = useParams();
  // console.log(id);
  return (
    <div className="server">
      <Navbar />
      <HeaderChat />
      <SidebarUsers />
      <SidebarServer serverName={server?.name} />
      <Chat />
    </div>
  );
};

export default Server;
