import React from "react";
import logo from "../images/logo.png";
const NavBar = () => {
  return (
    <div class="container mt-3">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <a class="navbar-brand logo" href="#">
          <img
            style={{
              maxWidth: "300px",
              height: "80px",
              marginRight: "200px",
              justifyContent: "start",
            }}
            src={logo}
            alt=""
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active mr-3">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item mr-3">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item mr-3">
              <a class="nav-link" href="#">
                Service
              </a>
            </li>
            <li class="nav-item mr-3">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item mr-3">
              <a class="nav-link" href="#">
                Our Team
              </a>
            </li>
            <li class="nav-item">
              <a href="">
                <div class=" btn btn-curve">Contact Us</div>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
