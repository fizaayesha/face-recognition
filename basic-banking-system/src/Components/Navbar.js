import React from "react";
import { NavLink } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import StreetviewIcon from "@material-ui/icons/Streetview";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          World Bank
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
          <ul className="navbar-nav me-left mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/instructions">
                Instructions
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/contact">
                Contact
              </a>
            </li>
          </ul>
          {props.auth ? (
            <>
              <NavLink
                to="/auth"
                className="btn btn-outline-primary ms-auto px-2 rounded-pill fw-bold"
                id="btn1"
                type="submit"
              >
                <ArrowForwardIcon className="me-1" />
                <span className="text">Login</span>
              </NavLink>
              <NavLink
                to="/logout"
                className="btn btn-outline-primary ms-2 px-3 rounded-pill fw-bold"
                id="btn2"
                type="submit"
              >
                <PowerSettingsNewIcon className="me-2" />
                Logout
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/profile"
                className="btn btn-outline-light ms-2 px-3 rounded-pill fw-bold"
                id="btn2"
                type="submit"
              >
                <StreetviewIcon className="me-2" />
                Profile
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
