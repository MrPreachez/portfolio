import "./ProjectBrainflix.scss";

import Brainflix from "../../assets/images/Brainflix.png";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

function ProjectBrainflix() {
  return (
    <>
      <main className="brainflix__main">
        <section className="brainflix__hero">
          <div className="brainflix__hero-container">
            <h1 className="brainflix__title">Project: Brainflix</h1>
            <div className="brainflix__hero--responsive">
              <img className="brainflix__heroImage" src={Brainflix} alt="Brainflix screenshot"/>
              <p className="brainflix__hero-aside">
                brainflix is a fullstack Netflix like clone that is built using
                React, Sass, Node.js, Express and Axios.
              </p>
            </div>
          </div>
        </section>
        <section className="brainflix__overview">
          <h4 className="brainflix__subtitle">Project Overview</h4>
          <p>
            Brainflix was a project I did early on while learning the basics of
            React, Node.js and Axios. I remember this project well as it
            introduced me to some 'BIG' new concepts like State, Props and
            Mapping over lists. This is where i completed my first application
            that used a front and backend, utilizing my first api call to
            retrieve a list of videos. The challenges that got me on this
            project were the placement of state in my component tree and also
            working out some of the logic around mapping the list of videos
            while excluding the currently displayed video.  
          </p>
          <VideoPlayer vidId={"xz72h5vzyEI"} />
        </section>
        <section className="brainflix__details"></section>
      </main>
    </>
  );
}

export default ProjectBrainflix;
