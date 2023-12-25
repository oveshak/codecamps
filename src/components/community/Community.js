import React from "react";
import "./community.css";
import Block from "../common/block/Block";
import Community1 from "./Community1";
const Community = () => {
  return (
    <>
      <div className="community-container">
        <div className="container">
          <div className="community-hero">
            <h1>Community</h1>
          </div>
        </div>
      </div>
      <div>
        <Block />
      </div>
      <Community1 />
    </>
  );
};

export default Community;
