import React from "react";
import Resume from '../../Images/Mainnul Hasan resume.pdf';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="d-flex align-items-center navbar">
      <div className="logo">
        <h2 className="green-color">Mainul Hasan</h2>
      </div>
      <ul className="d-flex align-items-center nav-links">
        <li>
          <a href="#01">
            <span className="num">01.</span> About
          </a>
        </li>
        <li>
          <a href="#02">
            <span className="num">02.</span> Projects
          </a>
        </li>
        <li>
          <a href="#03">
            <span className="num">03.</span> Contact
          </a>
        </li>
        <li className="resume-btn">
          <a href={Resume} target="_blank" className="button resume-btn" rel="noreferrer">Resume</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
