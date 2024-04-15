import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import LogoFooter from "../assets/images/logo_footer.png";
import Map from "../assets/images/map.jpg";

const ContactComponent = () => {
  return (
    <div>
      <div className="contact">
        <div className="container">
          <div className="ru_bg">
            <div className="row footer_content-top">
              <div className="footer-left">
                <a href="index.html">
                  {" "}
                  <img className="logo_footer" src={LogoFooter} alt="#" />
                </a>
              </div>
              <div className="footer-right">
                <ul className="location">
                  <li>
                    <FaMapMarkerAlt /> Gb road 123 london Uk{" "}
                  </li>
                  <li>
                    <FaPhone /> Ir(+98) 9027832864
                  </li>
                  <li>
                    <FaEnvelope /> Morsalzulfikarashrafi@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="form_footer">
              <div className="form-content">
                <div className="titlePage">
                  <h2>Contact Us</h2>
                </div>
                <form id="request" className="main_form">
                  <div className="row">
                    <div className="form-item ">
                      <input
                        className="contactus"
                        placeholder="Name"
                        type="type"
                        name="Name"
                      />
                    </div>
                    <div className="form-item">
                      <input
                        className="contactus"
                        placeholder="Phone number"
                        type="type"
                        name="Phone number"
                      />
                    </div>
                    <div className="form-item">
                      <input
                        className="contactus"
                        placeholder="Email"
                        type="type"
                        name="Email"
                      />
                    </div>
                    <div className="form-item">
                      <textarea
                        className="textarea"
                        placeholder="Message"
                        type="type"
                        message="Name"
                      ></textarea>
                    </div>
                    <button className="send_btn">Send</button>
                    <div>
                      <ul className="social_icon">
                        <li>
                          <a href="#">
                            <FaFacebookF />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <FaTwitter />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <RiInstagramFill />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <FaLinkedin />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </form>
              </div>
              <div className="map_main">
                <div className="map-responsive">
                  <img src={Map} alt="map" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
