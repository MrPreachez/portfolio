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
          <Link to="https://github.com/MrPreachez">
            <img
              src={github}
              alt="github icon"
              className="footer__github-icon"
            />
          </Link>
          <Link to="https://www.linkedin.com/in/damon-chouinard/">
            <img src={linkedIn} alt="linkedin icon" />
          </Link>
          <Link className="footer__email--link" to="/contact">
            <img
              src={envelope}
              alt="envelope icon"
              className="footer__email-icon"
            />
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
