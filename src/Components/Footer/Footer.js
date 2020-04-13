import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faMedium,
  faLinkedin,
  faRedditAlien,
  faReact,
  faDev,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-content">
        <div className="footer-mobile">
          <p className="made">&copy; kishore.io. Built with</p>
          <FontAwesomeIcon
            icon={faReact}
            className="icon icon-footer icon-react"
          />
        </div>
        <div className="footer-social">
          <a
            href="https://github.com/kishoreio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="icon icon-footer" />
          </a>
          <a
            href="https://medium.com/@kishoreio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faMedium} className="icon icon-footer" />
          </a>
          <a
            href="https://twitter.com/kishoreio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} className="icon icon-footer" />
          </a>
          <a
            href="https://www.linkedin.com/in/kishoreio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon icon-footer" />
          </a>
          <a
            href="https://www.reddit.com/user/kishoreio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faRedditAlien}
              className="icon icon-footer"
            />
          </a>
          <a
            href="https://dev.to/kishoreio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faDev} className="icon icon-footer" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
