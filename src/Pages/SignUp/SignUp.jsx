import { useState } from "react";
import { useSignUp } from "../../hooks/useSignUp";
import { useDispatch } from "react-redux";
import { login } from "../../redux/reducers/userSlice";
import discord from "../../assets/discord.png";
import "./SignUp.css";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [photo, setPhoto] = useState(null);
  const [photoError, setPhotoError] = useState(null);
  const { signup } = useSignUp();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(signup(email, passWord, displayName, photo)));
  };

  const handlePhoto = (e) => {
    setPhoto(null);
    let selected = e.target.files[0];

    if (!selected) {
      setPhotoError("please chosse a Profile Picture");
      return;
    }

    if (!selected.type.includes("image")) {
      setPhotoError("please chosse a Valid image type");
    }
    if (selected.size > 900000) {
      setPhotoError("Image file must be less than 100kb");
      return;
    }
    setPhotoError(null);
    setPhoto(selected);
  };
  return (
    <div className="signUp">
      <img className="discord-img" src={discord} alt="" />
      <form className="sign-up-form" onSubmit={(e) => handleSubmit(e)}>
        <h2>Sign up to be with us</h2>
        <label>
          <span>Email:</span>
          <input
            className="sign-up-input"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span className="sign-up-span">Password:</span>
          <input
            className="sign-up-input"
            type="password"
            required
            onChange={(e) => setPassWord(e.target.value)}
            value={passWord}
          />
        </label>
        <label>
          <span className="sign-up-span">Username:</span>
          <input
            className="sign-up-input"
            type="text"
            required
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
          />
        </label>
        <label>
          <span>Profile Picture:</span>
          <input type="file" required onChange={handlePhoto} />
        </label>
        <button className="sign-up-btn">Sign Up!</button>
      </form>
    </div>
  );
};

export default SignUp;
