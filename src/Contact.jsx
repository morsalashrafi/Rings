import React from "react";
import { Link } from "react-router-dom";
import NavComponent from "./components/NavComponent";
import NavItem from "./components/NavItem";
import FooterComponent from "./components/FooterComponent";
import ContactComponent from "./components/ContactComponent";

function Service() {
  return (
    <div>
      <NavComponent />
      <NavItem>
        <h1>Contact Us</h1>
      </NavItem>
     <ContactComponent/>
      <FooterComponent />
    </div>
  );
}

export default Service;
