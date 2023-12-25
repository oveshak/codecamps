import React from "react";
import { program2 } from "../../data/Data";

const Program2 = () => {
  return (
    <>
      <section className="program2-container">
        <div>
          <div className="row2">
            {program2.map((item) => (
              <div className="box2">
                <img src={item.cover} alt="" />
                <h1>{item.title}</h1>
                <p>{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Program2;
