import React from "react";
import "./Hero.css";
import resume from "../../assets/adnancv.pdf";
import profile_img from "../../assets/profileimg.jpg";
const Hero = () => {
  return (
    <div id="hero" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Adnan Saeed,</span> Full Stack Developer based in Pakistan.
      </h1>
      <p>
        {" "}
        Passionate Software Engineering graduate with a strong foundation in
        MERN Stack, React Native, and WordPress development.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <a href={resume} download={resume} className="hero-resume">
          My resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
