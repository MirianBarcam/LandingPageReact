import React from "react";
import ReactDOM from "react-dom";
import "./../../styles/navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <strong>Start Bootstrap</strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#MenuNavegacion"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="MenuNavegacion">
          <ul className="navbar-nav ms-3">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                <strong>Home</strong>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
