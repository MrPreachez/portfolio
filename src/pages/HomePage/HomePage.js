import "./HomePage.scss";

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
        <h2>Projects</h2>
      </section>
      <section className="about__body">
        <h2>About</h2>
      </section>
      <section className="details__body">
        <h3>contact</h3>
        <h3>resume</h3>
      </section>
    </main>
  );
}

export default HomePage;
