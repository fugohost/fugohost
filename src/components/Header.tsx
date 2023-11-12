import React, { useState } from "react";
import logo from "../images/logo.png";
import menu from "../images/menu.svg";
console.log("en variables are:", process.env.REACT_APP_DB_NAME);
function Header() {
  const [isDisplay, setIsDisplay] = useState(true);
  const [ulClass, setUlClass] = useState("ulHideMenu");
  const displayHandler = () => {
    setIsDisplay(!isDisplay);
    setUlClass(isDisplay ? "ulShowMenu" : "ulHideMenu");
    console.log("I was here");
  };
  return (
    <header>
      <div className="row headerDiv">
        <div className="col-4 col-md-2 headerLeft">
          <a href="#/">
            <img src={logo} alt="FugoHost" className="logoStyle" />
          </a>
        </div>
        <div className="col-8 col-md-10 headerRight text-end">
          <img
            src={menu}
            alt="menu"
            className="menubar"
            onClick={displayHandler}
          />
          <nav>
            {
              <ul className={ulClass}>
                {/* <li>
                  <a type="button" className="link-secondary" href="#Learning">
                    Learning
                  </a>
                </li> */}
                <li>
                  <a
                    type="button"
                    className="link-secondary"
                    href="/#/web-development"
                  >
                    Development
                  </a>
                </li>
                <li>
                  <a
                    type="button"
                    className="link-secondary"
                    href="/#/web-hosting"
                  >
                    Hosting
                  </a>
                </li>
                <li>
                  <a
                    type="button"
                    className="link-secondary"
                    href="/#/services"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a type="button" className="link-secondary" href="/#/about">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    type="button"
                    className="btn btn-outline-primary bookBtn"
                    href="https://calendly.com/fugohost/30min"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            }
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
