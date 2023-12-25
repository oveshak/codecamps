import React, { useState } from "react";
import { FaPhone } from "react-icons/fa";
import { nav } from "../../data/Data";
import "./header.css";
import { FaTimes } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Header = () => {
  const [navlist, setNavlist] = useState(false);
  return (
    <>
      <header>
        <div className="container flex">
          <div className="logo">
            <img src="./images/logo.svg" alt="logo" />
          </div>
          <div className="nav">
            <ul className={navlist ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li className="list" key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex buton1">
            <span>
              <FaPhone className="icon" />
              <span className="text23">Contact Us</span>
            </span>
          </div>

          <div className="toggle">
            <span onClick={() => setNavlist(!navlist)}>
              {navlist ? (
                <FaTimes className="icon1" />
              ) : (
                <FaAlignJustify className="icon1" />
              )}
            </span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
