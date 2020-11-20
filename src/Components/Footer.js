import React from "react";
import logo from "../images/logo.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import linkedin from "../images/linkedin.png";
import dribble from "../images/dribble.png";

const Footer = () => {
  return (
    <footer className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <img
            style={{
              maxWidth: "400px",
              height: "100px",
              marginRight: "200px",
              justifyContent: "start",
            }}
            src={logo}
            alt=""
          />{" "}
          <div className="mt-4">
            <ul class="list-unstyled d-flex">
              <li className="mr-3">
                <img style={{ cursor: "pointer" }} src={facebook} alt="" />
              </li>
              <li className="mr-3">
                <img style={{ cursor: "pointer" }} src={twitter} alt="" />
              </li>
              <li className="mr-3">
                <img style={{ cursor: "pointer" }} src={linkedin} alt="" />
              </li>
              <li className="mr-3">
                <img style={{ cursor: "pointer" }} src={dribble} alt="" />
              </li>
            </ul>
          </div>
        </div>

        <div class="col-md-2 items">
          <ul class="list-unstyled">
            <li class="mb-2">Features</li>
            <li class="mb-2">Enterprise</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div class="col-md-2 items">
          <ul class="list-unstyled">
            <li class="mb-2">Blog</li>
            <li class="mb-2">Help Center</li>
            <li class="mb-2">Contact Us</li>
            <li>Status</li>
          </ul>
        </div>
        <div class="col-md-2 items">
          <ul class="list-unstyled">
            <li class="mb-2">About Us</li>
            <li class="mb-2">Terms of Service</li>
            <li class="mb-2">Security</li>
            <li>Login</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
