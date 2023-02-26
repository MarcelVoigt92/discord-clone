//Navigation Bar for navigating between servers and private messages.
import React, { useEffect, useState } from "react";

import { FaDiscord, FaCompass } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineLogout } from "react-icons/ai";

import { useCallback } from "react";
import { auth } from "../../firebase/config";
import db from "../../firebase/config";

import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const [document, setDocument] = useState(null);

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

  useEffect(() => {
    getServer();
  }, [getServer]);

  const serverId = (id) => {
    localStorage.setItem("item", id);
  };
  return (
    <div className="nav">
      {/* Create/Join new Server button */}
      <div className="icon-div">
        <Link to="/">
          <FaDiscord />
        </Link>
        {/* private message tab */}
      </div>
      <div className="controlIcons">
        <div className="serverWrapper">
          {document?.map((server) => (
            <div className="server-icons" key={server.id}>
              <Link to="/server">
                <button
                  className="serverName "
                  onClick={() => serverId(server.id)}
                >
                  {server.name.charAt(0).toUpperCase()}
                </button>
              </Link>
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
        <div className="icons">
          <button className="logoutBtn" onClick={() => auth.signOut()}>
            <AiOutlineLogout />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
