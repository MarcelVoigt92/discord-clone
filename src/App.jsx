import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./redux/reducers/userSlice";
import { auth } from "./firebase/config";
import { login, logout } from "./redux/reducers/userSlice";
import Login from "./pages/Login/Login";
import {
  Navbar,
  SidebarServer,
  SidebarUsers,
  HeaderChat,
  Footer,
  Chat,
} from "./components/index.js";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in
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
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      {user ? (
        <>
          <Navbar />
          <SidebarServer />
          <SidebarUsers />
          <Chat />
          <HeaderChat />
          <Footer />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
