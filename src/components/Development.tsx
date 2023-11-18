import React from "react";
import WebDevelopment from "../images/web-development.jpg";
import TechStack from "../images/react-node-nest-mysql.png";
function Development() {
  return (
    <div className="row developmentDiv">
      <div className="col-sm-12 col-md-5 developmentDivLeft">
        <h1>
          Custom Software Development
          <br />
          That Makes
          <br /> A Difference
        </h1>
        <p>
          Get a tailored solutions for your business to improve productivity and
          have a competitive advantage
        </p>
        <a
          type="button"
          className="btn btn-outline-primary bookBtn buttonSpecial"
          href="https://calendly.com/fugohost/30min"
          target="_blank"
          rel="noreferrer"
        >
          Book A Free Consultation
        </a>
      </div>
      <div className="d-none d-md-block col-md-7 developmentDivRight">
        <img src={WebDevelopment} alt="web development" />
      </div>
    </div>
  );
}

export default Development;
