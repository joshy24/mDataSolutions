import React from 'react';

function Analysis(props) {
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
                <h1 class="title h2">BUSINESS OFFERINGS, TRAINING & DEVELOPMENT</h1>
              </div>
            </div>
            <div class="col-lg-6">
              <div
                class="banner-thumbnail"
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="400"
              >
                <img
                  class="paralax-image"
                  src="assets/media/project/project-2.png"
                  alt="Illustration"
                />
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
            <div class="col-lg-11 offset-xl-1">
              <div className="faq-accordion">
                <div className="accordion" id="accordion">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="accordion-item">
                        <h6 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                  data-bs-target="#faq1" aria-expanded="false" aria-controls="faq1">
                            PRINCIPLES OF BUSINESS ANALYSIS
                          </button>
                        </h6>
                        <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#accordion">
                          <div className="accordion-body">
                            <p>This course is designed for business and IT professionals who want to make informed decisions about the needs...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="accordion-item">
                        <h6 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                  data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                            CRAFTING HIGH-QUALITY REQUIREMENTS
                          </button>
                        </h6>
                        <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#accordion">
                          <div className="accordion-body">
                            <p>Whether outsourced or in-house, every new development project needs exceptional requirements management.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="accordion-item">
                        <h6 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                  data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                            BUILDING BUSINESS CASES
                          </button>
                        </h6>
                        <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#accordion">
                          <div className="accordion-body">
                            <p>Proposed solutions are required to explain the value they bring to the organization. Traditional solution definition techniques focus more...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="accordion-item">
                        <h6 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                  data-bs-target="#faq4" aria-expanded="false" aria-controls="faq4">
                            CAUSE MAPPING: EFFECTIVE ROOT CAUSE
                            ANALYSIS FACILITATION & DOCUMENTATION
                          </button>
                        </h6>
                        <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#accordion">
                          <div className="accordion-body">
                            <p>The Cause Mapping method is a simple, objective, evidence-based approach for breaking any issue into its cause-and-effect relationships...</p>
                          </div>
                        </div>
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
}

export default Analysis;