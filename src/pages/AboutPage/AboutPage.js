import "./AboutPage.scss";
import Profile from "../../assets/images/profilePhoto.jpg";

function AboutPage() {
  return (
    <div className="aboutPage__body">
      <h3 className="aboutPage__title">A Bit About Me</h3>
      <div className="aboutPage__layout">
        <div className="aboutPage__text-contain">
          <p className="aboutPage__paragraph1">
            I'm a father and a partner with strong roots in food, agriculture
            and community development. Creativity, learning new things,
            recreating in nature and most things tech are what excite me these
            days. I enjoy using the intersections of my interests as fuel for
            learning. I'm a self motivated doer that loves collaboration,
            regenerative agriculture and cultivating collective experiences.
            Generally if I'm not in my office, you can find me skiing, biking,
            hiking or working on the farm.'{" "}
          </p>
        </div>

        <img src={Profile} className="aboutPage__profileImg" alt="profile" />
      </div>
    </div>
  );
}

export default AboutPage;
