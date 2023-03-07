import "./HomePage.scss";
import headshot from "../../assets/images/portfolio-copy.jpg";

function HomePage() {
  return (
    <main className="homePage__body">
      <section className="head__body">
        <div className="head__title-position">
          <h1 className="head__title1">DAMON</h1>
          <h2 className="head__title2">CHOUINARD</h2>
        </div>
        <div className="head__description-position">
          <h3 className="head__description-title">Software Developer...</h3>
          <p className="head__description">
            Greetings! I've been many things in this life, but here on this page
            let me give you a sense of where I am as a software developer. I
            have skills in the following: html5, CSS3, Sass, Javascript, Dom,
            React, Node.js, Express, Knex, MySQL and RESTful API applications.{" "}
          </p>
        </div>
      </section>
      <section className="projects__body">
        <h2 className="projects__title">
          <span className="projects__feature" />
          Projects
          <span className="projects__feature" />
        </h2>
        <div className="projects__card--wrapper">
          <div className="projects__card1"></div>
        </div>
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
      <section className="details__body">
        <h3 className="details__email">contact</h3>
        <h3 className="details__resume">resume</h3>
      </section>
    </main>
  );
}

export default HomePage;
