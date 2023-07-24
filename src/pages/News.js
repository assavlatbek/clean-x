import React from "react";
import img1 from "../assets/new-1.svg";
import img2 from "../assets/new-2.svg";

function News() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <h1 className="title">Articles & resources</h1>
          <div className="d-flex-col">
            <button className="btn btn-primary">Get a free quote</button>
            <button className="btn btn-white">Browse articles</button>
          </div>
        </div>
        <div className="row">
          <div className="left-content">
            <div className="card-img">
              <img src={img1} width="100%" alt="img" />
            </div>
            <div className="card-body">
              <h3>
                8 best vacuum cleaners to clean any mess for your home in 2022
              </h3>
              <p>
                Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                quis odio sit sit ac port titor sit males.
              </p>
              <div className="row">
                <b>Jan 28, 2022</b>
                <div className="pri-box"></div>
              </div>
            </div>
          </div>
          <div className="right-content">
            <div className="card-img">
              <img src={img2} width="100%" alt="img" />
            </div>
            <div className="card-body">
              <h3>
                How to properly disinfect your phone and other electronics
              </h3>
              <p>
                Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                quis odio sit sit ac port titor sit males.
              </p>
              <div className="row">
                <b>Feb 1, 2022</b>
                <div className="pri-box"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;
