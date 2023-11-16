import React from "react";
import LearningWeb from "../images/learning.jpg";
function Footer() {
  return (
    <div className="footerDiv">
      <p>FugoHost INC. All rights reserved</p>
      <ul>
        <li>
          <a href="/#/web-development" className="link-secondary">
            Web Development
          </a>
        </li>
        <li>
          <a href="/#/web-hosting" className="link-secondary">
            Web Hosting
          </a>
        </li>
        <li>
          <a href="/#/services" className="link-secondary">
            Our Services
          </a>
        </li>
        <li>
          <a href="/#/about" className="link-secondary">
            About Us
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
