import React, {useEffect} from 'react';
import { useHistory ,useLocation } from 'react-router-dom';
import sal from "sal.js";
import $ from 'jquery'

function Certification(props) {
  useEffect(() => {
    sal();
  }, []);

  const togglePageSection = (e, section) => {
    e.preventDefault()
    $(".sect").each((key, value) => {
      if (section === value.id) {
        value.classList.remove("d-none")
        $("html, body").animate({
          scrollTop: $("#" + section).top
        }, 1000, function () {
          window.location.hash = "#" + section;
        });
      } else {
        value.classList.add("d-none")
      }
    })

  }

  return (
    <>
      <div className="sect" id="certHome">
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
              {/* <div className="col-lg-6">
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
              </div> */}
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
                                <a onClick={(e) => togglePageSection(e, 'pmp-cert')} href="#">Learn more</a>
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
                                <a onClick={(e) => togglePageSection(e, 'pmi-rmp-cert')} href="#">Learn more</a>
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
                                <a onClick={(e) => togglePageSection(e, 'pmi-sp-cert')} href="#">Learn more</a>
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
                                <a onClick={(e) => togglePageSection(e, 'pmi-acp-cert')} href="#">Learn more</a>
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

      <div className="sect d-none" id="pmp-cert">
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
                  <h1 className="title h2">THE PROJECT MANAGEMENT PROFESSIONAL (PMP)
                    CERTIFICATION PREP*</h1>
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
                      <div className="col-lg-12">
                        <p>
                          This course is designed for those who want either to re-fresh their knowledge on the "A Guide
                          to the Project Management Body of Knowledge (PMBOK® Guide), Project Management Institute
                          (PMI)® 2017" before taking the PMP® exam, as well as those who are interested in understanding
                          the science of Project Management and how it applies to their business.
                        </p>
                        <p>
                          In other words, the course is important for experienced project managers and those who
                          eventually plan on becoming expert project managers.
                        </p>
                      </div>
                      <div className="col-lg-12 my-2">
                        <h5>About PMP Training Course</h5>
                        <div className="accordion-item">
                          <h6 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#pmp1" aria-expanded="false" aria-controls="pmp1">
                              WHAT IS PROJECT MANAGEMENT
                            </button>
                          </h6>
                          <div id="pmp1" className="accordion-collapse collapse" data-bs-parent="#accordion">
                            <div className="accordion-body">
                              <p>Project Management is the craft of dealing with the venture and its expectations with a
                                view to create completed items or service. There are numerous routes in which a project
                                can be done and the path in which it is executed is project management.</p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h6 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#pmp2" aria-expanded="false" aria-controls="pmp2">
                              WHY PMP TRAINING?
                            </button>
                          </h6>
                          <div id="pmp2" className="accordion-collapse collapse" data-bs-parent="#accordion">
                            <div className="accordion-body">
                              <p>The final results of a failed task can price an employer dearly. Whilst consciousness
                                is positioned nice on technical factors, the challenge’s fulfilment relies upon on
                                professional and properly knowledgeable professionals in assignment manipulate. The
                                training will assist you increase your competence and expertise in undertaking control
                                techniques and set up your credibility to manipulate complex undertaking stressful
                                situations with assure.</p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h6 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#pmp3" aria-expanded="false" aria-controls="pmp3">
                              EXPOSURE FOR PMP CERTIFIED PROFESSIONALS
                            </button>
                          </h6>
                          <div id="pmp3" className="accordion-collapse collapse" data-bs-parent="#accordion">
                            <div className="accordion-body">
                              <p>Further to being applicable in these day’s IT employer, the qualification will assist
                                you proudly show your employers which you have the relevant skills and know-how to
                                execute a challenge from begin to finish.</p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h6 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#pmp4" aria-expanded="false" aria-controls="pmp4">
                              WHAT ARE THE PREREQUISITES TO TAKE UP PMP CERTIFICATION TRAINING AND EXAM?
                            </button>
                          </h6>
                          <div id="pmp4" className="accordion-collapse collapse" data-bs-parent="#accordion">
                            <div className="accordion-body">
                              <p>There are no prerequisites for this program. A candidate needs to obtain Secondary
                                Degree (High School Diploma, Associate's Degree, or globally comparable) with at least 5
                                years of Project Management and 7,500 hours handling project and 35 hours of Project
                                Management Education.</p>
                              <p>
                                Alternately, the learner must possess a 4-year degree (Bachelor's Degree or globally
                                comparable) and at least 3 years of Project Management experience, including 4,500 hours
                                in leading and directing projects, and 35 hours of Project Management Education.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h6 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#pmp5" aria-expanded="false" aria-controls="pmp5">
                              WHO SHOULD TAKE UP PMP TRAINING COURSE?
                            </button>
                          </h6>
                          <div id="pmp5" className="accordion-collapse collapse" data-bs-parent="#accordion">
                            <div className="accordion-body">
                              <p>Associate Project Managers Project Managers<br/>
                                IT Project Managers<br/>
                                Project Coordinators<br/>
                                Project Analysts<br/>
                                Project Leaders<br/>
                                Product Managers<br/>
                                Program Managers</p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h6 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#pmp6" aria-expanded="false" aria-controls="pmp6">
                              MDATA SOLUTIONS TRAINING BENEFITS
                            </button>
                          </h6>
                          <div id="pmp6" className="accordion-collapse collapse" data-bs-parent="#accordion">
                            <div className="accordion-body">
                              <p>MData Solutions offers you to deliver the requisite quality and efficiency by its
                                globally recognized project management training and certification courses which enable
                                individuals and companies to formulate the project in an efficient way. You furthermore
                                have the selection of taking our online trainer led classroom or one to one PMP exam
                                prep training for the PMP examination at your very own convenience.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-4">
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
                                  <a onClick={(e) => togglePageSection(e, 'pmp-cert')} href="#">Learn more</a>
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
                                  <a onClick={(e) => togglePageSection(e, 'pmi-rmp-cert')} href="#">Learn more</a>
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
                                  <a onClick={(e) => togglePageSection(e, 'pmi-sp-cert')} href="#">Learn more</a>
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
                                  <a onClick={(e) => togglePageSection(e, 'pmi-acp-cert')} href="#">Learn more</a>
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
          </div>
        </section>
      </div>

      <div className="sect d-none" id="pmi-rmp-cert">
        <div className="breadcrumb-area breadcrumb-banner single-breadcrumb">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div
                  className="section-heading heading-left"
                  data-sal="slide-right"
                  data-sal-duration="1000"
                  data-sal-delay="300"
                >
                  <h1 className="title h2">PMI RISK MANAGEMENT PROFESSIONAL (PMI-RMP)CERTIFICATION PREP*</h1>
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
                      <div className="col-lg-12">
                        <p>
                          Risk management is a vital part of any business activity, although you can't eliminate risk
                          but with careful planning you can mitigate the bad effect of negative risks “threats” and
                          increase the value of positive risk “opportunities.
                          <br/>
                          <br/>
                          The goal is to ensure that project managers are equipped with the right knowledge in risk
                          management that will help them on the projects' strategic benefits and objectives. PMI's PMBOK
                          6th edition and The Practice Standard for Risk Management defines best practices in risk
                          management throughout the life cycle of the project.
                          <br/>
                          <br/>
                          This course provides the information that you need to prepare for PMI's credential, the Risk
                          Management Professional (PMI-RMP).
                          <br/>
                          <br/>
                          At the same time, it gives you the knowledge, in an organized and experiential framework that
                          you need to improve your risk management competency and your ability to make a contribution to
                          project success.
                        </p>
                      </div>
                      <div className="col-lg-12 my-2">
                        <h5>About PMI-RMP Exam Prep Training</h5>
                        <div className="accordion-item">
                          <h6 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#pmi-rp1" aria-expanded="false" aria-controls="pmi-rp1">
                              01. WHAT IS PMI-RMP CERTIFICATION?
                            </button>
                          </h6>
                          <div id="pmi-rp1" className="accordion-collapse collapse" data-bs-parent="#accordion">
                            <div className="accordion-body">
                              <p>
                                The PMI Risk Management Professional (PMI-RMP) ® highlights your ability to identify and
                                access project risks, mitigate threats and capitalize on opportunities. In this
                                capacity, you enhance and protect the needs of your organization. Achieving this
                                certification set you apart from other professionals and credit to your organization.
                                Eight-three percent of organizations that are high performers in project management
                                practice risk management frequently while forty-nine percent of low performers do so.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h6 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#pmi-rp2" aria-expanded="false" aria-controls="pmi-rp2">
                              02. HOW WILL RMP HELP MY CAREER?
                            </button>
                          </h6>
                          <div id="pmi-rp2" className="accordion-collapse collapse" data-bs-parent="#accordion">
                            <div className="accordion-body">
                              <p>
                                If you manage large scale, complex, and high budget projects, you need RMP. When you’re
                                responsible for the success of large financial investments, you need to do everything
                                you can to ensure things go smoothly. The skills and methods you learn with RMP will
                                become incredibly valuable as you integrate them into your project planning. Keep in
                                mind that stakeholder relationships, reputation, and resources may be lost due to
                                project failure.
                              </p>
                              <p>
                                Project managers in smaller organizations can benefit from RMP as well. Even a small
                                project can cause big losses for a company. RMP’s concepts and practices will scale just
                                fine to small businesses and projects. Part of RMP is learning the framework of risk
                                management. This allows you to piece together a plan that will best serve your goals.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h6 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#pmi-rp3" aria-expanded="false" aria-controls="pmi-rp3">
                              03. WHAT ARE THE PREREQUISITES FOR THE PMI-RMP EXAM?
                            </button>
                          </h6>
                          <div id="pmi-rp3" className="accordion-collapse collapse" data-bs-parent="#accordion">
                            <div className="accordion-body">
                              <blockquote>
                                To apply for the PMI-RMP® Credential, you need to possess a:<br/>
                                Secondary degree (high school diploma, associate’s degree, or the global
                                equivalent)<br/>
                                4,500 hours of project risk management experience<br/>
                                40 hours of project risk management education<br/>
                                OR<br/>
                                Four-year degree (bachelor’s degree or the global equivalent)<br/>
                                3,000 hours of project risk management experience<br/>
                                30 hours of project risk management education
                              </blockquote>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h6 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#pmi-rp4" aria-expanded="false" aria-controls="pmi-rp4">
                              04. WHO SHOULD TAKE UP THIS COURSE?
                            </button>
                          </h6>
                          <div id="pmi-rp4" className="accordion-collapse collapse" data-bs-parent="#accordion">
                            <div className="accordion-body">
                              <p>There are no prerequisites for this program. A candidate needs to obtain Secondary
                                Degree (High School Diploma, Associate's Degree, or globally comparable) with at least 5
                                years of Project If you have advanced knowledge and experience in risk management, or if
                                you are a project manager focused on project risk management, including for large
                                projects and/or complex environments, then the PMI®-RMP® is an excellent choice for you.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h6 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#pmi-rp5" aria-expanded="false" aria-controls="pmi-rp5">
                              05. MDATA SOLUTIONS TRAINING BENEFITS
                            </button>
                          </h6>
                          <div id="pmi-rp5" className="accordion-collapse collapse" data-bs-parent="#accordion">
                            <div className="accordion-body">
                              <p>
                                MData Solutions offers you to deliver the requisite quality and efficiency by its
                                globally recognized project management training and certification courses which enable
                                individuals and companies to formulate the project in an efficient way. You furthermore
                                have the selection of taking our online trainer led classroom or one to one PMI-RMP Exam
                                Training Course at your very own convenience.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-4">
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
                                  <a onClick={(e) => togglePageSection(e, 'pmp-cert')} href="#">Learn more</a>
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
                                  <a onClick={(e) => togglePageSection(e, 'pmi-rmp-cert')} href="#">Learn more</a>
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
                                  <a onClick={(e) => togglePageSection(e, 'pmi-sp-cert')} href="#">Learn more</a>
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
                                  <a onClick={(e) => togglePageSection(e, 'pmi-acp-cert')} href="#">Learn more</a>
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
          </div>
        </section>
      </div>

      <div className="sect d-none" id="pmi-sp-cert">
        <div className="breadcrumb-area breadcrumb-banner single-breadcrumb">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div
                  className="section-heading heading-left"
                  data-sal="slide-right"
                  data-sal-duration="1000"
                  data-sal-delay="300"
                >
                  <h1 className="title h2">PMI SCHEDULE PROFESSIONAL (PMI-SP)®</h1>
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
                      <div className="col-lg-12">
                        <p>
                          This workshop serves as a Project Management Institute (PMI)® Scheduling Professional
                          (PMI-SP)® intensive exam preparation course. It also presents scheduling practice standards to
                          help a scheduling practitioner become more effective. This workshop is kept up to date with
                          the framework of knowledge outlined by the Practice Standard for Scheduling, the PMI
                          Scheduling Professional Examination.
                        </p>
                      </div>
                      <div className="row mt-4">
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
                                  <a onClick={(e) => togglePageSection(e, 'pmp-cert')} href="#">Learn more</a>
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
                                  <a onClick={(e) => togglePageSection(e, 'pmi-rmp-cert')} href="#">Learn more</a>
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
                                  <a onClick={(e) => togglePageSection(e, 'pmi-sp-cert')} href="#">Learn more</a>
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
                                  <a onClick={(e) => togglePageSection(e, 'pmi-acp-cert')} href="#">Learn more</a>
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
          </div>
        </section>
      </div>

      <div className="sect d-none" id="pmi-acp-cert">
        <div className="breadcrumb-area breadcrumb-banner single-breadcrumb">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div
                  className="section-heading heading-left"
                  data-sal="slide-right"
                  data-sal-duration="1000"
                  data-sal-delay="300"
                >
                  <h1 className="title h2">PMI AGILE CERTIFIED PRACTITIONER (PMI-ACP)® CERTIFICATION PREP*</h1>
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
                      <div className="col-lg-12">
                        <p>
                          This 3-day course is designed for those preparing to take PMI’s new Agile Certified
                          Practitioner (PMI-ACP) ® examination. The course provides participants with comprehensive
                          information concerning the Agile process and framework based on information and resources
                          outlined by PMI, and will also help participants determine readiness for taking the exam,
                          identify areas of strength and areas for improvement, and ultimately prepare them to pass!
                        </p>
                      </div>
                      <div className="col-lg-12 my-2">
                        <h5>About PMI-ACP Exam Prep Training</h5>
                        <div className="accordion-item">
                          <h6 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#pmi-acp1" aria-expanded="false" aria-controls="pmi-acp1">
                              01. WHAT IS PMI-ACP CERTIFICATION?
                            </button>
                          </h6>
                          <div id="pmi-acp1" className="accordion-collapse collapse" data-bs-parent="#accordion">
                            <div className="accordion-body">
                              <p>
                                ACP is an acronym of Agile Certified Practitioner. This certification is provided by
                                Project Management Institute PMI and hence it is PMI-ACP. ACP Certification carries a
                                high level of professional integrity as it is a combination of agile training working on
                                agile projects and examining Agile fundamentals and tools. This certification is
                                universally recognized and aids people in addressing the needs of associations that
                                depend on certified agile practitioners to apply their diversified skills to undertake
                                the projects in an efficient manner.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h6 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#pmi-acp2" aria-expanded="false" aria-controls="pmi-acp2">
                              02. WHAT IS AGILE?
                            </button>
                          </h6>
                          <div id="pmi-acp2" className="accordion-collapse collapse" data-bs-parent="#accordion">
                            <div className="accordion-body">
                              <p>
                                Agile is a monotonous approach to deliver software in a cumulative manner from the start
                                of the project rather than delivering the whole project at the end. Agile is majorly
                                applied in project management. If the project is typical, then Agile Project management
                                methodology is the finest methodology to follow. This methodology mainly aims to deliver
                                the product to the customer in smaller sprints instead of delivering at a time. Hence
                                forth, it will be easy for the customer to test the delivered module of the project and
                                ensure that proper quality is maintained.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h6 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#pmi-acp3" aria-expanded="false" aria-controls="pmi-acp3">
                              03. WHAT ARE THE BENEFITS OF PMI-ACP® CERTIFICATION?
                            </button>
                          </h6>
                          <div id="pmi-acp3" className="accordion-collapse collapse" data-bs-parent="#accordion">
                            <div className="accordion-body">
                              <p>
                                Understand the processes of Agile Project management. Learn about the Agile Project
                                phases, Agile life cycle and Stakeholders, Key Agile Management skills and the
                                social-economic-environmental influences.
                              </p>
                              <p>
                                Learn about the key Agile Project management processes of Product Backlog, Sprint
                                Planning, Sprint Reviews and Retrospectives, Along with other factors such as
                                Prioritizations using different techniques Learn about the Professional Responsibilities
                                concerning Agile Project Management.
                              </p>
                              <p>
                                Learn how to use the recommended books by the Project Management Institute to prepare
                                for the PMI ACP® examination.
                              </p>
                              <p>
                                Get guidelines on filling up the ACP® Application form Ascertain their level of
                                readiness for taking the ACP® Examination.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h6 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#pmi-acp4" aria-expanded="false" aria-controls="pmi-acp4">
                              04. WHAT ARE THE PREREQUISITES TO TAKE UP PMI-ACP® EXAM?
                            </button>
                          </h6>
                          <div id="pmi-acp4" className="accordion-collapse collapse" data-bs-parent="#accordion">
                            <div className="accordion-body">
                              <p>To be eligible for the PMI-ACP certification, you must meet certain education and
                                professional requirements:</p>
                              <p>Educational Background: Secondary Degree (high school diploma, associate's degree or
                                global equivalent).</p>
                              <p>General Project Experience: 2,000 hours (12 months) in project teams, which must have
                                been acquired in the last five years.</p>
                              <p>Agile Project Experience: A minimum of 1,500 hours (8 months) in project teams or teams
                                that employed agile methodologies. This experience should have been earned in the last
                                three years and these hours should be in addition to the 2,000 hours of general project
                                experience.</p>
                              <p>Training in Agile Practices: 21 contact hours in Agile practices.</p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h6 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#pmi-acp5" aria-expanded="false" aria-controls="pmi-acp5">
                              05. WHO SHOULD TAKE UP PMI-ACP® COURSE?
                            </button>
                          </h6>
                          <div id="pmi-acp5" className="accordion-collapse collapse" data-bs-parent="#accordion">
                            <div className="accordion-body">
                              <p>Project Managers</p>
                              <p>Project Planners</p>
                              <p>Quality Assurance Staff</p>
                              <p>Developers / Programmers</p>
                              <p>Designers</p>
                              <p>Testers</p>
                              <p>Project Controllers</p>
                              <p>Product Owners</p>
                              <p>Scrum Masters</p>
                              <p>Scrum Team Members</p>
                              <p>
                                Anyone looking to gain knowledge of managing agile projects and understand how Agile is
                                applied and practiced in a project environment
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h6 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#pmi-acp6" aria-expanded="false" aria-controls="pmi-acp6">
                              06. MDATA SOLUTIONS TRAINING BENEFITS
                            </button>
                          </h6>
                          <div id="pmi-acp6" className="accordion-collapse collapse" data-bs-parent="#accordion">
                            <div className="accordion-body">
                              <p>
                                MData Solutions offers you to deliver the requisite quality and efficiency by its
                                globally recognized project management training and certification courses which enable
                                individuals and companies to formulate the project in an efficient way. You furthermore
                                have the selection of taking our online trainer led classroom or one to one PMI-ACP
                                Training Course at your very own convenience.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-4">
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
                                  <a onClick={(e) => togglePageSection(e, 'pmp-cert')} href="#">Learn more</a>
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
                                  <a onClick={(e) => togglePageSection(e, 'pmi-rmp-cert')} href="#">Learn more</a>
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
                                  <a onClick={(e) => togglePageSection(e, 'pmi-sp-cert')} href="#">Learn more</a>
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
                                  <a onClick={(e) => togglePageSection(e, 'pmi-acp-cert')} href="#">Learn more</a>
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
          </div>
        </section>
      </div>

    </>
  );
}

export default Certification;