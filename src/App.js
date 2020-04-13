import React from "react";
import MainContent from "./Components/MainContent/MainContent";
import AboutMe from "./Components/AboutUs/AboutMe";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <MainContent />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default App;
