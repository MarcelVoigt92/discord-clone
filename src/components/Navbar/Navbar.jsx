//Navigation Bar for navigating between servers and private messages.
import { FaDiscord, FaCompass } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineLogout } from "react-icons/ai";
import { useCollection } from "../../hooks/useCollection";
import { useLogout } from "../../hooks/useLogout";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const { documents, error } = useCollection("servers");

  const { logout } = useLogout();

  return (
    <div className="nav">
      {/* Create/Join new Server button */}
      <div className="icon-div">
        <Link to="/">
          <FaDiscord />
        </Link>
        {/* private message tab */}
      </div>
      <div className="controlIcons">
        <div className="serverWrapper">
          {documents?.map((server) => (
            <div className="server-icons" key={server.id}>
              <Link to={`servers/${server.id}`}>
                <button className="serverName ">
                  {server.name.charAt(0).toUpperCase()}
                </button>
              </Link>
            </div>
          ))}
        </div>
        <div className="icons">
          <Link to="/create">
            <button>
              <AiOutlinePlus />
            </button>
          </Link>
        </div>
        {/* explore public servers button */}
        <div className="icons">
          <FaCompass />
        </div>
        <div className="icons">
          <button className="logoutBtn" onClick={logout}>
            <AiOutlineLogout />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
