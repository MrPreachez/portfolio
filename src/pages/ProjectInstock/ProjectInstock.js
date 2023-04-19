import "./ProjectInstock.scss";
import instockMain from "../../assets/images/InstockMain.png";
import instockAdd from "../../assets/images/InstockAdd.png";

function ProjectInstock() {
  return (
    <>
      <main className="instock__main">
        <section className="instock__hero">
          <div className="instock__hero-container">
            <h1 className="instock__title">Project: Instock</h1>
            <div className="instock__hero--responsive">
              <img
                className="instock__heroImage"
                src={instockMain}
                alt="instock screenshot"
              />
              <p className="instock__hero-aside">
                Instock is a fullstack warehouse and inventory database
                application. As a collaborative project, I've included this
                because it hightlights some colloborative toolsets and
                experience in which I've used Figma, Jira, and a deeper dive
                into Github.
              </p>
            </div>
          </div>
        </section>
        <section className="instock__overview">
          <h4 className="instock__subtitle">Project Overview</h4>
          <p>
            This particular project represented a significant milestone in my
            learning journey. Through practicing daily scrum standups,
            allocating tasks using Jira, submitting and approving pull-requests,
            and working off a Figma board design, I gained a deeper
            understanding of the development process likely found in a
            proffessional workplace. Despite encountering challenges related to
            YUP and Formik, I persevered and came away with was a huge
            appreciation for working with others on software applications. In
            particular, I gained valuable insights into problem-solving and
            benefited from the experience of working as part of a team to
            achieve our objectives. Having Agile principles and the Scrum method
            integrated into this process made the experience feel clear,
            iterative, and effective and is something I look forward to working
            with further in the future.
          </p>
          <div className="instock__imgBox">
            <img
              src={instockAdd}
              className="instock__addImage"
              alt="insock screenshot"
            />
          </div>
        </section>
        <section className="instock__details"></section>
      </main>
    </>
  );
}

export default ProjectInstock;
