import { Link } from "react-router-dom";
import Burger from "../Burger/Burger";
import DownloadPdf from "../DownloadPdf/DownloadPdf";
import "./Header.scss";

function Header() {
  return (
    <div className="nav__section">
      <div className="nav__limit">
        <Link to="/" className="nav__link nav__link--logo">
          {" "}
          <h2 className="nav__logo">DC</h2>
        </Link>
        <div className="nav__container">
          <div className="nav__links--wrapper">
            <Link to="/about" className="nav__link nav__link--tablet-only">
              <h4 className="nav__about">About</h4>
            </Link>
            <Link to="/contact" className="nav__link">
              <h4 className="nav__contact nav__link--tablet-only">Contact</h4>
            </Link>
            <Burger className="burger__import" />
            <DownloadPdf />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
