import React, {useEffect} from 'react';
import sal from "sal.js";

function Certification(props) {
  useEffect(() => {
    sal();
  }, []);
  return (
    <>
      <div className="certHome">
        <div className="breadcrum-area breadcrumb-banner single-breadcrumb">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div
                  className="section-heading heading-left"
                  data-sal="slide-right"
                  data-sal-duration="1000"
                  data-sal-delay="300"
                >
                  <h1 className="title h2">CERTIFICATION OFFERINGS</h1>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="banner-thumbnail"
                  data-sal="slide-up"
                  data-sal-duration="1000"
                  data-sal-delay="400"
                >
                  <img
                    className="paralax-image"
                    src="assets/media/project/project-2.png"
                    alt="Illustration"
                  />
                </div>
              </div>
            </div>
          </div>
          <ul className="shape-group-8 list-unstyled">
            <li
              className="shape shape-1"
              data-sal="slide-right"
              data-sal-duration="500"
              data-sal-delay="100"
            >
              <img src="assets/media/others/bubble-9.png" alt="Bubble"/>
            </li>
            <li
              className="shape shape-2"
              data-sal="slide-left"
              data-sal-duration="500"
              data-sal-delay="200"
            >
              <img src="assets/media/others/bubble-20.png" alt="Bubble"/>
            </li>
            <li
              className="shape shape-3"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="300"
            >
              <img src="assets/media/others/line-4.png" alt="Line"/>
            </li>
          </ul>
        </div>

        <section className="section-padding single-portfolio-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-11 offset-xl-1">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="accordion-item">
                          <h6 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#faq1" aria-expanded="false" aria-controls="faq1">
                              THE PROJECT MANAGEMENT PROFESSIONAL (PMP)
                              CERTIFICATION PREP*
                            </button>
                          </h6>
                          <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#accordion">
                            <div className="accordion-body">
                              <p>This course is designed for those who want either to re-fresh their knowledge on the "A
                                Guide to the Project Management...</p>
                              <p className="mt-3">
                                <a href="#">Learn more</a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="accordion-item">
                          <h6 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                              PMI RISK MANAGEMENT PROFESSIONAL (PMI-RMP)
                              CERTIFICATION PREP*
                            </button>
                          </h6>
                          <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#accordion">
                            <div className="accordion-body">
                              <p>The goal is to ensure that project managers are equipped with the right knowledge in
                                risk management that will help them on the projects' strategic...</p>
                              <p className="mt-3">
                                <a href="#">Learn more</a>
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
                              PMI SCHEDULE PROFESSIONAL (PMI-SP)
                              CERTIFICATION PREP*
                            </button>
                          </h6>
                          <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#accordion">
                            <div className="accordion-body">
                              <p>This workshop serves as a Project Management Institute (PMI)® Scheduling Professional
                                (PMI-SP)® intensive exam...</p>
                              <p className="mt-3">
                                <a href="#">Learn more</a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="accordion-item">
                          <h6 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#faq4" aria-expanded="false" aria-controls="faq4">
                              PMI AGILE CERTIFIED PRACTITIONER (PMI-ACP)
                              CERTIFICATION PREP*
                            </button>
                          </h6>
                          <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#accordion">
                            <div className="accordion-body">
                              <p>This 3-day course is designed for those preparing to take PMI’s new Agile Certified
                                Practitioner (PMI-ACP) ® examination.</p>
                              <p className="mt-3">
                                <a href="#">Learn more</a>
                              </p>
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
      </div>

      <div className="certHome d-none">
        <div className="breadcrum-area breadcrumb-banner single-breadcrumb">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div
                  className="section-heading heading-left"
                  data-sal="slide-right"
                  data-sal-duration="1000"
                  data-sal-delay="300"
                >
                  <h1 className="title h2">CERTIFICATION OFFERINGS</h1>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="banner-thumbnail"
                  data-sal="slide-up"
                  data-sal-duration="1000"
                  data-sal-delay="400"
                >
                  <img
                    className="paralax-image"
                    src="assets/media/project/project-2.png"
                    alt="Illustration"
                  />
                </div>
              </div>
            </div>
          </div>
          <ul className="shape-group-8 list-unstyled">
            <li
              className="shape shape-1"
              data-sal="slide-right"
              data-sal-duration="500"
              data-sal-delay="100"
            >
              <img src="assets/media/others/bubble-9.png" alt="Bubble"/>
            </li>
            <li
              className="shape shape-2"
              data-sal="slide-left"
              data-sal-duration="500"
              data-sal-delay="200"
            >
              <img src="assets/media/others/bubble-20.png" alt="Bubble"/>
            </li>
            <li
              className="shape shape-3"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="300"
            >
              <img src="assets/media/others/line-4.png" alt="Line"/>
            </li>
          </ul>
        </div>

        <section className="section-padding single-portfolio-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-11 offset-xl-1">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="accordion-item">
                          <h6 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#faq1" aria-expanded="false" aria-controls="faq1">
                              THE PROJECT MANAGEMENT PROFESSIONAL (PMP)
                              CERTIFICATION PREP*
                            </button>
                          </h6>
                          <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#accordion">
                            <div className="accordion-body">
                              <p>This course is designed for those who want either to re-fresh their knowledge on the "A
                                Guide to the Project Management...</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="accordion-item">
                          <h6 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                              PMI RISK MANAGEMENT PROFESSIONAL (PMI-RMP)
                              CERTIFICATION PREP*
                            </button>
                          </h6>
                          <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#accordion">
                            <div className="accordion-body">
                              <p>The goal is to ensure that project managers are equipped with the right knowledge in
                                risk management that will help them on the projects' strategic...</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="accordion-item">
                          <h6 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                              PMI SCHEDULE PROFESSIONAL (PMI-SP)
                              CERTIFICATION PREP*
                            </button>
                          </h6>
                          <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#accordion">
                            <div className="accordion-body">
                              <p>This workshop serves as a Project Management Institute (PMI)® Scheduling Professional
                                (PMI-SP)® intensive exam...</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="accordion-item">
                          <h6 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#faq4" aria-expanded="false" aria-controls="faq4">
                              PMI AGILE CERTIFIED PRACTITIONER (PMI-ACP)
                              CERTIFICATION PREP*
                            </button>
                          </h6>
                          <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#accordion">
                            <div className="accordion-body">
                              <p>This 3-day course is designed for those preparing to take PMI’s new Agile Certified
                                Practitioner (PMI-ACP) ® examination.</p>
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
      </div>

    </>
  );
}

export default Certification;