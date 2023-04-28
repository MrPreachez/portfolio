import "./ProjectMelder.scss";
import melder from "../../assets/images/melderCover.png";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import { Link } from "react-router-dom";

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
                interest in AI. It's built with React frontend and styled in
                Sass. It's backend is built in Node.js with an Express
                framework, uses a MySQL database with Knex as it ORM. This
                current example uses OpenAi's davinci-003 model API.
              </p>
            </div>
            <div className="melder__gitLink-layout">
              <Link
                className="melder__gitLink1"
                to="https://github.com/MrPreachez/capstone-melder"
              >
                Github: Melder/Frontend
              </Link>
              <Link
                className="melder__gitLink2"
                to="https://github.com/MrPreachez/capstone-melder-api"
              >
                Github: Melder/Backend
              </Link>
            </div>
          </div>
        </section>
        <section className="melder__overview">
          <h4 className="melder__subtitle">Project Overview</h4>
          <p className="melder__paragraph">
            <span className="melder__subtitles">
              Project Name and Overview:{" "}
            </span>{" "}
            Melder - Fullstack Web Application for summarizing qualitative
            inputs using the OpenAI API.
            <br />
            <span className="melder__subtitles">Problem Statement:</span> Melder
            was created to explore the feasability of processing large sets of
            qualitative feedback in engagement scenarios related community
            development projects and event management work I had done in the
            past.
            <br />
            <span className="melder__subtitles">Project Goals:</span> The goal
            of the project was to create a proof of concept functional fullstack
            web application that could summarize qualitative inputs and offer
            useful feedback to user groups. <br />
            <span className="melder__subtitles">Technical Description:</span>
            The project is built on a React SPA front-end that makes axios calls
            to a Node.js server for data transfers. The server uses the
            Express.js framework with Knex.js for SQL queries to the MySQL
            database. Each time a user creates a new project or question, a new
            table is created in the database. The projects ID serves as the
            primary key for the relational database when respondents answers are
            stored in a seperate table. When the project creator submits the
            project, the relevant data is filtered and stored in JSON format,
            then loaded into the API call to OpenAI's text-davinci-003 api. The
            response is awaited, then stored in the response table, again
            attached by the primary key. The front end then displays and calls
            this data as needed.
            <br />
            <span className="melder__subtitles">User Interface:</span> The
            initial presentation of the project is created as a proof of concept
            with a React front-end in which users can create a project that
            includes a focus question and the language model prompt. The project
            is created and then users are directed towards an input page. The
            input page gathers the feedback responses, refreshing each time
            until all the desired responses are gathered. The project is
            submitted and then users are directed towards a page that displays
            the generated response. On the home page, you can interact with past
            inputs and responses.
            <br />
            <span className="melder__subtitles">Features:</span> The project
            allows users to create a project with a focus question and a
            language model prompt. Users can then input their feedback
            responses, and the application utilizes the OpenAI API to summarize
            the qualitative inputs and offer useful feedback to the user group.
            <br />
            <span className="melder__subtitles">Challenges: </span>The most
            challenging aspect of the project was figuring out how to query and
            filter the necessary inputs, join them with the prompt structure,
            and send them to the OpenAI API. As one of my first projects working
            with a database, I had to learn a lot about querying specific data
            from different locations within the app and storing incoming data.
            However, my lightbulb moment on the project came when I learned the
            power and efficiency of making a 'Join' query. After numerous
            attempts of making multiple Axios calls for the results page and
            crashing the site, I eventually realized the benefits of a proper
            query call in this instance.
            <br />
            <span className="melder__subtitles">Results and Impact:</span> The
            project resulted in a functional fullstack web application that can
            summarize qualitative inputs and offer useful feedback to user
            groups. This application demonstrates nicely the use case for
            community development projects and event management work where large
            amounts of group feedback need to be analyzed and summarized.
            <br />
            <span className="melder__subtitles">Conclusion:</span> Melder is a
            functional and useful fullstack web application that showcases many
            of my skills in working with React, Node.js, Express.js, Knex.js,
            MySQL, and the OpenAI API. Designed to streamline group feedback
            processes, Melder uses the OpenAI API to summarize qualitative
            feedback, allowing users to make sense of large amounts of data and
            generate useful feedback for their projects. As a showcase project,
            Melder demonstrates my ability to solve complex problems and
            iteratively refine and improve on solutions. Working on Melder
            taught me valuable lessons about working with databases and APIs,
            and showed me the importance of breaking down complex problems into
            smaller pieces and iterating on solutions.
            <br />
            <span className="melder__subtitles">Next Steps:</span>In the future,
            I plan to expand the Melder project by adding new features or
            functionality, such as authentication and authorization. This would
            enable users to edit or delete their projects and feedback
            responses, with the option of regenerating a response. I also
            recognize the need for improving the efficiency of the data flow and
            API calls. Finally, I intend to set up testing for this application
            to ensure its reliability and stability.
          </p>
          <VideoPlayer vidId={"Wqyxq7iJUMo"} />
        </section>
        <section className="melder__details"></section>
      </main>
    </>
  );
}

export default ProjectMelder;
