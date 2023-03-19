import "./ProjectMelder.scss";
import melder from "../../assets/images/melderCover.png";

function ProjectMelder() {
  return (
    <>
      <main className="melder__main">
        <section className="melder__hero">
          <div className="melder__hero-container">
            <h1 className="melder__title">Project: Melder</h1>
            <div className="melder__hero--responsive">
              <img className="melder__heroImage" src={melder} />
              <p className="melder__hero-aside">
                Melder is a fullstack qualitative survey analysis tool. It's
                inspired by my experiences with community engagement, and an
                interest in AI. It's built with React, Node.js, Express, MySQL
                and the davinci-003 OpenAi API.
              </p>
            </div>
          </div>
        </section>
        <section className="melder__overview">
          <h4>Project Overview</h4>
          <p>
            The objective with Melder was to create a fullstack web application
            that had real world relevance to my personal experiences. From my
            community development projects and event management work, I've had
            plenty of occassions where i've had to make sense of group
            sentiment. I decided to use this opportunity to create an
            application that utilized the OpenAi api to summarize qualitative
            inputs and offer useful feedback to the user group.{" "}
            T
          </p>
        </section>
        <section className="melder__details"></section>
      </main>
    </>
  );
}

export default ProjectMelder;
