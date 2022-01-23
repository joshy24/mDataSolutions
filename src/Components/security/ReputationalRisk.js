import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import sal from "sal.js";
import business from "../../images/business.png";

const ReputationalRisk = () => {
  useEffect(() => {
    sal();
  }, []);
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
                {/* <span class="subtitle">Software, Technology</span> */}
                <h3 class="title">REPUTATIONAL RISK MANAGEMENT</h3>
              </div>
              <p>
                Your corporate reputation is critical to the profitability of
                your business. A damaged reputation will impact sales, your
                ability to attract and retain top talent. Reputation is one of
                the most important assets for companies today. Companies with a
                strong reputation perform better, attract qualified employees
                and increase their overall success. But as valuable as
                reputation is for a company, it is also fragile: in the digital
                age, one’s own missteps, inappropriate communication or targeted
                attacks from outside can destroy a company’s reputation in a
                very short time. MData’s reputation risk management services
                helps to prevent these threats and minimize potential damage to
                a company’s reputation.
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

export default ReputationalRisk;
