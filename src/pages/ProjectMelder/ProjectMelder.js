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
          <p>
            The objective with Melder was to create a fullstack web application
            that had real world relevance to my personal experiences. From my
            community development projects and event management work, I've had
            plenty of occassions where i've had to make sense of large amounts
            of group feedback. I decided to use this opportunity to create an
            application that utilized the OpenAi api to summarize qualitative
            inputs and offer useful feedback to the user group. <br /> The
            initial presentation of the project was created as a proof of
            concept. It has a React front end in which users can create a
            project that includes a focus question and the language model
            prompt. The project is created and then users are directed towards
            an input page. The input page gathers the feedback responses,
            refreshing each time until all the desired responses are gathered.
            The project is submitted and then users are directed towards a page
            that displays the generated response. In order to get this
            functionality I built the site with a react front end, making axios
            calls to a node.js server for data transfers. The server uses and
            Express.js framework with Knex.js for sql queries to the MySQL
            database. Each time a project is created, a new table is created in
            the database. The projects ID serves as the primary key for the
            relational database. Each users input is gathered in a table
            connected to the project key. At this point we have two tables. The
            next step in the data flow was to determine how to filter the
            necessary inputs, join them with the prompt structure and send them
            off to the API. As well, we needed to create a path for the
            genearated response to store the AI generated response. This was
            definitely the most challenging and rewarding aspect of the project.
            In mapping out all the steps, breaking it down into pieces, and
            working through step by step, I eventually got the initial
            functionality working, though needed to revisit to fine tune again.
            With the basic functionality coming together, the next steps
            involved some learning curves in working with databases and api's.
            Before this project i was familiar with making an API call to an
            endpoint and destructuring the data, but to display the data i
            wanted on the results page i needed to re-examine my approach and
            further my understanding. At this point I started to realize the
            variety of ways data could be called within this application and had
            to examine the efficiency of my api call and my understanding of
            querying the database. The reason why this might have been the most
            rewarding experience of this project was the opportunity to explore
            a problem from various angles, see the result and continue working
            through until a more efficient solution was found.
          </p>
          <VideoPlayer vidId={"xz72h5vzyEI"} />
        </section>
        <section className="melder__details"></section>
      </main>
    </>
  );
}

export default ProjectMelder;
