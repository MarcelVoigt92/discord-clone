//Navigation Bar for navigating between servers and private messages.
import React, { useEffect, useState } from "react";

import { FaDiscord, FaCompass } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
/* import { useSelector } from "react-redux";
import { selectUser } from "../../redux/reducers/userSlice"; */
import { useCallback } from "react";
import { auth } from "../../firebase/config";
import db from "../../firebase/config";
import { useCollection } from "../../hooks/useCollection";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [document, setDocument] = useState(null);
  const [serverName, setServerName] = useState("");
  const { documents } = useCollection("servers");

  const getServer = useCallback(() => {
    let result = [];
    db.collection("servers").onSnapshot(
      (snapshot) => {
        let results = [];
        //Doc is the user Object in the db
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });
        setDocument(results);
      },
      (err) => {
        console.log("something went wrong");
      }
    );
    setDocument(result);
  }, []);
  console.log("document", document);
  const addServer = () => {
    const severName = prompt("please Enter the server Name");
    db.collection("servers").add({ ...documents, name: severName });
  };

  useEffect(() => {
    getServer();
  }, [getServer]);

  return (
    <div className="nav">
      <div>
        <Link to="/">
          <FaDiscord />
        </Link>
        {/* private message tab */}
      </div>
      <div>
        <button className="logoutBtn" onClick={() => auth.signOut()}>
          sign Out
        </button>
      </div>
      {/* Create/Join new Server button */}
      <div className="controlIcons">
        <div>
          {document?.map((server) => (
            <div key={server.id}>
              <button>
                <Link to="/project">{server.name}</Link>
              </button>
            </div>
          ))}
        </div>
        <div className="icons">
          <Link to="/create">
            <button>
              <AiOutlinePlus />
            </button>
          </Link>
        </div>
        {/* explore public servers button */}
        <div className="icons">
          <FaCompass />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
