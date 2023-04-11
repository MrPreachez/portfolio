import "./ProjectSocio.scss";
import SocioPedia from "../../assets/images/Sociopedia.png";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

function ProjectSocio() {
  return (
    <>
      <main className="socio__main">
        <section className="socio__hero">
          <div className="socio__hero-container">
            <h1 className="socio__title">Project: SocioPedia</h1>
            <div className="socio__hero--responsive">
              <img className="socio__heroImage" src={SocioPedia} />
              <p className="socio__hero-aside">
                socio is a fullstack qualitative survey analysis tool. It's
                inspired by my experiences with community engagement, and an
                interest in AI. It's built with React, Node.js, Express, MySQL
                and the davinci-003 OpenAi API.
              </p>
            </div>
          </div>
        </section>
        <section className="socio__overview">
          <h4>Project Overview</h4>
          <p>
            The objective with socio was to create a fullstack web application
            that had real world relevance to my personal experiences. From my
            community development projects and event management work, I've had
            plenty of occassions where i've had to make sense of group feedback.
            I decided to use this opportunity to create an application that
            utilized the OpenAi api to summarize qualitative inputs and offer
            useful feedback to the user group. socio was a first for many
            things. My first solo fullstack application, my first project where
            I had to get aquainted with Knex and MySQL, and the first time
            working with the OpenAi API's. The initial presentation of the
            project was created as a proof of concept. it involved a React front
            end in which users can create a project that included a focus
            question and the language model prompt. The project is created and
            then users are directed towards an input page. The input page
            gathers the feedback responses, refreshing each time until all the
            desired responses are gathered. The project is submitted and then
            users are directed towards a page that displays the generated
            response. In order to get this functionality I built the site with a
            react front end, making axios calls to a node.js server for data
            transfers. The server uses and Express.js framework with Knex.js for
            sql queries to the MySQL database. Each time a project is created, a
            new table is created in the database. The projects serve as the
            primary key for the relational aspect of the database. Each users
            input is gathered in a table connected to the project key. At this
            point we have two tables. The next step in the data flow was to
            determine how to filter the necessary inputs, join them with the
            prompt structure and send them off to the API. As well, we needed to
            create a path for the genearated response to store the AI generated
            response. This was definitely the most challenging and rewarding
            aspect of the project. In mapping out all the steps, breaking it
            down into pieces, and working through step by step, I eventually got
            the initial functionality working, though needed to revisit to fine
            tune again. With the basic functionality coming together, the next
            steps involved some learning curves in working with databases and
            api's. Before this project i was familiar with making an API call to
            an endpoint and destructuring the data, but to display the data i
            wanted on the results page i needed to re-examine my approach.
          </p>
          <VideoPlayer vidId={"xz72h5vzyEI"} />
        </section>
        <section className="socio__details"></section>
      </main>
    </>
  );
}

export default ProjectSocio;
