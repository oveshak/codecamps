import React from "react";
import { community1 } from "../data/Data";
const Community1 = () => {
  return (
    <>
      <div className="community1-container">
        <div className="container">
          <div className="row6">
            <div className="left">
              <h2>Discussion</h2>
              <div className="rgp">
                {community1.map((item) => (
                  <div className="rgst">
                    <h1>{item.title}</h1>
                    <div>
                      <p>{item.name}</p>
                      <p>{item.time}</p>
                    </div>
                    <p className="subs"> {item.subtitle}</p>
                    <hr />
                  </div>
                ))}
              </div>
            </div>
            <div className="right">
              <div>
                <div className="head">
                  <h3>
                    WELCOME TO THE{" "}
                    <span style={{ color: "rgb(6,163,163)" }}> CODECAMP </span>
                    CODING FORUM
                  </h3>
                </div>
                <p className="rgbs">
                  Welcome to the Codecamp Coding Forum, the place to chat about
                  anything related to programming and coding languages. Please
                  join our friendly community by clicking the button below - it
                  only takes a few seconds and is totally free.
                </p>
                <button className="btnsr">Ask a Quick</button>

                <div className="heads1">
                  <h3>LATEST THREADS</h3>
                </div>
                <div className="heads2">
                  <h3>Help Me Fix This Bug In My Program!</h3>
                  <div>
                    <p>Started by Anshul</p>
                    <p>09:45 pm</p>
                  </div>
                </div>
                <hr />
                <div className="heads2">
                  <h3>How To Add Augmented Reality Content To A Website?</h3>
                  <div>
                    <p>Started by Gaurav</p>
                    <p>06:37 pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Community1;
