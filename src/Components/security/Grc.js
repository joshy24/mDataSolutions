import React, { useEffect } from "react";
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
          </div>
          <div class="row">
            <div class="col-lg-8 offset-xl-1">
              <div className="faq-accordion">
                <div className="accordion" id="accordion">
                  {/* <div className="accordion-item">
                    <h6 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq1"
                        aria-expanded="true"
                        aria-controls="faq1"
                      >
                        IT AUDIT & ADVISORY SERVICES
                      </button>
                    </h6>
                    <div
                      id="faq1"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        <p>
                          Information Technology (IT) is becoming increasingly
                          important to the business strategy, operations and
                          interna
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h6 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq2"
                        aria-expanded="false"
                        aria-controls="faq2"
                      >
                        BUSINESS PROCESS ANALYSIS
                      </button>
                    </h6>
                    <div
                      id="faq2"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        <p>
                          Most organizations are setup in an ad-hoc manner. The
                          initial business plan is established with a view to
                          cater to the..
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h6 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq3"
                        aria-expanded="false"
                        aria-controls="faq3"
                      >
                        GOVERNANCE RISK COMPLIANCE (GRC)
                      </button>
                    </h6>
                    <div
                      id="faq3"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        <p>
                          In today’s connected world Information Technology (IT)
                          plays a major role within all organizations;
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h6 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq4"
                        aria-expanded="false"
                        aria-controls="faq4"
                      >
                        INFORMATION SECURITY
                      </button>
                    </h6>
                    <div
                      id="faq4"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        <p>
                          MData Solution’s IT and security consulting services
                          assist and guide businesses in enabling a robust,
                          over-arching security
                        </p>
                      </div>
                    </div>
                  </div> */}
                  <div className="accordion-item">
                    <h6 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq5"
                        aria-expanded="false"
                        aria-controls="faq5"
                      >
                        ENTERPRISE RISK MANAGEMENT
                      </button>
                    </h6>
                    <div
                      id="faq5"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        <p>
                          Several factors are contributing to the demand for
                          ERM, such as increased speed of change, growing market
                          volatility and complexity, higher expectations from
                          investors etc. Our enterprise risk management service
                          delivers visibility and control of your organisation’s
                          risks. It helps you make informed decisions on threats
                          and opportunities while improving business resilience
                          and performance. At MData, we employ a top-down
                          strategy that aims to identify, assess, and prepare
                          for potential losses, dangers, hazards, and other
                          potentials for harm that may interfere with an
                          organization's operations and objectives and/or lead
                          to losses.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h6 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq6"
                        aria-expanded="false"
                        aria-controls="faq6"
                      >
                        REPUTATIONAL RISK MANAGEMENT
                      </button>
                    </h6>
                    <div
                      id="faq6"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        <p>
                          Your corporate reputation is critical to the
                          profitability of your business. A damaged reputation
                          will impact sales, your ability to attract and retain
                          top talent. Reputation is one of the most important
                          assets for companies today. Companies with a strong
                          reputation perform better, attract qualified employees
                          and increase their overall success. But as valuable as
                          reputation is for a company, it is also fragile: in
                          the digital age, one’s own missteps, inappropriate
                          communication or targeted attacks from outside can
                          destroy a company’s reputation in a very short time.
                          MData’s reputation risk management services helps to
                          prevent these threats and minimize potential damage to
                          a company’s reputation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Grc;
