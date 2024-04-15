import React from 'react'
import { CustomSection } from "./CustomSection";
import Bird1 from "../assets/images/ber_img.jpg";
import Bird2 from "../assets/images/ber_img1.jpg";
import Bird3 from "../assets/images/ber_img2.jpg";
function Groomsmen() {
  return (
    <div className="groomsmen">
      <div className="container">
        <CustomSection
          title="Bridesmaids And Groomsmen"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t dolor in reprehenderit in voluptate"
        >
          <div className="row">
            <div className="col">
              <div className="bird">
                <figure>
                  <img src={Bird1} alt="Bird" />
                </figure>
                <h3> Voluptate </h3>
              </div>
            </div>
            <div className="col bird_middle">
              <div className="bird">
                <figure>
                  <img src={Bird2} alt="Bird " />
                </figure>
                <h3> Voluptate </h3>
              </div>
            </div>
            <div className="col">
              <div className="bird">
                <figure>
                  <img src={Bird3} alt="Bird " />
                </figure>
                <h3> Voluptate </h3>
              </div>
            </div>
          </div>
        </CustomSection>
      </div>
    </div>
  );
}

export default Groomsmen