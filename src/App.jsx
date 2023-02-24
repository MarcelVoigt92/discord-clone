import { useSelector } from "react-redux";
import { selectUser } from "./redux/reducers/userSlice";
import { Navbar } from "./components/index";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import CreateServer from "./pages/CreateServer/CreateServer";

import SignUp from "./pages/SignUp/SignUp";

import "./App.css";
import Server from "./pages/Server/Server";

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="App">
      {user && (
        <div className="wrapper">
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project" element={<Server />} />
              <Route path="/create" element={<CreateServer />} />
            </Routes>
          </BrowserRouter>
        </div>
      )}
      {!user && <Login />}
    </div>
  );
}

export default App;
