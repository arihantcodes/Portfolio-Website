import React from "react";
import "./about.css";
import Me from "../../assets/hero 1.svg";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>
   
      <div className="about__data grid">
        <div className="about__info">
          <p className="about__description">
            Hi, I'm Arihant, a Full Stack Developer with one year of experience.
            I specialize in designing and implementing robust web applications,
            proficient in a range of front-end and back-end technologies,
            including Next Js,Node.js,Express Js,GraphQL,Docker,Apache Kafka and 
            MongoDB. I'm dedicated to delivering high-quality, scalable
            solutions that align seamlessly with client objectives. Actively
            engaged in continuous professional development to stay at the
            forefront of evolving industry standards.
          </p>
          <a href="https://twitter.com/Arihantdotcom" className="btn">
            Connect On X
          </a>
        </div>
        <div className="">
        <img src={Me} alt="" className="" />
      </div>
      
      
      </div>
      
    </section>
  );
};

export default About;
