import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faCss3,
  faHtml5,
  faJs,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import "./Projects.css";
import shortify from "../../Resources/shortify.png";
import teaCozy from "../../Resources/tea-cozy-screenshot.png";
import libraryApp from "../../Resources/library-app.png";
import shortNews from "../../Resources/short-news.png";
import chatApp from "../../Resources/chat-app.png";
import chennaiBank from "../../Resources/chennaibank.png";

const Projects = () => {
  return (
    <div className="project-container">
      <h4 className="sub-title">
        <span className="about-border">Projects</span>
        <span role="img" aria-label="person">
          💻
        </span>
      </h4>
      <div className="main-project">
        {/* first project */}
        <div className="git-container">
          <div className="containOne">
            <div className="project-title">Shortify</div>
            <div className="project-content">
              A URL shortener app that reduces long url to short url and also
              contains a dashboard to manage all links and analyse the total
              no.of.clicks.
            </div>
          </div>
          <div className="containTwo">
            <div className="project-link">
              <a
                href="https://kishoreio.github.io/shortify/#/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="project-web">
                  Live on{" "}
                  <FontAwesomeIcon icon={faGlobe} className="project-icon" />
                </div>
              </a>
            </div>
            <div className="project-image">
              <img src={shortify} alt="" width="101px" height="101px" />
            </div>
            <div className="project-text">
              <div></div>
              <div className="project-tech">
                <FontAwesomeIcon icon={faReact} className="project-tech-icon" />
                <FontAwesomeIcon icon={faJs} className="project-tech-icon" />
                <FontAwesomeIcon icon={faNode} className="project-tech-icon" />
                <FontAwesomeIcon icon={faCss3} className="project-tech-icon" />
                <FontAwesomeIcon icon={faHtml5} className="project-tech-icon" />
              </div>
            </div>
          </div>
        </div>
        {/*second project */}
        <div className="git-container">
          <div className="containOne">
            <div className="project-title">Chennai Bank</div>
            <div className="project-content">
              A net banking application where users can transfer amount, change
              pin, view card details and also transaction summary.
            </div>
          </div>
          <div className="containTwo">
            <div className="project-link">
              <a
                href="https://kishoreio.github.io/chennai-bank/#/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="project-web">
                  Live on{" "}
                  <FontAwesomeIcon icon={faGlobe} className="project-icon" />
                </div>
              </a>
            </div>
            <div className="project-image">
              <img src={chennaiBank} alt="" width="99px" height="101px" />
            </div>
            <div className="project-text">
              <div></div>
              <div className="project-tech">
                <FontAwesomeIcon icon={faReact} className="project-tech-icon" />
                <FontAwesomeIcon icon={faJs} className="project-tech-icon" />
                <FontAwesomeIcon icon={faNode} className="project-tech-icon" />
                <FontAwesomeIcon icon={faCss3} className="project-tech-icon" />
                <FontAwesomeIcon icon={faHtml5} className="project-tech-icon" />
              </div>
            </div>
          </div>
        </div>
        {/*3*/}
        <div className="git-container">
          <div className="containOne">
            <div className="project-title">Library Management</div>
            <div className="project-content">
              A library Management application that allow users to add books to
              the card, remove from the cart and proceed to checkout.
            </div>
          </div>
          <div className="containTwo">
            <div className="project-link">
              <a
                href="https://kishoreio.github.io/library-app-react/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="project-web">
                  Live on{" "}
                  <FontAwesomeIcon icon={faGlobe} className="project-icon" />
                </div>
              </a>
            </div>
            <div className="project-image">
              <img src={libraryApp} alt="" width="99px" height="101px" />
            </div>
            <div className="project-text">
              <div></div>
              <div className="project-tech">
                <FontAwesomeIcon icon={faReact} className="project-tech-icon" />
                <FontAwesomeIcon icon={faJs} className="project-tech-icon" />
                <FontAwesomeIcon icon={faCss3} className="project-tech-icon" />
                <FontAwesomeIcon icon={faHtml5} className="project-tech-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-project">
        {/*4*/}
        <div className="git-container">
          <div className="containOne">
            <div className="project-title">Shorts News</div>
            <div className="project-content">
              Short News is an excerpt news website that contains various news
              sources in all one place.
            </div>
          </div>
          <div className="containTwo">
            <div className="project-link">
              <a
                href="https://kishoreio.github.io/short-news/#/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="project-web">
                  Live on{" "}
                  <FontAwesomeIcon icon={faGlobe} className="project-icon" />
                </div>
              </a>
            </div>
            <div className="project-image">
              <img src={shortNews} alt="" width="99px" height="101px" />
            </div>
            <div className="project-text">
              <div></div>
              <div className="project-tech">
                <FontAwesomeIcon icon={faReact} className="project-tech-icon" />
                <FontAwesomeIcon icon={faJs} className="project-tech-icon" />
                <FontAwesomeIcon icon={faCss3} className="project-tech-icon" />
                <FontAwesomeIcon icon={faHtml5} className="project-tech-icon" />
              </div>
            </div>
          </div>
        </div>
        {/*5*/}
        <div className="git-container">
          <div className="containOne">
            <div className="project-title">Chat App</div>
            <div className="project-content">
              A real-time chatting application were users can interact with
              other people connected on the same server.
            </div>
          </div>
          <div className="containTwo">
            <div className="project-link">
              <a
                href="https://kishorechatapp.herokuapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="project-web">
                  Live on{" "}
                  <FontAwesomeIcon icon={faGlobe} className="project-icon" />
                </div>
              </a>
            </div>
            <div className="project-image">
              <img src={chatApp} alt="" width="99px" height="101px" />
            </div>
            <div className="project-text">
              <div></div>
              <div className="project-tech">
                <FontAwesomeIcon icon={faNode} className="project-tech-icon" />
                <FontAwesomeIcon icon={faJs} className="project-tech-icon" />
              </div>
            </div>
          </div>
        </div>
        {/*6*/}
        <div className="git-container">
          <div className="containOne">
            <div className="project-title">Tea Cozy</div>
            <div className="project-content">
              A dummy website for tea cozy restaurant that displays menu and the
              location of the restaurant.
            </div>
          </div>
          <div className="containTwo">
            <div className="project-link">
              <a
                href="https://kishoreio.github.io/Tea-Cozy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="project-web">
                  Live on{" "}
                  <FontAwesomeIcon icon={faGlobe} className="project-icon" />
                </div>
              </a>
            </div>
            <div className="project-image">
              <img src={teaCozy} alt="" width="99px" height="101px" />
            </div>
            <div className="project-text">
              <div></div>
              <div className="project-tech">
                <FontAwesomeIcon icon={faCss3} className="project-tech-icon" />
                <FontAwesomeIcon icon={faHtml5} className="project-tech-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
