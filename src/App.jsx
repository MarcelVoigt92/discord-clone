import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/index";
import { Home, Server, Login, SignUp, CreateServer } from "./pages/index";
import { useAuthContext } from "./hooks/useAuthContext";

import "./App.css";
import Room from "./pages/Room/Room";

function App() {
  const { user, AuthIsReady } = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        {user && <Navbar />}
        <Routes>
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/servers/:id"
            element={user ? <Server /> : <Navigate to="/login" />}
          />
          <Route
            path="create"
            element={user ? <CreateServer /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/signup"
            element={!user ? <SignUp /> : <Navigate to="/" />}
          />
          <Route
            path="/servers/:id/rooms/:id"
            element={user ? <Room /> : <Navigate to="/login" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
