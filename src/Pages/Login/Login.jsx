import { useDispatch } from "react-redux";
import { useState } from "react";
import { useLogIn } from "../../hooks/useLogin";
import { login } from "../../redux/reducers/userSlice";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userlogin } = useLogIn();
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(userlogin(email, password)));
  };
  return (
    <div className="login">
      <form onSubmit={(e) => handleLogin(e)}>
        <label>
          <span>Email:</span>
          <input
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Password : </span>
          <input
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button className="signInBtn">Log In...</button>
      </form>
      {/* <Link to="/signup">You do not have an account create on with us</Link> */}
    </div>
  );
};

export default Login;
