import React from "react";
import { Link } from "react-router-dom";
import ServiceComponent from "./components/ServiceComponent";
import NavComponent from "./components/NavComponent";
import NavItem from "./components/NavItem";
import FooterComponent from "./components/FooterComponent";

function Service() {
  return (
    <div>
      <NavComponent />
      <NavItem>
        <h1>Service</h1>
      </NavItem>
      <ServiceComponent/>
      <FooterComponent />
    </div>
  );
}

export default Service;
