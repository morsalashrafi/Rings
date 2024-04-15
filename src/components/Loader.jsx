import React from "react";
import logo from "../assets/images/loading.gif";

function Loader() {
  const hidden = {
    display: "none",
  };

  return (
    <div className="loader_bg" style={hidden}>
      <div className="loader">
        <img src={logo} alt="#" />
      </div>
    </div>
  );
}

export default Loader;
