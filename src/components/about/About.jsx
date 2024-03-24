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
            I'm Arihant & I am Web & App Developer .
            <br />I use Next.js and React Native to craft website & apps that not only
            function smoothly but also bring a smile to users' faces. TypeScript
            and GraphQL are my trusted companions in this quest for excellence.
            In the backend, I employ Node.js, Express.js, and MongoDB to create
            the magic that happens behind the scenes. And of course, what's a
            great app without a touch of style? Tailwind CSS is my brush,
            painting the perfect aesthetic picture. But it doesn't stop there. I
            believe in keeping things organized and running like a well-oiled
            machine. That's where Docker and AWS come into play, ensuring that
            even when the crowds gather, everything runs like clockwork. To keep
            track of it all, I rely on Zustand for state management. Oh, and did
            I mention my secret weapon? C++. It's not just a language; it's a
            tool that helps me tackle the toughest of challenges with finesse.
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
