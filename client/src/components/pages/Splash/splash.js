import React from "react";
// import { TiSocialFacebook, TiSocialTwitterCircular, FaInstagram } from 'react-icons/ti';
import telegramIcon from "../../assets/images/telegramIcon.png";
import xIcon from "../../assets/images/xIcon.png";
import yutubeIcon from "../../assets/images/youtubeIcon.png";
import logo from "../../assets/images/amarnaLogo.png";
import "./styles.css";

const Splash = () => {
  return (
    <div className="splash">
      <div className="splash-logo">
        <img className="splash-logo-img" src={logo} />
      </div>
      <div className="splash-title">
        <div className="splash-big-title">
          <div style={{ color: "rgb(239,184,23)" }}>$AMAR</div>
          <div style={{ color: "white" }}>&nbsp;TOKEN</div>
        </div>
        <div className="splash-small-title">
          <div style={{ color: "white" }}>Hide,&nbsp;</div>
          <div style={{ color: "white" }}>Watch,&nbsp;</div>
          <div style={{ color: "white" }}>Find,&nbsp;</div>
          <div style={{ color: "white" }}>and</div>
          <div style={{ color: "rgb(239,184,23" }}>&nbsp;WIN</div>
        </div>
      </div>
      <div className="splash-loader">
        <div className="splash-loader-spinner"></div>
        <div className="splash-loader-text">Loading...</div>
      </div>
      <div className="splash-desc-icons">
        <div className="splash-description">
          <div>Stay tunned</div>
          <div>More info in official channels</div>
        </div>
        <div className="splach-social-icons">
          <img src={telegramIcon} />
          <img src={xIcon} />
          <img src={yutubeIcon} />
        </div>
      </div>
    </div>
  );
};

export default Splash;
