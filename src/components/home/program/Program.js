import React from "react";
import Headings from "../../common/heading/Headings";
import "./program.css";
import Program1 from "./Program1";
import Program2 from "./Program2";
import Program3 from "./Program3";

const Program = () => {
  return (
    <>
      <section className="program-container">
        <div className="container">
          <div className="heading">
            <h1>
              {" "}
              Our <span>Program</span>
            </h1>
          </div>
          <Headings subtitle="Most of the world continues to use outdated education models and hiring practices, yet expects more diverse, inventive, and motivated tech talent. We believe in hiring differently. We're on a mission to connect passionate, qualified individuals with employers in need of skilled tech talent. We offer FREE tech education and job-readiness training. Qualified individuals are matched with an apprenticeship at one of our employer partners who need tech talent, ranging from Fortune 500 companies to fresh new start-ups. More than four out of five of our apprenticeships result in a full-time job offer, and most Codecampers double their previous salary after landing a job." />

          <Program1 />
          <Program2 />
          <Program3 />
        </div>
      </section>
    </>
  );
};

export default Program;
