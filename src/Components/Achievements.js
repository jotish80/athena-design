import React from "react";
import Happy from "../images/happy.png";
import Project from "../images/Project 2.png";
import Crazy from "../images/Crazy.png";
import Running from "../images/Running.png";
import "./Achievements.css";

const Achievements = () => {
  return (
    <div class="archivstyle container">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="archive-text pb-5 col-sm-12 col-md-5">
            <h2>Our Achievements</h2>
            <p>
              it is a long established face that a reader will be distracted by
              the readable content of a page when looking at its layout The
              point of using
            </p>
          </div>
          <div class="col-md-6 d-flex offset-md-1">
            <div class="row">
              <div class="col-md-6 col-sm-12">
                <div class="item1 d-flex fixtedcolor">
                  <img src={Happy} alt="" />
                  <div class="text">
                    <h2>700+</h2>
                    <p>Happy Clients</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-sm-12">
                <div class="item2  d-flex align-items-center ">
                  <img src={Project} alt="" />
                  <div class="text">
                    <h2>140+</h2>
                    <p>Projects Completed</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-sm-12">
                <div class="item2  d-flex">
                  <img src={Crazy} alt="" />
                  <div class="text">
                    <h2>25+</h2>
                    <p>Crazy minds</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-sm-12">
                <div class="item1 d-flex">
                  <img src={Running} alt="" />
                  <div class="text">
                    <h2>75+</h2>
                    <p>Running Projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
