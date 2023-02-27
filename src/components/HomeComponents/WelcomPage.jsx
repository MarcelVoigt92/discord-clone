import welcomeLogo from "../../assets/welcomeLogo.jpg";
import nitroLogo from "../../assets/nitro.webp";
import "./WelcomPage.css";

const WelcomPage = () => {
  return (
    <div className="welcome">
      <div className="logo">
        <img src={welcomeLogo} alt="" />
      </div>
      <div>
        <img src={nitroLogo} alt="" />
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default WelcomPage;
