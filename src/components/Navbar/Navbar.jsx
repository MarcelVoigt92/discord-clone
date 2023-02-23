//Navigation Bar for navigating between servers and private messages.
import React from "react";

import { FaDiscord, FaCompass } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
/* import { useSelector } from "react-redux";
import { selectUser } from "../../redux/reducers/userSlice"; */
import { auth } from "../../firebase/config";
import './Navbar.css'


function Navbar() {
  return (
    <div className="nav">
      <div className="discordIcon">
        <FaDiscord /> {/* private message tab */}
      </div>
      <div>
        <button className="logoutBtn" onClick={() => auth.signOut()}>sign Out</button>
      </div>
      <div>pretend to .map private message notifications in here</div>
      <div>
        <ul>
          <li>.map all servers the logged in user is a member of</li>
        </ul>
      </div>
      <AiOutlinePlus /> {/* Create/Join new Server button */}
      <FaCompass /> {/* explore public servers button */}
    </div>
  );
}

export default Navbar;
