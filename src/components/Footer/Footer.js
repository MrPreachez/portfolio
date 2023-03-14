import { Link } from "react-router-dom";
import DownloadPdf from "../DownloadPdf/DownloadPdf";
import github from "../../assets/icons/icons8-github-logo-24.png";
import linkedIn from "../../assets/icons/icons8-linkedin-30.png";
import envelope from "../../assets/icons/envelope-solid.svg";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer__section">
      <div className="footer__container">
        <div className="footer__block1">
          <Link to="https://github.com/MrPreachez" className="footer__link">
            <div className="footer__icon-block">
              <img
                src={github}
                alt="github icon"
                className="footer__github-icon footer__icon"
              />
              <p>Github</p>
            </div>
          </Link>
          <Link to="https://www.linkedin.com/in/damon-chouinard/" className="footer__link">
            <div className="footer__icon-block">
              <img src={linkedIn} alt="linkedin icon" className="footer__icon" />
              <p>LinkedIn</p>
            </div>
          </Link>
          <Link className="footer__email--link footer__link" to="/contact">
            <div className="footer__icon-block">
              <img
                src={envelope}
                alt="envelope icon"
                className="footer__email-icon footer__icon"
              />
              <p>Email</p>
            </div>
          </Link>
        </div>
        <div className="footer__block2">
          <DownloadPdf />
          <p className="footer__copy">&#169;Damon Chouinard 2023</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
