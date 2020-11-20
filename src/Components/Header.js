import React from "react";
import top from "../images/top.png";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <div class="container">
        <div class="row  d-flex justify-content-center align-items-center mt-5 mb-5">
          <div class="col-md-5 header-text ">
            <h1
              style={{
                marginRight: "210px",
                fontSize: "70px",
                color: "#070327",
              }}
              className="mb-3"
            >
              Florence <br /> agency{" "}
            </h1>
            <small class="mt-3 mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quo
              labore excepturi hic est consequuntur, numquam neque fuga cum quia
              consequatur sit, pariatur quaerat inventore repellat, tempora
              porro ipsum sed?
            </small>
            <a href="">
              <div style={{ marginRight: "300px" }} class="btn btn-curve mt-5">
                See Pricing
              </div>
            </a>
          </div>
          <div class="col-md-6 offset-md-1 header-image">
            <img style={{ height: "500px" }} src={top} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
