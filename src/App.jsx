import React from "react";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";
const siteProps = {
  name: "Adarsh Tiwari",
  title: "MERN stack developer",
  email: "at.wrath9616@gmail.com",
  gitHub: "https://github.com/Awarth",
  instagram: "https://www.instagram.com/___w.r.a.t.h___/",
  linkedIn: "www.linkedin.com/in/at-wrath9616",
  medium: "",
  twitter: "",
  youTube: "",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
