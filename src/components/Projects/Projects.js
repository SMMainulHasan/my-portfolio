import React from 'react';
import FeaturedProject from '../FeaturedProject/FeaturedProject';

const Projects = () => {
    return (
        <div id="02" className="about-me">
      <div className="d-flex align-items-center">
        <h2 className="white-color">
          <span className="green-color">02.</span> Some Things I’ve Built{" "}
        </h2>
        <div className="hr-line"></div>
      </div>
      <br />
      <FeaturedProject></FeaturedProject>
    </div>
    );
};

export default Projects;