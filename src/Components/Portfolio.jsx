import React from "react";
import image from "../images/design-desk.jpeg";
const imageAltText = "desktop with books and laptop";
const projectList = [
  {
    title: "Youtube clone",
    description: "A full stack app built using React , Node.js,Express.js , MongoDB",
    url: "https://youtube-frontend-eosin.vercel.app/",
  },
  {
    title: "Pizza website",
    description:
      "A pizza ordering website built using React , Redux to make a modern looking pizza website",
    url: "https://pizza-website-sooty.vercel.app/",
  },
  {
    title: "My Resume Site",
    description: "Built using React to showcase my skills and projects",
    url: "https://portfoliowebsite-lemon-three.vercel.app/",
  },
  {
    title: "The Bharat Times",
    description:
      "A minimalistic yet modern design to provide u with the latest news using a third party API",
    url: "https://the-indian-times.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
