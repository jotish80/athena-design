import React from "react";
import project from "../images/project.png";
const RunningProject = () => {
  return (
    <section class="stay mb-3">
      <div class="aprech">
        <div class="container  pt-5 pb-5">
          <div class="row d-flex justify-content-center stylis align-items-center  mt-5 mb-5">
            <div class="col-md-6 header-image">
              <img style={{ height: "500px" }} src={project} alt="" />
            </div>
            <div class="col-md-5 offset-md-1 hader-text ">
              <h2 style={{ color: "#070327" }}>Stay Running & Project</h2>
              <p>
                it is a long established face that a reader will be distracted
                by the readable content of a page when looking at its layout The
                point of using lorem ipsum is that it has a more-or-less normal
                distribution of letter
              </p>
              <a href="">
                <div class="btn btn-curve">Contact us</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RunningProject;
