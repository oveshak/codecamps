import React from "react";
import "./hero.css";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="local">
            <h1>Helping Passionate</h1>
            <h1>Learners To Code For Free</h1>
          </div>
          <div className="local2">
            <p>
              <span>CodeCamp</span> provides hands on training and education
              through coding classes that gives participants the technical and
              cognitive skills they need to excel in technology -driven
              workplaces and all this with absolutely no cost. Because learning
              matters.
            </p>
          </div>
        </div>
      </section>
      <div className="bg">
        <div className="container">
          <div className="sr">
            <p>
              "Build your future without breaking the bank - free coding
              education for financially struggling students."{" "}
              <Link to={"/contact"}>Contact Us</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
