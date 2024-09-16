import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-col">
        <div className="footer-sub-col">
          <div className="footer-link"></div>
          <div className="footer-link">
            <Link to="mailto:ahnafadib7546@gmail.com">&#x2192; Enquiries</Link>
          </div>
        </div>
        <div className="footer-sub-col">
          <div className="footer-link">
            <Link to="www.linkedin.com/in/ahnaf-adib369">
              &#x2192; Linkedin
            </Link>
          </div>
          <div className="footer-link">
            {/* <Link to="">&#x2192; Chat</Link> */}
          </div>
        </div>
      </div>

      <div className="footer-col">
        <div className="footer-link">
          <p>&copy; Ahnaf Adib 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
