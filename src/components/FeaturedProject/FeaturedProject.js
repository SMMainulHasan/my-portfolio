import React from "react";
import Destination from "../../Images/dastination.png";
import DigitalService from "../../Images/digital service.png";
import WatchFlair from "../../Images/watch falir.png";
import "./FeaturedProject.css";

const FeaturedProject = () => {
  return (
    <>
      {/* ==========remember I've to make it dynamic
        right align
        ==========*/}
      <div className="d-flex featured-project">
        <div className="project-img">
          <img src={DigitalService} alt="DigitalService" />
        </div>
        <div className="project-detail d-flex flex-column align-items-end project-info">
          <p className="green-color">Featured Project</p>
          <h2 className="white-color mb-5 pb-5">Digital Service</h2>
          <div className="brief-info">
            <p className="text-end">
              A digital service app where the user can order services, user can
              see his/her order services progress when service company's admin
              role change whether service progress pending, processing or done.
            </p>
          </div>
          <h6 className="mt-5 pt-5 white-color">
            React.js &nbsp;&nbsp;&nbsp;&nbsp; Express.js
            &nbsp;&nbsp;&nbsp;&nbsp; MongoDB
          </h6>
          <div className="d-flex project-buttons">
            <a
              href="https://digital-services-748c7.web.app/"
              target="_blank"
              rel="noreferrer"
              className="button"
            >
              Website
            </a>
            <a
              href="https://github.com/SMMainulHasan/degital-service"
              target="_blank"
              rel="noreferrer"
              className="button ms-4"
            >
              Github
            </a>
          </div>
        </div>
      </div>

      {/* ==========
        left align
        ==========*/}
      <div className="d-flex featured-project">
        <div className="project-detail d-flex flex-column align-items-start project-info">
          <p className="green-color">Featured Project</p>
          <h2 className="white-color mb-5 pb-5">Watch Flair</h2>
          <div className="brief-info">
            <p className="text-start">
              An e-commerce web app where user can order product if user is
              signed in and users can get there's order list. In this user can
              also add product and manage their product.
            </p>
          </div>
          <h6 className="mt-5 pt-5 white-color">
            React.js &nbsp;&nbsp;&nbsp;&nbsp; Express.js
            &nbsp;&nbsp;&nbsp;&nbsp; MongoDB
          </h6>
          <div className="d-flex project-buttons">
            <a
              href="https://watch-flair.web.app/"
              target="_blank"
              rel="noreferrer"
              className="button"
            >
              Website
            </a>
            <a
              href="https://github.com/SMMainulHasan/watch-flair-client"
              target="_blank"
              rel="noreferrer"
              className="button ms-4"
            >
              Github
            </a>
          </div>
        </div>
        <div className="project-img">
          <img src={WatchFlair} alt="DigitalService" />
        </div>
      </div>
      {/* ==========
        right align
        ==========*/}
      <div className="d-flex featured-project">
        <div className="project-img">
          <img src={Destination} alt="DigitalService" />
        </div>
        <div className="project-detail d-flex flex-column align-items-end project-info">
          <p className="green-color">Featured Project</p>
          <h2 className="white-color mb-5 pb-5">Destination</h2>
          <div className="brief-info">
            <p className="text-end">
              A transport app where user can choose a types of vehicle, after
              his selection users hss to enter destination location, and it will
              show his path through google map.
            </p>
          </div>
          <h6 className="mt-5 pt-5 white-color">
            React.js &nbsp;&nbsp;&nbsp;&nbsp; React-Router
            &nbsp;&nbsp;&nbsp;&nbsp; Firebase
          </h6>
          <div className="d-flex project-buttons">
            <a
              href="https://destination-61576.web.app/"
              target="_blank"
              rel="noreferrer"
              className="button"
            >
              Website
            </a>
            <a
              href="https://github.com/SMMainulHasan/dastination"
              target="_blank"
              rel="noreferrer"
              className="button ms-4"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProject;
