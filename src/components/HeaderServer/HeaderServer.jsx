//Header for Server Sidebar - With Server options adding, deleting and managing Channels etc.
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import "../SidebarServer/SidebarServer.css";
import "../animate.css";

function HeaderServer({ serverName }) {
  const [menuOpener, setMenuOpener] = useState(false);
  const handleMenuOpener = () => setMenuOpener(!menuOpener);
  const menuIcon = menuOpener ? <RxCross2 /> : <IoIosArrowDown />;
  const menuOpen = menuOpener ? "inline-block" : "none";
  const menuAnimation = menuOpener ? "animate__animated animate__zoomIn" : "";

  return (
    <>
      <div className="sidebar__top">
        <span>{serverName}</span>
        <span onClick={handleMenuOpener}>{menuIcon}</span>
        {/*or <IoIosArrowUp /> - Arrow Up/Down for server options */}
      </div>
      <div style={{ display: menuOpen }} className="serverMenu">
        {" "}
        {/* Server Options Menu */}
        <div className={`serverMenu__content ${menuAnimation}`}>
          <p>Invite People</p>
          <p>Server Settings</p>
          <p>Create Channel</p>
          <p>Create Category</p>
          <p>Create Events</p>
          <p>Notification Settings</p>
          <p>Privacy Settings</p>
        </div>
      </div>
    </>
  );
}

export default HeaderServer;
