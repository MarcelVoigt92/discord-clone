import { useSelector } from "react-redux";
import { selectUser } from "./redux/reducers/userSlice";
import { Navbar } from "./components/index";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";

import SignUp from "./pages/SignUp/SignUp";

import "./App.css";

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="App">
      {user && (
        <div className="wrapper">
          <Navbar />
          <Home />
        </div>
      )}
      {!user && <Login />}
    </div>
  );
}

export default App;
