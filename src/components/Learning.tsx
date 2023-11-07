import React from "react";
import LearningWeb from "../images/learning.jpg"
function Learning(){
  return(
    <div className="row learningContainer" id="Learning">
            <div className="col-sm-12 col-md-5 learningContainerLeft">
        <p>Want to be a software developer
<br/>Within  6 months <br/>Start your journery today</p>
<a type="button" className="btn btn-outline-primary bookBtn" href="https://calendly.com/fugohost/30min" target="_blank" rel="noreferrer">Book A Free Consultation</a>
      </div>
      <div className="d-none d-md-block col-md-7 learningContainerRight">
        <img src={LearningWeb} alt="web development"/>
      </div>
    </div>
    // </div>
  )
}

export default Learning;