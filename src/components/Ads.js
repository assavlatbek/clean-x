import React, { Component } from "react";
import img from "../assets/ads-img.svg";

export class Ads extends Component {
  render() {
    return (
      <section className="ads" id="ads">
        <div className="container">
          <div className="d-flex-col">
            <img width="100%" height="518px" src={img} alt="" />
            <div className="content">
              <p>Covid-19 sanitization</p>
              <h1>
                We follow guidelines to keep you safe from the COVID-19 virus
              </h1>
              <p>
                Lobortis mattis odio leo eget mauris met aliquet semper molestie
                sollicitudin congue massa mauris lectus.
              </p>
              <div className="d-flex-col">
                <button className="btn btn-primary">Get a free quote</button>
                <button className="btn btn-white">(414) 567 - 2109</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Ads;
