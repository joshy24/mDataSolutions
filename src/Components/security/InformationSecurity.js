import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import sal from "sal.js";
import business from "../../images/business.png";

const InformationSecurity = () => {
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
                <h1 className="title h2">Information Security</h1>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="banner-thumbnail"
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="400"
              >
                <img className="paralax-image" src={business} alt="Illustration" />
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
                <h3 className="title">Information Security</h3>
              </div>
              <p>
                While paper-based businesses still exist, the ever-increasing
                reliance on information systems has caused information security
                to become a key consideration in cybersecurity risk management
                and raise a need for dedicated IT security specialists.
              </p>
              <p>
                MData Solution’s IT and security consulting services assist and
                guide businesses in enabling a robust, over-arching security
                infrastructure for their digital assets.
              </p>
              <p>
                We have a structured risk management process that helps
                organizations to review information, related assets and the
                threats, vulnerability and impact of unauthorized access to the
                organization’s digital assets. Our solutions help organizations
                to make decisions about how to address or treat risks i.e avoid,
                mitigate, share or access. We also help to monitor activities
                and make adjustments to address new issues, changes and
                improvements.
              </p>
            </div>
            <div
             className="header-btn">
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

export default InformationSecurity;
