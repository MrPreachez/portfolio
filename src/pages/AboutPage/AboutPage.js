import "./AboutPage.scss";
import Profile from "../../assets/images/profilePhoto.jpg";

function AboutPage() {
  return (
    <div className="aboutPage__body">
      <h3 className="aboutPage__title">A Bit About Me</h3>
      <div className="aboutPage__layout">
        <div className="aboutPage__text-contain">
          <p className="aboutPage__paragraph1">
            Born and raised in BC, I grew up just outside of Vancouver. I
            currently live, work and play in the Socan Valley, just outside of
            Nelson BC. I'm a father and a partner with strong roots in food and
            agriculture, community development and event coordination. At an
            early point in my life I was drawn to meditation and buddhism, and
            have carried those teachings and experiences through to today. I'm
            enthralled by human creativity, the process and experience of
            learning new things, reacreating in and exploring the natural world,
            and most things tech. I enjoy using the intersections of my
            interests as fuel for learning. I'm a self motivated doer that loves
            collaboration, regenerative agriculture and cultivating collective
            experiences. Generally if I'm not in my office, you can find me
            skiing, biking, hiking, lost on the farm or volunteering my time as
            a board member for local community organizations'{" "}
          </p>
        </div>

        <img src={Profile} className="aboutPage__profileImg" alt="profile" />
      </div>
    </div>
  );
}

export default AboutPage;
