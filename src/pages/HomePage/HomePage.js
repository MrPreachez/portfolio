import "./HomePage.scss";
import headshot from "../../assets/images/portfolio-copy.jpg";
import { useSpring, animated as a } from "@react-spring/web";

function HomePage() {
  const spring1 = useSpring({
    from: { opacity: 0, x: 200 },
    to: { opacity: 1, x: 0 },
    config: { duration: 700 },
  });
  const spring2 = useSpring({
    from: { opacity: 0 }, opacity: 1,
    config: { duration: 1000 }
  });  
  const spring3 = useSpring({
    from: { opacity: 0, y: 200 },
    to: { opacity: 1, y: 0 },
    config: { duration: 700 },
  });

  return (
    <main className="homePage__body">
      <section className="head__body">
        <div className="head__title-position">
          <a.h1 style={spring1} className="head__title1">
            DAMON
          </a.h1>
          <a.h2 style={spring2} className="head__title2">CHOUINARD</a.h2>
        </div>
        <div className="head__description-position">
          <h3 className="head__description-title">Software Developer...</h3>
          <a.p style={spring3} className="head__description">
            Greetings! I've been many things in this life, but here on this page
            let me give you a sense of where I am as a software developer. I
            have skills in the following: html5, CSS3, Sass, Javascript, Dom,
            React, Node.js, Express, Knex, MySQL and RESTful API applications.{" "}
          </a.p>
        </div>
      </section>
      <section className="projects__body">
        <h2 className="projects__title">
          <span className="projects__feature" />
          Projects
          <span className="projects__feature" />
        </h2>
        <div className="projects__card--wrapper">
          <div className="projects__card-container ">
            <div className="projects__card1 projects__card"></div>
            <h3 className="projects__card1-title projects__card-title">
              Melder
            </h3>
            <p className="projects__card1-text">
              Qualitative survey analysis using OpenAi api. React, Node.js,
              Express, Knex, MySQL, RESTful api.
            </p>
          </div>
          <div className="projects__card-container ">
            <div className="projects__card2 projects__card"></div>
            <h3 className="projects__card2-title projects__card-title">
              BrainFlix
            </h3>
            <p className="projects__card2-text">
              Brainflix was my first React SPA. It uses React, Sass, Node.js,
              Express and RESTful api.{" "}
            </p>
          </div>
          <div className="projects__card-container">
            <div className="projects__card3 projects__card"></div>
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
          <p className="about__text">
            Born and raised in BC, I grew up just outside of Vancouver. I
            currently live, work and play in the Socan Valley, just outside of
            Nelson. I was brought here by a calling and opportunity to live
            rurally and become a farmer...
          </p>
          <div className="about__imgContainer">
            <img src={headshot} className="about__imgPhoto" alt="alt-text" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
