import "./ProjectInstock.scss";
import instockMain from "../../assets/images/InstockMain.png";
import instockAdd from "../../assets/images/InstockAdd.png"

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
                SocioPedia is a fullstack app built with a React front-end, uses
                Redux Toolkit for state management and styled with Material UI
                components . It has a Node.js backend that uses an Express
                framework and a MongoDB Database with Mongoose.js as its ODM.
              </p>
            </div>
          </div>
        </section>
        <section className="instock__overview">
          <h4 className="instock__subtitle">Project Overview</h4>
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
          <img src={instockAdd} alt="insock screenshot"/>
        </section>
        <section className="instock__details"></section>
      </main>
    </>
  );
}

export default ProjectInstock;
