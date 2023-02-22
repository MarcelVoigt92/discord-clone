import React from "react";
import { Navbar, SidebarServer, SidebarUsers, HeaderChat, HeaderServer, Footer } from "./components/index.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>TIME TO SUFFER</h1>
      <Navbar />
      <SidebarServer />
      <SidebarUsers />
      <HeaderChat />
      <Footer />
    </div>
  );
}

export default App;
