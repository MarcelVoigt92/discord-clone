import { auth } from "../firebase/config";
import db from "../firebase/config";
import { useDispatch } from "react-redux";
import { login } from "../redux/reducers/userSlice";
export const useLogIn = () => {
  const dispatch = useDispatch();
  const userlogin = async (email, passWord) => {
    const currentUser = auth.currentUser;

    try {
      const response = await auth.signInWithEmailAndPassword(email, passWord);
      await db.collection("users").doc(response.user.uid).update({
        online: true,
      });
      dispatch(login(currentUser));
    } catch (err) {}
  };

  return { userlogin };
};
