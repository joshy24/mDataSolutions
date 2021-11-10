import React, {useEffect} from "react";
import sal from "sal.js";

const OurValues = () => {
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
                <h1 class="title h2">Our Values</h1>
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
            <div class="col-lg-8 offset-xl-1">
              <div className="faq-accordion">
                <div className="accordion" id="accordion">
                  <div className="accordion-item">
                    <h6 className="accordion-header">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse"
                              data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
                        CLIENT FOCUS
                      </button>
                    </h6>
                    <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#accordion">
                      <div className="accordion-body">
                        <p>Our clients are our partners, and their interests and needs are our utmost priority. We are intensely focused on providing them with the best solutions for their needs.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h6 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                              data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                        COMMITMENT & ACCOUNTABILITY
                      </button>
                    </h6>
                    <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#accordion">
                      <div className="accordion-body">
                        <p>Our clients can trust that we are committed to and accountable for delivering their requirements with passion and diligence – excellent quality, on time, and on budget.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h6 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                              data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                        INTEGRITY & TRANSPARENCY
                      </button>
                    </h6>
                    <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#accordion">
                      <div className="accordion-body">
                        <p>We always seek to communicate honestly and humbly and to do what is fair.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h6 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                              data-bs-target="#faq4" aria-expanded="false" aria-controls="faq4">
                        INNOVATION & CHANGE
                      </button>
                    </h6>
                    <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#accordion">
                      <div className="accordion-body">
                        <p>We are a team of project managers, trainers, researchers, analysts and innovators in the way we do business with our clients. We embrace and drive constructive change in our business and for our stakeholders.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h6 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                              data-bs-target="#faq5" aria-expanded="false" aria-controls="faq5">
                        PEOPLE & TEAMWORK
                      </button>
                    </h6>
                    <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#accordion">
                      <div className="accordion-body">
                        <p>We want our people and teams to work positively, learn and grow, deliver on commitments, and have fun in the process.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h6 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                              data-bs-target="#faq6" aria-expanded="false" aria-controls="faq6">
                        EXCELLENCE
                      </button>
                    </h6>
                    <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#accordion">
                      <div className="accordion-body">
                        <p>We discover and define, we measure and analyze, we create and optimize, we monitor and control – that is how we achieve the pinnacles of excellence.</p>
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
export default OurValues;
