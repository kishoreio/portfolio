import React from "react";
import { ProgressBar } from "react-bootstrap";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills-container">
      <h4 className="sub-title">
        <span className="content-border">Skills</span>
        <span role="img" aria-label="robot">
          🤖
        </span>
      </h4>
      <div className="skills-tab">
        <div className="skill-container">
          <span className="text-font">HTML5</span>
          <ProgressBar animated now={80} className="skill" label={`${80}%`} />
          <span className="text-font">CSS3</span>
          <ProgressBar animated now={70} className="skill" label={`${70}%`} />
          <span className="text-font">JAVASCRIPT</span>
          <ProgressBar animated now={75} className="skill" label={`${75}%`} />
          <span className="text-font">BOOTSTRAP</span>
          <ProgressBar animated now={80} className="skill" label={`${80}%`} />
        </div>
        <div className="skill-container">
          <span className="text-font">REACT.JS</span>
          <ProgressBar animated now={80} className="skill" label={`${80}%`} />
          <span className="text-font">NODE.JS</span>
          <ProgressBar animated now={70} className="skill" label={`${70}%`} />
          <span className="text-font">EXPRESS.JS</span>
          <ProgressBar animated now={75} className="skill" label={`${75}%`} />
          <span className="text-font">MONGODB</span>
          <ProgressBar animated now={75} className="skill" label={`${75}%`} />
        </div>
      </div>
    </div>
  );
};
export default Skills;
