import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./redux/reducers/userSlice";
import { auth } from "./firebase/config";
import { login, logout } from "./redux/reducers/userSlice";
import Login from "./pages/Login/Login";
import { useLog } from "./hooks/useLog";
import {
  Navbar,
  SidebarServer,
  SidebarUsers,
  HeaderChat,
  Chat,
} from "./components/index.js";
import "./App.css";

function App() {
  const { logInPush, logOut } = useLog();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  console.log(user);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in
        logInPush(user);
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        // the user is logged out
        dispatch(logout());
        logOut(user);
      }
    });
  }, [dispatch]);

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
