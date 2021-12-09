import React, {useEffect} from 'react';
import sal from "sal.js";

function BigData(props) {
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
                <h1 class="title h2">BIG DATA</h1>
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
                            HADOOP® DEVELOPMENT FOR BIG DATA SOLUTIONS
                          </button>
                        </h6>
                        <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#accordion">
                          <div className="accordion-body">
                            <p>The availability of large data sets presents new opportunities and challenges to organizations of all sizes. This course provides...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="accordion-item">
                        <h6 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                  data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                            INTRODUCTION TO DATA SCIENCE FOR BIG DATA ANALYTICS
                          </button>
                        </h6>
                        <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#accordion">
                          <div className="accordion-body">
                            <p>Big Data Analytics allow organizations to build competitive strategies around data-driven insights and derive value from vast amounts of untapped data.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="accordion-item">
                        <h6 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                  data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                            EXTRACTING BUSINESS VALUE FROM BIG DATA
                          </button>
                        </h6>
                        <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#accordion">
                          <div className="accordion-body">
                            <p>Big Data Analytics allow organizations to build competitive strategies around data-driven insights and derive value from vast amounts of untapped data.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="accordion-item">
                        <h6 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                  data-bs-target="#faq4" aria-expanded="false" aria-controls="faq4">
                            INTRODUCTION TO CLOUD COMPUTING
                          </button>
                        </h6>
                        <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#accordion">
                          <div className="accordion-body">
                            <p>This introduction to cloud computing technologies course provides the training andknowledge required to effectively evaluate and assess...</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="accordion-item">
                        <h6 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                  data-bs-target="#faq5" aria-expanded="false" aria-controls="faq5">
                            ESSENTIALS OF CLOUD COMPUTING
                          </button>
                        </h6>
                        <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#accordion">
                          <div className="accordion-body">
                            <p>As organizations transition to cloud technologies, cloud computing security issues are a vital concern. In order to protect sensitive data and maintain regulatory...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="accordion-item">
                        <h6 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                  data-bs-target="#faq6" aria-expanded="false" aria-controls="faq6">
                            AMAZON WEB SERVICES™ (AWS) & CLOUD COMPUTING
                          </button>
                        </h6>
                        <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#accordion">
                          <div className="accordion-body">
                            <p>Learn about Amazon Web Services (AWS) cloud computing solutions and receive training to advantage of the comprehensive range of IT cloud products in order to access...</p>
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

export default BigData;