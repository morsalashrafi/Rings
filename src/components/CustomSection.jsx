import React from "react";

export const CustomSection = ({ title, content, children }) => (
  <div className="row">
    <div className="item_top">
      <div className="titlePage">
        <h2>{title}</h2>
        <span>{content}</span>
      </div>
    </div>
    {children}
  </div>
);
