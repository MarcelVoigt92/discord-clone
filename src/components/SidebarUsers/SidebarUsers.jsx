// Sidebar for every server with online and offline users.
import React from "react";
import { useCollection } from "../../hooks/useCollection";
import "./SidebarUsers.css";
function SidebarUsers() {
  const users = useCollection("users");

  return (
    <div className="sidebarUsers">
      <span>Online {/* OnlineCount */}</span>
      <div>
        <ul className="userList">
          {users?.documents?.map((user) => (
            <>
              {user.online && (
                <li>
                  {" "}
                  <img src={user.photoURL} alt="" /> {user.displayName}
                  <div className="green" />
                </li>
              )}
            </>
          ))}
        </ul>
      </div>
      <span>Offline {/* Offline Count */}</span>
      <div>
        <ul className="userList">
          {users?.documents?.map((user) => (
            <>
              {!user.online && (
                <li>
                  <img src={user.photoURL} alt="" /> {user.displayName}
                  <div className="grau" />
                </li>
              )}
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SidebarUsers;
