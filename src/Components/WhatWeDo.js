import React from "react";
import Group1 from "../images/Group1.png";
import Group2 from "../images/Group2.png";
import Group3 from "../images/Group3.png";
import Group4 from "../images/Group4.png";
import "./WhatWeDo.css";

const WhatWeDo = () => {
  return (
    <section class="container what-bg ">
      <div class="text-center">
        <h1 style={{ color: "#070327" }} class="font-style">
          What we do
        </h1>
        <small class="text-muted">
          Our main focus is to make the User Experience very <br />
          simple and easy. Simplicity is our Strength.
        </small>
      </div>
      <div class="row mt-5 container">
        <div class="col-md-3 col-sm-12 custom-div p-4 pt-4">
          <div class="text-center">
            <div>
              <img height="80px" width="80px" src={Group1} alt="" />
            </div>
            <div class="mt-3">
              <h5 style={{ color: "#34285C" }}>Experience Design</h5>
              <small class="text-muted">
                The point of using Lorem <br /> Ipsum is that it has a more-or{" "}
                <br />
                less normal.
              </small>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-12 custom-div-one custom-div p-3 pt-4">
          <div class="text-center">
            <div>
              <img height="80px" width="80px" src={Group2} alt="" />
            </div>
            <div class="mt-3">
              <h5 style={{ color: "#34285C" }}>Interface Design</h5>
              <small class="text-muted">
                The point of using Lorem <br /> Ipsum is that it has a more-or{" "}
                <br />
                less normal.
              </small>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-12 custom-div p-3 pt-4">
          <div class="text-center">
            <div>
              <img height="80px" width="80px" src={Group3} alt="" />
            </div>
            <div class="mt-3">
              <h5 style={{ color: "#34285C" }}>Prototyping</h5>
              <small class="text-muted">
                The point of using Lorem <br />
                Ipsum is that it has a more-or <br />
                less normal.
              </small>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-12  custom-div p-3 pt-4">
          <div class="text-center">
            <div>
              <img height="80px" width="80px" src={Group4} alt="" />
            </div>
            <div class="mt-3">
              <h5 style={{ color: "#34285C" }}>Illustration</h5>
              <small class="text-muted">
                The point of using Lorem <br />
                Ipsum is that it has a more-or <br />
                less normal.
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
