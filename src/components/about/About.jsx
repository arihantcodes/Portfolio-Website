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
            Greetings!
            <br />
            I'm Arihant & I'm a web and app developer with a passion for
            creating modern and efficient digital solutions. With expertise in
            technologies like React Native, Next.js, Tailwind CSS,TypeScript, and Docker, I strive
            to build responsive, user-friendly interfaces that deliver
            exceptional experiences. In my development journey, I leverage AWS
            services for scalable and reliable infrastructure, MongoDB for
            flexible and powerful database management, and Zustand for effective
            state management, ensuring smooth data flow and application
            performance.
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
