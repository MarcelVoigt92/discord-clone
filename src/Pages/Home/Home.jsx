import {
  Navbar,
  SidebarServer,
  SidebarUsers,
  HeaderChat,
  Chat,
} from "../../components/index";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <HeaderChat />
      <SidebarUsers />
      <SidebarServer />
      <Chat />
    </div>
  );
};

export default Home;
