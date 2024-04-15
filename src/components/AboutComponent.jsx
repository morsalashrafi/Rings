import React from 'react'
import About from "../assets/images/about.png";

function AboutComponent() {
  return (
    <div>
      <div className="about">
        <div className="container ">
          <div className="grid">
            <div className="about_content-left">
              <div className="titlePage">
                <h2>About Our Company</h2>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </span>
                <a className="read_more">
                  {" "}
                  Read More
                </a>
              </div>
            </div>
            <div className="about_content-right">
              <div className="about_img">
                <figure>
                  <img src={About} alt="#" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutComponent