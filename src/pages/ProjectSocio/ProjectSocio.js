import "./ProjectSocio.scss";
import SocioPedia from "../../assets/images/Sociopedia.png";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import { Link } from "react-router-dom";

function ProjectSocio() {
  return (
    <>
      <main className="socio__main">
        <section className="socio__hero">
          <div className="socio__hero-container">
            <h1 className="socio__title">Project: SocioPedia</h1>
            <div className="socio__hero--responsive">
              <img
                className="socio__heroImage"
                src={SocioPedia}
                alt="Sociopedia screenshot"
              />
              <p className="socio__hero-aside">
                SocioPedia is a fullstack app built with a React front-end, uses Redux Toolkit for state management and
                styled with Material UI components . It has a Node.js backend
                that uses an Express framework and a MongoDB Database with Mongoose.js as its ODM.
              </p>
              </div>
              <div className="socio__gitLink-layout">
                 <Link className="socio__gitLink1" to="https://github.com/MrPreachez/social_app-client">Github: Sociopedia/Frontend</Link>
              <Link className="socio__gitLink2" to="https://github.com/MrPreachez/social-app-server">Github: Sociopedia/Backend</Link>
            
              </div>
             
          </div>
        </section>
        <section className="socio__overview">
          <h4 className="socio__subtitle">Project Overview</h4>
          <p>
            The primary objective of Sociopedia was to build upon my React and
            Node.js skills, while also integrating some new frameworks such as
            Redux Toolkit, MongoDB, and Material UI for component styling. I
            find that building projects through tutorials is an effective way to
            learn, as it allows me to immediately apply new skills in real-world
            applications, providing valuable context and deeper understanding.
            <br />
            One of the biggest challenges I faced during the project was
            integrating the Redux Toolkit lifecycle into the application. The
            use of a "Store" that is updated through "actions", modified with
            "reducers", and called via API with a dispatch of its action
            initially seemed like a lot to handle. However, as I made my way
            through the project, I began to see how this approach could scale
            nicely for larger applications. That said, I can also see how this
            would be an unnecessary approach for many projects.
            <br /> Another new experience for me was working with MongoDB, a
            non-SQL type database. Since Sociopedia wasn't an overly complex
            project, and we were using Mongoose.js as the ODM, I had few
            challenges or reflections on using it. If anything, I found its
            interface and usability to be even easier than with MySQL databases.
            <br />
            Finally, I was particularly pleased with how Material UI performed
            in the project. While I still have much to learn, it definitely
            simplified many aspects of the project, streamlining the styling
            directly into the jsx files and removing much boilerblate ahead of
            time.
            <br /> Overall, Sociopedia was rewarding project that was a great
            intro into these new tools and has helped me develop a confidence in
            these toolsets that i can build upon further.
          </p>
          <VideoPlayer vidId={"ir6AFm59Y9o"} />
        </section>
        <section className="socio__details"></section>
      </main>
    </>
  );
}

export default ProjectSocio;
