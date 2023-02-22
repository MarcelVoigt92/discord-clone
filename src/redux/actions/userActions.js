import * as actions from "../constants/userConstant";
import { db, auth } from "../../firebase/config";
import { useCollection } from "../../hooks/useCollection";
import { useState } from "react";
import { async } from "@firebase/util";

export const login = (email, password) => async (dispatch) => {
  const [error, setError] = useState("");
  try {
    dispatch({
      type: actions.USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const data = await auth.signInWithEmailAndPassword(email, password);

    await db.collection("users").doc(data.user.uid).update({
      onlineStatus: true,
    });

    dispatch({
      type: actions.USER_LOGIN_SUCCESS,
      payload: data.user,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (err) {
    dispatch({
      type: actions.USER_LOGIN_FAIL,
    });
  }
};

export const logout = async () => (dispatch) => {
  localStorage.removeItem("userInfo");
  try {
    const { uid } = projectAuth.currentUser;
  } catch (error) {}
  dispatch({ type: actions.USER_LOGOUT });
};
