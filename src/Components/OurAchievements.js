import React from "react";
import Happy from "../images/happy.png";
import Project from "../images/Project 2.png";
import Crazy from "../images/Crazy.png";
import Running from "../images/Running.png";

const OurAchievements = () => {
  return (
    <section className="container">
      <div className="row">
        <div className="col-md-4">
          <h2 style={{ color: "#070327" }}>Our Achievements</h2>
          <ul class="list-unstyled">
            <li>
              <small>
                It is a long established fact that a reader will be distracted
                by
              </small>
            </li>
            <li>
              <small>
                the readable content of a page when looking at its layout.
              </small>
            </li>
            <li>
              <small>
                {" "}
                The point of using Lorem Ipsum is that it has a more-or-less
              </small>
            </li>
            <li>
              <small> normal distribution of letter.</small>
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          <div>
            <button
              class="btn btn-success"
              style={{
                backgroundColor: "#17CDC7",
                borderTopRightRadius: "50px",
                borderBottomLeftRadius: "50px",
                color: "white",
                width: "200px",
                height: "110px",
              }}
            >
              <img style={{ width: "30%" }} src={Happy} alt="" />
              <p>700+</p>
              <p>Happy Clients</p>
            </button>
            <button
              class="btn btn-success"
              style={{
                backgroundColor: "white",
                borderTopLeftRadius: "50px",
                borderBottomRightRadius: "50px",
                color: "gray",
                width: "200px",
                height: "110px",
              }}
            >
              <img src={Project} alt="" />
              <p>140+</p>
              <p>Projects Completed</p>
            </button>
          </div>
          <div>
            <button
              class="btn btn-success"
              style={{
                backgroundColor: "white",
                borderTopLeftRadius: "50px",
                borderBottomRightRadius: "50px",
                color: "gray",
                width: "200px",
                height: "110px",
              }}
            >
              <img src={Crazy} alt="" />
              <p>25+</p>
              <p>Crazy Minds</p>
            </button>
            <button
              class="btn btn-success"
              style={{
                backgroundColor: "white",
                borderTopRightRadius: "50px",
                borderBottomLeftRadius: "50px",
                color: "gray",
                width: "200px",
                height: "110px",
              }}
            >
              <img src={Running} alt="" />
              <p>75+</p>
              <p>Running Projects</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAchievements;
