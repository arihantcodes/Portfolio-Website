import React from "react";
import "./about.css";

import IconCloud from "../magicui/icon-cloud";

const About = () => {
  const slugs = [
    "typescript",
    "javascript",

    "react",

    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",

    "docker",
    "git",

    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",

    "figma",
  ];
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__data grid">
        <div className="about__info">
          <p className="about__description">
            Greetings!
            <br />
            I'm Arihant & I'm a Fullstack developer with a passion for creating
            modern and efficient digital solutions. With expertise in
            technologies like React Js, Next.js, Tailwind CSS, TypeScript, and
            Docker, I strive to build responsive, user-friendly interfaces that
            deliver exceptional experiences. In my development journey, I
            leverage AWS services for scalable and reliable infrastructure,
            MongoDB & Postgresql for flexible and powerful database management,
            and Zustand for effective state management, ensuring smooth data
            flow and application performance.
          </p>
          <a
            href="/arihantjainresume.pdf"
            download="arihantjainresume.pdf"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
        <div className="">
          <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
