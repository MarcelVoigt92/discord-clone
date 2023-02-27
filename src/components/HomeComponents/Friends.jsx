import { MdShutterSpeed } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import Footer from "../Footer/Footer";
import "./Friends.css";
const Friends = () => {
  return (
    <div className="friends">
      <div className="searchFriends">
        <label>
          <input type="text" placeholder="find or Start conversation" />
        </label>
      </div>
      <div className="friendsList">
        <button type="ckeckbox" checked>
          <FaUserFriends />
          <p>Friends</p>
        </button>
        <button type="ckeckbox">
          <MdShutterSpeed />
          <p>Nitro</p>{" "}
        </button>
        <div className="AddedFriend"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Friends;
