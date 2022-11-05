import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch mx-3">
              <button
                type="button"
                className="btn btn-secondary mx-1" id="blue"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Enable Dark Blue Mode" 
                onClick={props.modeChangeBlue}
              >
                Blue
              </button>
              <button
                type="button"
                className="btn btn-secondary mx-1" id="green"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Enable Dark Green Mode" onClick={props.modeChangeGreen}
              >
                Green
              </button>
              <button
                type="button"
                className="btn btn-secondary mx-1" id="grey"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Enable Dark Grey Mode" onClick={props.modeChangeGrey}
              >
                Grey
              </button>
              <button
                type="button"
                className="btn btn-secondary mx-1" 
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Enable light Mode" onClick={props.modeChangeLight}
              >
                Lightmode
              </button>

             
              
            </div>
            
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = { title: PropTypes.string.isRequired };

Navbar.defaultProps = { title: "DkgBlog" };
