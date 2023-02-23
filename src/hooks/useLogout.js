import { auth } from "../firebase/config";
import db from "../firebase/config";
import { useDispatch } from "react-redux";
import { logout } from "../redux/reducers/userSlice";

export const useLogOut = () => {
  const dispatch = useDispatch();
  const userlogout = async (user) => {
    try {
      const { uid } = auth.currentUser;
      await db.collection("users").doc(uid).update({
        online: false,
      });
      await auth.signOut();
      dispatch(logout(user));
    } catch (error) {
      console.log(error);
    }
  };

  return { userlogout };
};
