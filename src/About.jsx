import React from "react";
import { Link } from "react-router-dom";
import AboutComponent from "./components/AboutComponent";
import FooterComponent from "./components/FooterComponent";
import NavComponent from "./components/NavComponent";
import NavItem from './components/NavItem';

function About() {

  return (
    <div>
      <NavComponent />
      <NavItem>
        <h1>About</h1>
      </NavItem>
      <AboutComponent />
      <FooterComponent />
    </div>
  );
}

export default About;
