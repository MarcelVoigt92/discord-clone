import { useSelector } from "react-redux";
import { selectUser } from "./redux/reducers/userSlice";

import Login from "./pages/Login/Login";

import SignUp from "./pages/SignUp/SignUp";

import {
  Navbar,
  SidebarServer,
  SidebarUsers,
  HeaderChat,
  Chat,
} from "./components/index.js";
import "./App.css";

function App() {
  const user = useSelector(selectUser);

  return (
    <div
      className="App"
      style={{ display: `${user ? "grid" : "flex"}`, justifyContent: "center" }}
    >
      {user ? (
        <>
          <Navbar />
          <SidebarServer />
          <SidebarUsers />
          <Chat />
          <HeaderChat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
