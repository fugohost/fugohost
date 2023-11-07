import React from "react";
import logo from '../images/logo.png';
function Header(){
  return(
    <header>
      <div className="row headerDiv">
      <div className="col-sm-12 col-md-2 headerLeft">
        <img  src={logo} alt="FugoHost" className="logoStyle"/>
      </div>
      <div className="d-none d-md-block col-md-10 headerRight text-end">
        <a type="button" className="link-secondary" href="#Learning">Learning</a>
        <a type="button" className="link-secondary" href="#Hosting">Hosting</a>
        <a type="button" className="link-secondary" href="#Consulting">IT Consulting</a>
        <a type="button" className="btn btn-outline-primary bookBtn" href='https://calendly.com/fugohost/30min' target={'_blank'} rel="noreferrer">Free Consultation</a>
      </div>
      </div>
    </header>
  )
}

export default Header;