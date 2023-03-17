import React from "react";
import "./Skills.css";
const Skills = () => {
  return (
    <div>
      <p style={{ marginLeft: "40px", marginTop: "20px" }}>HTML</p>
      <div className="container">
        <div className="skills html">90%</div>
      </div>

      <p style={{ marginLeft: "40px", marginTop: "20px" }}>CSS</p>
      <div className="container">
        <div className="skills css">90%</div>
      </div>

      <p style={{ marginLeft: "40px", marginTop: "20px" }}>JAVASCRIPT</p>
      <div className="container">
        <div className="skills js">65%</div>
      </div>
    </div>
  );
};

export default Skills;
