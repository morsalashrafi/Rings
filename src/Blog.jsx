import React from "react";
import { Link } from "react-router-dom";
import NavComponent from "./components/NavComponent";
import NavItem from "./components/NavItem";
import FooterComponent from "./components/FooterComponent";
import BlogComponent from "./components/BlogComponent";

function Service() {
  return (
    <div>
      <NavComponent />
      <NavItem>
        <h1>Blog</h1>
      </NavItem>
      <BlogComponent/>
      <FooterComponent />
    </div>
  );
}

export default Service;
