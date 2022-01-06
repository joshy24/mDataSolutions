import React, {useEffect} from 'react';
import sal from "sal.js";

function Leadership(props) {
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
                <h1 class="title h2">LEADERSHIP & SOFT SKILLS</h1>
              </div>
            </div>
            {/* <div class="col-lg-6">
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
            </div> */}
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
                            HOW TO COMMUNICATE WITH DIPLOMACY, TACT AND CREDIBILITY
                          </button>
                        </h6>
                        <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#accordion">
                          <div className="accordion-body">
                            <p>Get your point across with a positive professional image. This communication skills seminar is for anyone who wants to hear others clearly and respond appropriately when feeling...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="accordion-item">
                        <h6 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                  data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                            DEVELOPING EFFECTIVE BUSINESS CONVERSATION SKILLS
                          </button>
                        </h6>
                        <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#accordion">
                          <div className="accordion-body">
                            <p>Enhancing and expanding your conversation skills can help you create buy-in for your ideas, make better informed decisions and obtain committed action from others.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="accordion-item">
                        <h6 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                  data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                            LEADERSHIP SKILLS FOR SUPERVISORS/THE PROFESSIONAL SUPERVISORS
                          </button>
                        </h6>
                        <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#accordion">
                          <div className="accordion-body">
                            <p>With a host of new challenges and responsibilities to tackle, new supervisors need training that helps them adjust to their new role. Learning how to supervise your...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="accordion-item">
                        <h6 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                  data-bs-target="#faq4" aria-expanded="false" aria-controls="faq4">
                            PROBLEM SOLVING AND DECISION MAKING
                          </button>
                        </h6>
                        <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#accordion">
                          <div className="accordion-body">
                            <p>Despite all the natural decision making that goes on and the problem solving we do, some people are very uncomfortable with having to make decisions. You may know someone...</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="accordion-item">
                        <h6 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                  data-bs-target="#faq5" aria-expanded="false" aria-controls="faq5">
                            BUILDING BETTER TEAMS
                          </button>
                        </h6>
                        <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#accordion">
                          <div className="accordion-body">
                            <p>Teams are an important building block of successful organizations. Whether the focus is on service, quality, cost, value, speed, efficiency, performance, or other similar...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="accordion-item">
                        <h6 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                  data-bs-target="#faq6" aria-expanded="false" aria-controls="faq6">
                            CONFLICT RESOLUTIONS
                          </button>
                        </h6>
                        <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#accordion">
                          <div className="accordion-body">
                            <p>Many people see conflict as a negative experience. In fact, conflict is a necessary part of our personal growth and development. Think of when you were trying...</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="accordion-item">
                        <h6 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                  data-bs-target="#faq7" aria-expanded="false" aria-controls="faq7">
                            DELEGATION - THE ART OF DELEGATING EFFECTIVELY
                          </button>
                        </h6>
                        <div id="faq7" className="accordion-collapse collapse" data-bs-parent="#accordion">
                          <div className="accordion-body">
                            <p>Effective delegation is one of the most valuable skills you can master. It reduces your workload and develops employee skills. Delegating prepares employees...</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="accordion-item">
                        <h6 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                  data-bs-target="#faq8" aria-expanded="false" aria-controls="faq8">
                            GIVING EFFECTIVE FEEDBACK
                          </button>
                        </h6>
                        <div id="faq8" className="accordion-collapse collapse" data-bs-parent="#accordion">
                          <div className="accordion-body">
                            <p>This course is designed to help workplace leaders learn how to provide feedback any time that the message is due. Whether feedback is formal...</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="accordion-item">
                        <h6 className="accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                  data-bs-target="#faq9" aria-expanded="false" aria-controls="faq9">
                            WORK PLACE VIOLENCE
                          </button>
                        </h6>
                        <div id="faq9" className="accordion-collapse collapse" data-bs-parent="#accordion">
                          <div className="accordion-body">
                            <p>Violence of any sort has many roots. Sometimes there are warning signs of workplace violence, but this is not always the case. It is up to us to learn whatever we can to prevent, identify, and mitigate any threats, and this comprehensive workshop includes everything a workplace leader needs to get started.</p>
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

export default Leadership;