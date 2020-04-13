import React from "react";
import "./AboutMe.css";
import picture from "../../Resources/aboutme.svg";

const AboutUs = () => {
  return (
    <div className="about-container">
      <h4 className="sub-title">
        <span className="about-border">About Me</span>
        <span role="img" aria-label="person">
          🙋‍♂️
        </span>
      </h4>
      <div className="about-inside">
        <div className="image-content">
          <img src={picture} alt="logo" className="img-picture" />
        </div>
        <div className="about-contents">
          <p>
            Hello
            <span role="img" aria-label="person">
              👋
            </span>
            I'm Kishore, a full stack developer from chennai
            <span role="img" aria-label="person">
              🇮🇳
            </span>
            . I primarily use Reactjs
            <span role="img" aria-label="person">
              ⚛️
            </span>{" "}
            but picking up a new framework or language isn't a problem.
          </p>
          <p>
            I'm{" "}
            <span role="img" aria-label="energetic">
              ⚡
            </span>
            energetic, eager to learn new skills, squeezing by brain with{" "}
            <span role="img" aria-label="innovative">
              💡
            </span>
            innovative ideas and use a{" "}
            <span role="img" aria-label="creative">
              🤔
            </span>
            creative approach for problem solving. I'm always{" "}
            <span role="img" aria-label="development">
              🤯
            </span>
            highly enthused about my work and tasks ahead and{" "}
            <span role="img" aria-label="learning">
              📚
            </span>
            committed to learning and{" "}
            <span role="img" aria-label="development">
              👨‍💻
            </span>
            self-development so that i can consistently achieve better results.
          </p>
          {/* <li>
              <span className="about-border">Energetic:</span> I am always
              energetic and eager to learn new skills and adapt to it.
            </li>
            <li>
              <span className="about-border">Creative:</span> I always comes up
              with innovative ideas and use a creative approach for problem
              solving.
            </li>
            <li>
              <span className="about-border">Enthusiastic:</span> I am always
              highly enthused about my work and tasks ahead.
            </li>
            <li>
              <span className="about-border">Self-Development:</span> I am
              committed to learning and self-development so that I can
              consistently achieve better results.
            </li> */}
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
