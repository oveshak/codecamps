import React from "react";
import "./about.css";
import Block from "../common/block/Block";
import Aboutcontainer1 from "./About-container1";
import Aboutcontainer2 from "./Aboutcontainer2";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="container">
          <div className="about-hero">
            <h1>About Us</h1>
          </div>
        </div>
      </div>
      <div>
        <Block />
      </div>
      <Aboutcontainer1 />
      <Aboutcontainer2 />
    </>
  );
};

export default About;
