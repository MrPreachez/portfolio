import "./ProjectMelder.scss";
import melder from "../../assets/images/melderCover.png";

function ProjectMelder() {
  return (
    <>
      <main className="melder__main">
        <section className="melder__hero">
          <div className="melder__hero-container">
            <h1 className="melder__title">Project: Melder</h1>
            <div>
              <img className="melder__heroImage" src={melder} />
              <h3 className="">
                Melder is a fullstack qualitative survey analysis tool. It's
                inspired by my experiences with community engagement, and an
                interest in AI. It's built with React, Node.js, Express, MySQL
                and the davinci-003 OpenAi API.{" "}
              </h3>
            </div>
          </div>
        </section>
        <section className="melder__overview">
          <h4>Project Overview</h4>
          <p>hello</p>
        </section>
        <section className="melder__details"></section>
      </main>
    </>
  );
}

export default ProjectMelder;
