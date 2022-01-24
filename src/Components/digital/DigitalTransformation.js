import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import sal from "sal.js";
import digital from "../../images/digital.png";

const DigitalTransformation = () => {
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
                <h1 className="title h2">Digital Transformation</h1>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="banner-thumbnail"
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="400"
              >
                <img className="paralax-image" src={digital} alt="Illustration" />
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
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading heading-left mb-0">
                {/* <span className="subtitle">Software, Technology</span> */}
                <h3 className="title">Digital Transformation</h3>
              </div>
              <p>
                The world is changing and so are businesses all around the
                world, the market is becoming highly dynamic and this requires a
                proper adaptation to not only accommodate change but to perform,
                prosper and succeed. Change is inevitable, opportunities and
                threats in market today are identified by the exponential
                advancement of technology, and organizations must be able to
                constantly adapt at pace: seizing opportunities, neutralizing
                threats as they arise, and apply innovative approach to present
                their products and/or service in market.
              </p>
              <p>
                Mdata Solutions is specialized and expert in transforming
                business operations into digital transformation, it’s not about
                providing software solution but it is about providing full
                integrated platforms that contribute to the success of
                organizations.
              </p>
            </div>
            <div className="header-btn">
              <Link to="/contact" className="axil-btn btn-fill-white">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalTransformation;
