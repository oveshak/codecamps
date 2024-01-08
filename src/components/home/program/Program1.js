import React from "react";
import { program } from "../../data/Data";
import { Link } from "react-router-dom";
const Program1 = () => {
  return (
    <>
      <section className="program1-container">
        <div>
          <div className="row">
            {program.map((item) => (
              <div className="box">
                <h1>
                  <span>{item.title}</span>
                </h1>
                <div className="pos">
                  <p>{item.time}</p>
                  <p>{item.level}</p>
                </div>
                <p className="SUB">{item.subtitle}</p>
                <button className="btn">
                  <Link className="login-btn" to="/login">{item.apply}</Link>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Program1;
