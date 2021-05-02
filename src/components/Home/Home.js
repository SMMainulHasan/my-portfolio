import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <AboutMe />
      <Projects />
    </div>
  );
};

export default Home;
