import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import sal from "sal.js";
import business from "../../images/business.png";

const Grc = () => {
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
                <h1 class="title h2">GOVERNANCE RISK COMPLIANCE (GRC)</h1>
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
                <h3 class="title">GOVERNANCE RISK COMPLIANCE (GRC)</h3>
              </div>
              <p>
                In today’s connected world Information Technology (IT) plays a
                major role within all organizations; be it a manufacturing
                company or a service organization or a Bank. Most organizations
                invest in IT and setup a function to manage the IT
                infrastructure and services; they call it the 'IT Department'!
              </p>
              <p>
                IThe IT Governance System that we have designed offers best of
                the global practices in IT Service Management, Information
                Security, IT Service Continuity, etc. Our IT Governance system
                has adopted processes offered by global frameworks and standards
                like CMMI, COBIT, ITIL, ISO 20000-1, ISO 270001 and ISO 22301.
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

export default Grc;
