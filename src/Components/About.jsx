import React from "react";
import image from "../images/motion-background.jpg";
const imageAltText = "purple and blue abstract background";
const description =
  "I'm a MERN stack developer passionate about building full-stack web apps. I specialize in dynamic, responsive user experiences using MongoDB, Express.js, React, and Node.js, and enjoy solving problems while continuously learning.";
const skillsList = ["MERN stack", "React", "Redux", "MongoDB", "Express.js", "Node.js"];
const detailOrQuote =
  "I'm passionate about building innovative solutions using the MERN stack to drive development forward. By leveraging my skills in full-stack development, I constantly seek creative ways to optimize applications and make technology more accessible and user-friendly for everyone.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
