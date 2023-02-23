import db from "../firebase/config";

export const useLog = () => {
  const logInPush = async (user) => {
    try {
      await db.collection("users").doc(user.uid).set({
        user,
      });

      await db.collection("users").doc(user.uid).update({
        online: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = async (user) => {
    try {
      await db.collection("users").doc(user.uid).update({
        online: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return { logInPush, logOut };
};
