import { Link } from "react-router-dom";
import DownloadPdf from "../DownloadPdf/DownloadPdf";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer__section">
        <div>
            
        </div>
      <div className="footer__block1">
        <Link className="footer__email--link" to="/contact">
          <h3 className="footer__email">Contact</h3>
        </Link>
        <DownloadPdf />
      </div>
    </div>
  );
}

export default Footer;
