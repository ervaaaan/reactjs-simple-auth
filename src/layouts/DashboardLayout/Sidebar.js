import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// Images
import logo from "images/aone-logo.svg";
import iconMenu from "images/bars.svg";
import iconInfo from "images/info.png";
import iconUsers from "images/users.png";

export default function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/",
      name: "About",
      icon: iconInfo,
    },
    {
      path: "/users",
      name: "Users",
      icon: iconUsers,
    },
  ];
  return (
    <div style={{ width: isOpen ? "70px" : "305px" }} className="sidebar">
      <div className="top_section">
        <div className="logo" style={{ display: isOpen ? "none" : "block" }}>
          <img src={logo} alt="AOne" />
          <h1>AOne</h1>
        </div>
        <div
          style={{ marginLeft: isOpen ? "0px" : "50px" }}
          className="menu-bar"
        >
          <img src={iconMenu} alt="Toggle menu" onClick={toggle} />
        </div>
      </div>
      {menuItem.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          className={(navData) => (navData.isActive ? "link active" : "link")}
        >
          <div className="icon">
            <img src={item.icon} alt={item.name} />
          </div>
          <div
            style={{ display: isOpen ? "none" : "block" }}
            className="link_text"
          >
            {item.name}
          </div>
        </NavLink>
      ))}
    </div>
  );
}
