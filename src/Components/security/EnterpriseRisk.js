import React from "react";
import { Link } from "react-router-dom";
import business from "../../images/business.png";


const EnterpriseRisk = () => {
  return (
    <>
    <div class="breadcrum-area breadcrumb-banner single-breadcrumb">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div
              class="section-heading heading-left"
              data-sal="slide-right"
              data-sal-duration="1000"
              data-sal-delay="300"
            >
              <h1 class="title h2">REPUTATIONAL RISK MANAGEMENT</h1>
            </div>
          </div>
          <div class="col-lg-6">
            <div
              class="banner-thumbnail"
              data-sal="slide-up"
              data-sal-duration="1000"
              data-sal-delay="400"
            >
              <img class="paralax-image" src={business} alt="Illustration" />
            </div>
          </div>
        </div>
      </div>
      <ul class="shape-group-8 list-unstyled">
        <li
          class="shape shape-1"
          data-sal="slide-right"
          data-sal-duration="500"
          data-sal-delay="100"
        >
          <img src="assets/media/others/bubble-9.png" alt="Bubble" />
        </li>
        <li
          class="shape shape-2"
          data-sal="slide-left"
          data-sal-duration="500"
          data-sal-delay="200"
        >
          <img src="assets/media/others/bubble-20.png" alt="Bubble" />
        </li>
        <li
          class="shape shape-3"
          data-sal="slide-up"
          data-sal-duration="500"
          data-sal-delay="300"
        >
          <img src="assets/media/others/line-4.png" alt="Line" />
        </li>
      </ul>
    </div>

      <section class="section-padding single-portfolio-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-heading heading-left mb-0">
                <h3 class="title">ENTERPRISE RISK MANAGEMENT</h3>
              </div>
              <p>
                Several factors are contributing to the demand for ERM, such as
                increased speed of change, growing market volatility and
                complexity, higher expectations from investors etc. Our
                enterprise risk management service delivers visibility and
                control of your organisation’s risks. It helps you make informed
                decisions on threats and opportunities while improving business
                resilience and performance. At MData, we employ a top-down
                strategy that aims to identify, assess, and prepare for
                potential losses, dangers, hazards, and other potentials for
                harm that may interfere with an organization's operations and
                objectives and/or lead to losses.
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

export default EnterpriseRisk;
