import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import menu from "../images/menu.svg";
function Header() {
  const [isDisplay, setIsDisplay] = useState(false);
  const [ulClass, setUlClass] = useState("ulHideMenu");
  const displayHandler = () => {
    setIsDisplay(!isDisplay);
    setUlClass(isDisplay ? "ulShowMenu" : "ulHideMenu");
  };

  return (
    <header>
      <div className="row headerDiv">
        <div className="col-4 col-md-2 headerLeft">
          <a href="#/" onClick={displayHandler}>
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
                    className="customHeaderLink"
                    href="/#/web-development"
                    onClick={displayHandler}
                  >
                    Web Development
                  </a>
                </li>
                <li>
                  <a
                    type="button"
                    className="customHeaderLink"
                    href="/#/web-hosting"
                    onClick={displayHandler}
                  >
                    Web Hosting
                  </a>
                </li>
                <li>
                  <a
                    type="button"
                    className="customHeaderLink"
                    href="/#/services"
                    onClick={displayHandler}
                  >
                    Our Services
                  </a>
                </li>
                <li>
                  <a
                    type="button"
                    className="customHeaderLink"
                    href="/#/about"
                    onClick={displayHandler}
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    type="button"
                    className="btn btn-outline-primary bookBtn buttonSpecial"
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
