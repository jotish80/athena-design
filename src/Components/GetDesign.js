import React from "react";
import "./GetDesign.css";

const GetDesign = () => {
  return (
    <section class="mt-5 mb-5">
      <div class="container d-flex justify-content-center align-items-center">
        <div class="">
          <div class="text-center">
            <h2 style={{ color: "#070327" }}>
              Get your design right, right now
            </h2>
            <p class="text-secondary font-weight-secondary">
              Be the first know our latest offers and updates!
            </p>
          </div>
          <div class="mt-3 d-flex">
            <input
              style={{ height: "50px" }}
              class="form-control input-search text-secondary mt-4"
              type="text"
              name=""
              id=""
              placeholder="Enter your email address"
            />
            <div class="">
              <button
                style={{ marginLeft: "12px", width: "130px" }}
                class="btn search"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetDesign;
