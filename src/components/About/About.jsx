import React from "react";
import "./About.css";
import profile_img from "../../assets/profileimg.jpg";
import theme_pattern from "../../assets/theme_pattern.svg";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Passionate Software Engineering graduate with a strong foundation
              in MERN Stack, React Native, and WordPress development. Skilled in
              building dynamic web apps using React, Node.js, Express, and
              MongoDB, and developing cross-platform mobile apps with React
              Native. Experienced in creating and customizing responsive
              WordPress websites.
            </p>
            <div className="about-skills">
              <div className="about-skill">
                <p>HTML & CSS</p> <hr style={{ width: "80%" }} />
              </div>
              <div className="about-skill">
                <p>JavaScript</p> <hr style={{ width: "50%" }} />
              </div>
              <div className="about-skill">
                <p>React JS</p> <hr style={{ width: "70%" }} />
              </div>
              <div className="about-skill">
                <p>Next JS</p> <hr style={{ width: "50%" }} />
              </div>
              <div className="about-skill">
                <p>Node JS</p> <hr style={{ width: "60%" }} />
              </div>
              <div className="about-skill">
                <p>WordPress</p> <hr style={{ width: "90%" }} />
              </div>
              <div className="about-skill">
                <p>Shopify</p> <hr style={{ width: "90%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>4+</h1>
          <p>Years of experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>40+</h1>
          <p>Projects completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>Happy clients</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default About;
