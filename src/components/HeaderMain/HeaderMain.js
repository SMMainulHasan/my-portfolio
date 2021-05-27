import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Resume from "../../Images/Mainnul Hasan resume.pdf";
import "./HeaderMain.css";

const HeaderMain = () => {
  return (
    <div className="header-main">
      <p className="green-color">Hi, my naem is</p>
      <h1 className="white-color heading">Mainul Hasan.</h1>
      <h1 className="heading">I build things for the web.</h1>
      <br />
      <p>
        I'm a web developer who specializes in
        <br />
        building (and occasionally designing) exceptional
        <br />
        digital experiences. Currently, looking for
        <br />
        opportunities to show my ability.
      </p>
      <br />
      <button className="button">Get In Touch</button>
      <a
        href={Resume}
        target="_blank"
        className="button resume-btn ms-4 me-1"
        rel="noreferrer"
      >
        Resume
      </a>
      <a href={Resume} download className="button resume-btn">
        <FontAwesomeIcon icon={faArrowDown} />
      </a>
    </div>
  );
};

export default HeaderMain;
