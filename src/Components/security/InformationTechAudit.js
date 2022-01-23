import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import sal from "sal.js";
import business from "../../images/business.png";

const InformationTechAudit = () => {
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
                <h1 class="title h2">Information Technology Audit</h1>
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
                <h3 class="title">Information Technology Audit</h3>
              </div>
              <p>
                We examine and evaluate an organization’s Information Technology
                (IT) infrastructure, applications, data use and management,
                policies, procedures and operational processes recognized
                standards and established policies. We evaluate if the controls
                to protect information technology assets ensure integrity and
                are aligned with organizational goals and objectives.
                Information Security.
              </p>
              <p>
                MData Solution’s IT & Security consulting services assist
                businesses and organizations in enabling a robust, over-arching
                security architecture. We help organizations assess and
                strengthen their IT security posture. Organizations across
                Nigeria rely on our team of hand-picked cyber security
                consultants to think like hackers and act like professionals,
                exposing and repairing vulnerabilities before they can be
                exploited by malicious actors.
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

export default InformationTechAudit;
