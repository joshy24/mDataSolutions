import React, { useEffect } from "react";
import sal from "sal.js";
import space from "../../images/space.jpg";
import mtn from "../../images/mtn.jpg";
import inspired from "../../images/inspired.jpg";
import modulo from "../../images/modulo.jpg";
import africa from "../../images/africa.jpg";
import addax from "../../images/addax.jpg";
import firs from "../../images/firs.jpg";
import petro from "../../images/petro.jpg";
import stock from "../../images/stock.jpg";

const Partners = () => {
  useEffect(() => {
    sal();
  }, []);
  return (
    <>
      <div className="breadcrum-area breadcrumb-banner single-breadcrumb">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="section-heading heading-left"
                data-sal="slide-right"
                data-sal-duration="1000"
                data-sal-delay="300"
              >
                <h1 className="title h2">OUR CLIENTELES</h1>
                <p>WE ARE PROUD TO BE TRUSTED BY THESE ORGANIZATIONS</p>
              </div>
            </div>
          </div>
        </div>
        <ul className="shape-group-8 list-unstyled">
          <li
            className="shape shape-1"
            data-sal="slide-right"
            data-sal-duration="500"
            data-sal-delay="100"
          >
            <img src="assets/media/others/bubble-9.png" alt="Bubble" />
          </li>
          <li
            className="shape shape-2"
            data-sal="slide-left"
            data-sal-duration="500"
            data-sal-delay="200"
          >
            <img src="assets/media/others/bubble-20.png" alt="Bubble" />
          </li>
          <li
            className="shape shape-3"
            data-sal="slide-up"
            data-sal-duration="500"
            data-sal-delay="300"
          >
            <img src="assets/media/others/line-4.png" alt="Line" />
          </li>
        </ul>
      </div>

      <section className="section-padding single-portfolio-area">
        <div className="container">
          {/* <div className="row"> */}
          <div className="col-lg-12">
            <p>
              We work hard to help our clients transform in meaningful and
              productive ways. And while our customers would say nice things <br />
              about us, too, we also think our client list itself speaks volumes
              to our dedication and commitment to the hard work of public<br/> sector
              reform.
            </p>
            <div className="row">
              <img
                className="paralax-image"
                src={mtn}
                alt="Illustration"
                style={{ height: 140, width: 300 }}
              />
              <img
                className="paralax-image"
                src={inspired}
                alt="Illustration"
                style={{ height: 140, width: 300 }}
              />
              <img
                className="paralax-image"
                src={modulo}
                alt="Illustration"
                style={{ height: 140, width: 300 }}
              />
            </div>

            <div className="row">
              <img
                className="paralax-image"
                src={africa}
                alt="Illustration"
                style={{ height: 140, width: 300 }}
              />
              <img
                className="paralax-image"
                src={addax}
                alt="Illustration"
                style={{ height: 140, width: 300 }}
              />
              <img
                className="paralax-image"
                src={firs}
                alt="Illustration"
                style={{ height: 140, width: 300 }}
              />
            </div>

            <div className="row">
              <img
                className="paralax-image"
                src={petro}
                alt="Illustration"
                style={{ height: 140, width: 300 }}
              />
              <img
                className="paralax-image"
                src={stock}
                alt="Illustration"
                style={{ height: 140, width: 300 }}
              />
              <img
                className="paralax-image"
                src={space}
                alt="Illustration"
                style={{ height: 140, width: 300 }}
              />
            </div>
          </div>
          {/* </div> */}
        </div>
      </section>
    </>
  );
};

export default Partners;
