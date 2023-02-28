import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import Discord from "../../assets/discord.png";

import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isPending, error } = useLogin();

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
  };
  return (
    <div className="login">
      <img src={Discord} alt="" />
      <form className="login-form" onSubmit={(e) => handleLogin(e)}>
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
        <Link to="/signup">
          <button className="signInBtn">Create an Account</button>
        </Link>
      </form>
      {error && <div className="error">{error}</div>}
      {/* <Link to="/signup">You do not have an account create on with us</Link> */}
    </div>
  );
};

export default Login;
