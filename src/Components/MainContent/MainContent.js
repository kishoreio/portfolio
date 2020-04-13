import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faMedium,
  faLinkedin,
  faRedditAlien,
  faDev,
} from "@fortawesome/free-brands-svg-icons";
import "./MainContent.css";

const MainContent = () => {
  return (
    <div className="main-container">
      <div className="inside-container">
        <h1 className="main-heading">Hello, I'm Kishore</h1>
        <p className="intro intro-font">
          A Passionate MERN stack Developer, who loves to transform ideas into
          reality using code.
        </p>
        <div className="social-icon">
          <a
            href="https://github.com/kishoreio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <a
            href="https://medium.com/@kishoreio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faMedium} className="icon" />
          </a>
          <a
            href="https://twitter.com/kishoreio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/kishoreio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
          <a
            href="https://www.reddit.com/user/kishoreio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faRedditAlien} className="icon" />
          </a>
          <a
            href="https://dev.to/kishoreio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faDev} className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
