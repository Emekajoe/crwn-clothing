import React from "react";
import "./menu-item.styles.scss";

export const MenuItem = ({ title, backgroundColor, image, size }) => (
  <div
    style={{
      backgroundImage: `url(${image})`,
    }}
    className={`${size} menu-item`}
  >
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);
