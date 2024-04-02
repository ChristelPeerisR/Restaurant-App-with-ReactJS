import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedin,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div class="footer">
      <h2 className="blogh2">Stay Connected</h2>
      <p className="blogp">
        <a href="https://facebook.com" className="bloga">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://facebook.com" className="bloga">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://facebook.com" className="bloga">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://facebook.com" className="bloga">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="https://facebook.com" className="bloga">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://facebook.com" className="bloga">
          <FontAwesomeIcon icon={faTiktok} />
        </a>
      </p>
      <div className="blog">
        ABOUT US | CONTACT US | FAQS | CAREERS | FOUNDATION | FRANCHISE INFO |
        NEWSROOM | BLOG GIFT CARDS | TACO SHOP |  MOBILE APP OFFERS |
         DEALS POPULAR LINKS
      </div>
      <p className="blogp">©2024 Sunset Tacolicious IP Holder, LLC. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
