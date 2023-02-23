import { FaDiscord } from "react-icons/fa";
import { auth, provider } from "../../firebase/config";
import "./Login.css";

const Login = () => {
  const signIn = (e) => {
    console.log(e);
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div>
        <p>
          <FaDiscord /> Discord
        </p>
      </div>
      <button onClick={signIn}>Sign IN</button>
    </div>
  );
};

export default Login;
