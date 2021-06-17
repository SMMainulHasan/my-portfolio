import React from "react";
import ProfilePhoto from "../../Images/portfolio.png";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div id="01" className="container about-me">
      <div className="d-flex align-items-center">
        <h2 className="white-color">
          <span className="green-color">01.</span> About Me{" "}
        </h2>
        <div className="hr-line"></div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-7">
          <p>
            Hello! My name is Mainul and I enjoy writing code and implementing
            logical thought into my project. I’m really keen to learn new
            technology. I have built some projects using React, Node.js,
            Express, and MongoDB. Now looking for opportunities to show my
            ability.I aspire toward a career that will allow me to channel my
            creativity through crafting beautiful software and engaging
            experiences.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <div className="row technology">
            <ul className="col-6 offset-1">
              <li>JavaScript(ES6)</li>
              <li>Node.js</li>
              <li>MongoDB</li>
            </ul>
            <ul className="col-5">
              <li>React</li>
              <li>Redux</li>
              <li>Bootstrap</li>
            </ul>
          </div>
        </div>
        <div className="col-md-4 offset-1 profile-photo">
          <img loading="lazy" src={ProfilePhoto} alt="ProfilePhoto" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
