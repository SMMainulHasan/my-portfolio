import React from "react";
import './HeaderMain.css';

const HeaderMain = () => {
  return (
    <div className="header-main">
      <p className="green-color">Hi, my naem is</p>
      <h1 className="white-color heading">Mainul Hasan.</h1>
      <h1 className="heading">I build things for the web.</h1>
      <br/>
      <p>
        I'm a web developer who specializes in<br/>building (and occasionally
        designing) exceptional<br/>digital experiences. Currently, looking for<br/>
        opportunities to show my ability.
      </p>
      <br/>
      <button className="button">Get In Touch</button>
    </div>
  );
};

export default HeaderMain;
