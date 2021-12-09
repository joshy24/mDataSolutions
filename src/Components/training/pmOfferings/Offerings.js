import React, {useEffect} from 'react';
import sal from "sal.js";

function Offerings(props) {
  useEffect(() => {
    sal();
  }, []);
  return (
    <>
      <div class="breadcrumb-area breadcrumb-banner single-breadcrumb">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div
                class="section-heading heading-left"
                data-sal="slide-right"
                data-sal-duration="1000"
                data-sal-delay="300"
              >
                <h1 class="title h2">PROJECT MANAGEMENT OFFERINGS</h1>
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
                            INTRODUCTION TO PROJECT MANAGEMENT
                          </button>
                        </h6>
                        <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#accordion">
                          <div className="accordion-body">
                            <p>Introduction to Project Management gives you the foundation, techniques and tools to manage each stage of the project life cycle...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="accordion-item">
                        <h6 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                  data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                            EXECUTIVE PROJECT MANAGEMENT OVERVIEW
                          </button>
                        </h6>
                        <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#accordion">
                          <div className="accordion-body">
                            <p>To avoid delay, disruption and rework when managing large, complex projects, executive managers need strong leadership...</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="accordion-item">
                        <h6 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                  data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                            INFORMATION TECHNOLOGY (IT) PROJECT MANAGEMENT
                          </button>
                        </h6>
                        <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#accordion">
                          <div className="accordion-body">
                            <p>In this comprehensive introductory course, you’ll discover critical success factors and hidden risks inherent in IT projects</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="accordion-item">
                        <h6 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                  data-bs-target="#faq4" aria-expanded="false" aria-controls="faq4">
                            PROJECT QUALITY MANAGEMENT
                          </button>
                        </h6>
                        <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#accordion">
                          <div className="accordion-body">
                            <p>Improve your project processes to achieve higher quality products, services, or results. This intensive course focuses...</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="accordion-item">
                        <h6 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                  data-bs-target="#faq5" aria-expanded="false" aria-controls="faq5">
                            PROJECT MANAGEMENT FOR P.A. AND ADMINISTRATORS
                          </button>
                        </h6>
                        <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#accordion">
                          <div className="accordion-body">
                            <p>This course provides an insight for PA’s and other Senior Administrators into how to best manage the sort of projects...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="accordion-item">
                        <h6 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                  data-bs-target="#faq6" aria-expanded="false" aria-controls="faq6">
                            PROJECT MANAGEMENT FOR AUDITORS
                          </button>
                        </h6>
                        <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#accordion">
                          <div className="accordion-body">
                            <p>An audit is simply a project. Yet few auditors take advantage of techniques used by project managers to bring their projects...</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="accordion-item">
                        <h6 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                  data-bs-target="#faq7" aria-expanded="false" aria-controls="faq7">
                            BUILDING SUCCESSFUL INTERPERSONAL & TEAM COMMUNICATION
                          </button>
                        </h6>
                        <div id="faq7" className="accordion-collapse collapse" data-bs-parent="#accordion">
                          <div className="accordion-body">
                            <p>Individual and team success depends upon the ability of individuals to communicate with others and be understood.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="accordion-item">
                        <h6 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                  data-bs-target="#faq8" aria-expanded="false" aria-controls="faq8">
                            PROJECT PROCUREMENT MANAGEMENT
                          </button>
                        </h6>
                        <div id="faq8" className="accordion-collapse collapse" data-bs-parent="#accordion">
                          <div className="accordion-body">
                            <p>A strategic make-lease-buy decision can critically impact a project’s bottom line. Learn best practices to procure outside...</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="accordion-item">
                        <h6 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                  data-bs-target="#faq9" aria-expanded="false" aria-controls="faq9">
                            PRACTICAL PROJECT MANAGEMENT SIMULATION
                          </button>
                        </h6>
                        <div id="faq9" className="accordion-collapse collapse" data-bs-parent="#accordion">
                          <div className="accordion-body">
                            <p>MData Solutions has developed the Practical Project Management (PPM) course to help project managers apply project management...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="accordion-item">
                        <h6 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                  data-bs-target="#faq10" aria-expanded="false" aria-controls="faq10">
                            BUILDING A SUCCESSFUL PROJECT MANAGEMENT OFFICE (PMO)
                          </button>
                        </h6>
                        <div id="faq10" className="accordion-collapse collapse" data-bs-parent="#accordion">
                          <div className="accordion-body">
                            <p>A Project Management Office (PMO) is vital to ensure project consistency, efficiency and effectiveness across...</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="accordion-item">
                        <h6 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                  data-bs-target="#faq11" aria-expanded="false" aria-controls="faq11">
                            MANAGING STAKEHOLDERS EXPECTATIONS AND RELATIONSHIP
                          </button>
                        </h6>
                        <div id="faq11" className="accordion-collapse collapse" data-bs-parent="#accordion">
                          <div className="accordion-body">
                            <p>Recognizing stakeholders' expectations is a critical element in managing successful projects; especially in these days...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="accordion-item">
                        <h6 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                  data-bs-target="#faq12" aria-expanded="false" aria-controls="faq12">
                            MANAGING MULTIPLE AND COMPLEX PROJECTS
                          </button>
                        </h6>
                        <div id="faq12" className="accordion-collapse collapse" data-bs-parent="#accordion">
                          <div className="accordion-body">
                            <p>Managing multiple projects is one of today's most pressing business challenges. In this hands-on, project driven course...</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="accordion-item">
                        <h6 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                  data-bs-target="#faq13" aria-expanded="false" aria-controls="faq13">
                            ACHIEVING LEADERSHIP SUCCESS THROUGH PEOPLE
                          </button>
                        </h6>
                        <div id="faq13" className="accordion-collapse collapse" data-bs-parent="#accordion">
                          <div className="accordion-body">
                            <p>The most successful leaders are those with the best people skills, especially during the most difficult circumstances.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="accordion-item">
                        <h6 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                  data-bs-target="#faq14" aria-expanded="false" aria-controls="faq14">
                            CAP - CHANGE ACCELERATION PROCESS TRAINING
                          </button>
                        </h6>
                        <div id="faq14" className="accordion-collapse collapse" data-bs-parent="#accordion">
                          <div className="accordion-body">
                            <p>Do you successfully manage Change in your organization? Are you implementing a new enterprise application, new operation process,...</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="accordion-item">
                        <h6 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                  data-bs-target="#faq15" aria-expanded="false" aria-controls="faq15">
                            STRATEGIC SYSTEM AND BUSINESS PROCESS IMPROVEMENT
                          </button>
                        </h6>
                        <div id="faq15" className="accordion-collapse collapse" data-bs-parent="#accordion">
                          <div className="accordion-body">
                            <p>In this course, you'll learn to model business processes as they are currently enacted, assess the quality of those business processes...</p>
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

export default Offerings;