import React from "react";
import Products from "./Products";
// import img from "./../assets/veronica-porro-PooNq8s8mbo-unsplash.jpg"

export default function Home() {
  return (
    <div className="hero">
      <div class="card bg-dark text-dark">
        <img
          src="./assets/veronica-porro-PooNq8s8mbo-unsplash.jpg"
          class="card-img"
          alt=""
          height="550px"
        />
        <div class="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 class="card-title display-3 fw-bolder mb-0">
              New Secion Arrival
            </h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
      <Products/>
    </div>
  );
}
