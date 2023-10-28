import React from "react";
import logo from "./logo.png"
function Header(){
  return(
    <header>
      <div className="headerDiv">
      <div className="headerLeft">
        <img  src={logo} alt="FugoHost" className="logoStyle"/>
      </div>
      <div className="headerRight">
        <a type="button" className="btn btn-outline-primary" href='https://calendly.com/fugohost/30min' target={'_blank'}>Free Consultation</a>
      </div>
      </div>
    </header>
  )
}

export default Header;