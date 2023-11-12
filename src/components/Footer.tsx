import React from "react";
import LearningWeb from "../images/learning.jpg";
function Footer() {
  return (
    <div className="row learningContainer" id="Learning">
      <div className="col-sm-12 col-md-5 learningContainerLeft">
        <p>
          Explore Your Web Development Journey <br />
          With FugoHost
        </p>
        <a
          type="button"
          className="btn btn-outline-primary bookBtn"
          href="https://calendly.com/fugohost/30min"
          target="_blank"
          rel="noreferrer"
        >
          Book A Free Consultation
        </a>
      </div>
      <div className="d-none d-md-block col-md-7 learningContainerRight">
        <img src={LearningWeb} alt="web development" />
      </div>
    </div>
    // </div>
  );
}

export default Footer;
