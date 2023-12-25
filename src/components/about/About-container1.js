import React from "react";
import { about } from "../data/Data";
const Aboutcontainer1 = () => {
  return (
    <>
      <div className="about-container1">
        <div className="container">
          <div className="row9">
            {about.map((item) => (
              <div className="box">
                <div className="left">
                  <h1>
                    <span>{item.title}</span>
                  </h1>
                </div>
                <div className="right">
                  <p>{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutcontainer1;
