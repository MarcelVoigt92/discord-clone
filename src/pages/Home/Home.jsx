import {
  SidebarServer,
  SidebarUsers,
  HeaderChat,
  Friends,
  WelcomPage,
} from "../../components/index";
import { useCollection } from "../../hooks/useCollection";
import "./Home.css";

const Home = () => {
  const { doucments } = useCollection("users");

  return (
    <div className="home">
      <HeaderChat name={""} />
      <SidebarUsers />
      <Friends />
      <WelcomPage />
    </div>
  );
};

export default Home;
