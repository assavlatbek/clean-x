import React, { Component } from "react";
import col1 from "../assets/col1.svg";
import col2 from "../assets/col2.svg";
import col3 from "../assets/col3.svg";

export class Services extends Component {
  render() {
    return (
      <section className="services" id="services">
        <div className="container">
          <div className="row">
            <h1 className="title">Our Service</h1>
            <button className="btn btn-white">Explore services</button>
          </div>
          <div className="col-row">
            <div className="col border">
              <img width="220px" height="190px" src={col1} alt="" />
              <h3>House cleaning</h3>
              <p>
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est.
              </p>
            </div>
            <div className="col border">
              <img width="220px" height="190px" src={col2} alt="" />
              <h3>Office cleaning</h3>
              <p>
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est.
              </p>
            </div>
            <div className="col border">
              <img width="220px" height="190px" src={col3} alt="" />
              <h3>Industrial cleaning</h3>
              <p>
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
