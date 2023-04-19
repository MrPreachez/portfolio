import "./HomePage.scss";
import headshot from "../../assets/images/portfolio-copy.jpg";
import { useSpring, useInView, animated as a } from "@react-spring/web";
import { Link } from "react-router-dom";
import React from "react";


const HomePage = React.forwardRef(({}, ref2) => {
  
  const spring1 = useSpring({
    from: { opacity: 0, x: 200 },
    to: { opacity: 1, x: 0 },
    config: { mass: 4, friction: 100, tension: 200 },
  });
  const spring2 = useSpring({
    from: { opacity: 0, x: -300 },
    to: { opacity: 1, x: 0 },
    config: { mass: 4, friction: 100, tension: 200 },
  });
  const spring3 = useSpring({
    from: { opacity: 0, y: 200 },
    to: { opacity: 1, y: 0 },
    config: { mass: 5, friction: 100, tension: 200 },
  });
  const [ref, springs4] = useInView(() => ({
    from: {
      opacity: 0,
      x: -200,
    },
    to: {
      opacity: 1,
      x: 0,
      config: {
        mass: 5,
        friction: 100,
        tension: 300,
      },
    },
  }));
  const [ref1, springs5] = useInView(() => ({
    from: {
      opacity: 0,
      y: 200,
    },
    to: {
      opacity: 1,
      y: 0,
      config: {
        mass: 1,
        friction: 50,
        tension: 300,
      },
    },
  }));

  return (
    <main className="homePage__body">
      <section className="head__body">
        <div className="head__title-position">
          <a.h1 style={spring1} className="head__title1">
            DAMON
          </a.h1>
          <a.h2 style={spring2} className="head__title2">
            CHOUINARD
          </a.h2>
        </div>
        <div className="head__description-position">
          <h3 className="head__description-title">Software Developer...</h3>
          <a.p style={spring3} className="head__description">
            Greetings! Welcome to my portfolio site, here you can get a sense of
            who I am, my skills and what I'm working on. As a software developer,
            you'll see I have skills in the following: html, CSS, Sass, Javascript, DOM,
            React, Node.js, Express, Knex, Mongoose, MySQL, MongoDB, Redux Toolkit
            RESTful API applications and more, actually, I'm learning more all the time.{" "}
          </a.p>
        </div>
      </section>
      <section className="projects__body" ref={ref2} id="projects">
        <h2 className="projects__title">
          <span className="projects__feature" />
          Projects
          <span className="projects__feature" />
        </h2>
        <div className="projects__card--wrapper">
          {/* SOCIOPEDIA CARD */}
          <div className="projects__card-container ">
            <Link to={"/project/socio"}>
              <div className="projects__card4 projects__card"></div>
            </Link>
            <h3 className="projects__card1-title projects__card-title">
              SocioPedia
            </h3>
            <p className="projects__card1-text">
              Social Media React app with authorization, Redux Toolkit, Material
              UI, Node.js, MongoDB.
            </p>
          </div>
          {/* MELDER CARD */}
          <div className="projects__card-container ">
            <Link to={"/project/melder"}>
              <div className="projects__card1 projects__card"></div>
            </Link>
            <h3 className="projects__card1-title projects__card-title">
              Melder
            </h3>
            <p className="projects__card1-text">
              Qualitative survey analysis using OpenAi api. React, Node.js,
              Express, Knex, MySQL, RESTful api.
            </p>
          </div>
          {/* BRAINFLIX CARD */}
          <div className="projects__card-container ">
            <Link to={"/project/brainflix"}>
              <div className="projects__card2 projects__card"></div>
            </Link>

            <h3 className="projects__card2-title projects__card-title">
              BrainFlix
            </h3>
            <p className="projects__card2-text">
              Brainflix was my first React SPA. It uses React, Sass, Node.js,
              Express and RESTful api.{" "}
            </p>
          </div>
          {/* INSTOCK CARD */}
          <div className="projects__card-container">
            <Link to={"/project/instock"}>
              <div className="projects__card3 projects__card"></div>
            </Link>

            <h3 className="projects__card3-title projects__card-title">
              Instock
            </h3>
            <p className="projects__card3-text">
              Group collaborative project... worked with Jira, Figma, React,
              Node.js, Express, Knex, MySQL
            </p>
          </div>
        </div>
        <div></div>
      </section>
      <section className="about__body">
        <h2 className="about__title">
          <span className="about__feature" />
          About
          <span className="about__feature" />
        </h2>
        <div className="about__container--wrapper">
          <a.p ref={ref} style={springs4} className="about__text">
            Born and raised in BC, I grew up just outside of Vancouver. I
            currently live, work and play in the Socan Valley, just outside of
            Nelson. I was brought here by a calling and opportunity to live
            rurally and become a farmer...
          </a.p>
          <div className="about__imgContainer">
            <a.img
              ref={ref1}
              style={springs5}
              src={headshot}
              className="about__imgPhoto"
              alt="alt-text"
            />
          </div>
        </div>
      </section>
    </main>
  );
})

export default HomePage;
