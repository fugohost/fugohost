import React from "react";
import WebDevelopment from "../images/web-development.jpg";
import TechStack from "../images/react-node-nest-mysql.png";
function Development(){
  return(
    <div className="row developmentDiv">
      <div className="col-sm-12 col-md-5 developmentDivLeft">
        <p>Custom software development
        <br/>That <br/> Makes a difference</p>
        <a type="button" className="btn btn-outline-primary bookBtn" href="https://calendly.com/fugohost/30min" target="_blank" rel="noreferrer">Book A Free Consultation</a>
        <img src={TechStack} alt="react-node-mysql-nest"/>
      </div>
      <div className="d-none d-md-block col-md-7 developmentDivRight">
      <img src={WebDevelopment} alt="web development"/>
        </div>
    </div>
  )
}

export default Development;