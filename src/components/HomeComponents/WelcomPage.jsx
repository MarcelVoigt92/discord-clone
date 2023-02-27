import welcomeLogo from "../../assets/welcomeLogo.jpg";
import nitroLogo from "../../assets/nitro.webp";
import easy from "../../assets/esay.jpg";
import loveJs from "../../assets/images (4).jpg";
import html from "../../assets/download.jpeg";
import howtoMeet from "../../assets/2.jpg";
import "./WelcomPage.css";

const WelcomPage = () => {
  return (
    <div className="welcome">
      <div className="logo">
        <img src={welcomeLogo} alt="" />
      </div>
      <div className="tow">
        <img src={nitroLogo} alt="" />
        <img src={easy} alt="" />
      </div>
      <div className="tow">
        <img src={loveJs} alt="" />
        <img src={html} alt="" />
      </div>
      <div className="logo">
        <img src={howtoMeet} alt="" />
      </div>
    </div>
  );
};

export default WelcomPage;
