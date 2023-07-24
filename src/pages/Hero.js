import React, { Component } from "react";
import hero_img from "../assets/hero-img.svg";

export class Hero extends Component {
  render() {
    return (
      <section id="hero" className="hero">
        <div className="container">
          <div className="row">
            <div className="left-content">
              <h1 className="sec-title">Quality cleaning for your home</h1>
              <p className="sec-descr">
                Condimentum mauris sit cursus amet id non neque pharetra nulla
                ornare sed facilisis senectus dapibus nibh ultrices eget
                suscipit aliquet et nulla magna lacus penatibus.
              </p>
              <div className="d-flex-col">
                <button className="btn btn-primary">Get a free quote</button>
                <button className="btn btn-white">(414) 567 - 2109</button>
              </div>
            </div>
            <div className="right-content">
              <img width="100%" height="500px" src={hero_img} alt="" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
