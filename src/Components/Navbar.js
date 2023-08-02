import React from "react";
import propTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
   
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid ">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
            {/* <li className="nav-item">
            <a className="navbar-brand my-2 font" href="#">
                {props.about}
              </a>
            </li> */}
           
          </ul>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} `}>
            <input
              className="form-check-input "
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label"
             
            >
              Enable Dark mode
            </label>
          </div>
        </div>
      </div>
    </nav>
 
  );
}
Navbar.propTypes = {
  title: propTypes.string,
  about: propTypes.string,
};

Navbar.defaultProps = {
  title: "Set tile here",
  about: "Set about here",
};
