import React, { useEffect } from "react";
import sal from "sal.js";
import OfferingsAcc from "./OfferingsAcc";
import $ from "jquery";
import Img1 from '../../../images/Picture1.png'


function Offerings(props) {
  useEffect(() => {
    sal();
  }, []);

  const togglePageSection = (e, section) => {
    e.preventDefault();
    $(".sect").each((key, value) => {
      if (section === value.id) {
        value.classList.remove("d-none");
        $("html, body").animate(
          {
            scrollTop: $("#" + section).top,
          },
          1000,
          function () {
            window.location.hash = "#" + section;
          }
        );
      } else {
        value.classList.add("d-none");
      }
    });
  };

  return (
    <>
      <div id="offeringsHome" className="sect">
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
                  <h1 className="title h2">PROJECT MANAGEMENT OFFERINGS</h1>
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
                    src={Img1}
                    alt="Illustration"
                    style={{heigth: 120, width: 150}}
                  />
                </div>
              </div>
            </div>
          </div>
          <section className="section-padding single-portfolio-area">
            <div className="container">
              <div className="row">
                  <div className="col-lg-6">
                    <div
                      className="section-heading heading-left"
                      data-sal="slide-right"
                      data-sal-duration="1000"
                      data-sal-delay="300"
                    >
                      <h3>Project Management Offerings</h3>
                    </div>
                  </div>
                  <p>
                    MData Solutions is an approved Registered Education Provider
                    (REP) by the Project Management Institute (PMI)®. Committed
                    project management teams accomplish more-and one way to
                    ensure their commitment is to involve them in the planning
                    process. MData Solutions provides project team members the
                    right skills and knowledge to participate. As a part of our
                    project management consulting services, we offer project
                    management methodology, project management software and
                    facilitator training for all stakeholders in your
                    organization-from team members to managers, project sponsors
                    to customers. We also have advanced project management
                    training classes for your experienced managers and
                    individuals involved in project office development.
                  </p>
              </div>
            </div>
          </section>
          <ul className="shape-group-8 list-unstyled">
            <li
              className="shape shape-1"
              data-sal="slide-right"
              data-sal-duration="500"
              data-sal-delay="100"
            >
              <img src="assets/media/others/bubble-9.png" alt="Bubble" />
            </li>
            <li
              className="shape shape-2"
              data-sal="slide-left"
              data-sal-duration="500"
              data-sal-delay="200"
            >
              <img src="assets/media/others/bubble-20.png" alt="Bubble" />
            </li>
            <li
              className="shape shape-3"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="300"
            >
              <img src="assets/media/others/line-4.png" alt="Line" />
            </li>
          </ul>
        </div>

        <section className="section-padding single-portfolio-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-11 offset-xl-1">
                <div classNameName="faq-accordion">
                  <div classNameName="accordion" id="accordion">
                    <OfferingsAcc />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div id="intro-to-pm" className="sect d-none">
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
                  <h1 className="title h2">
                    INTRODUCTION TO PROJECT MANAGEMENT
                  </h1>
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
              <img src="assets/media/others/bubble-9.png" alt="Bubble" />
            </li>
            <li
              className="shape shape-2"
              data-sal="slide-left"
              data-sal-duration="500"
              data-sal-delay="200"
            >
              <img src="assets/media/others/bubble-20.png" alt="Bubble" />
            </li>
            <li
              className="shape shape-3"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="300"
            >
              <img src="assets/media/others/line-4.png" alt="Line" />
            </li>
          </ul>
        </div>

        <section className="section-padding single-portfolio-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-11 offset-xl-1">
                <div classNameName="faq-accordion">
                  <div classNameName="accordion" id="accordion">
                    <div classNameName="row">
                      <div classNameName="col-lg-12">
                        <p>
                          Introduction to Project Management gives you the
                          foundation, techniques and tools to manage each stage
                          of the project life cycle, work within organizational
                          and cost constraints, set goals tied directly to
                          stakeholder needs, get the most from your project
                          management team, and utilize state-of-the-art project
                          management tools to get the work done on time and
                          within budget.
                        </p>
                      </div>
                      <div classNameName="col-lg-12">
                        <OfferingsAcc />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div id="exec-pm-overview" className="sect d-none">
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
                  <h1 className="title h2">
                    EXECUTIVE PROJECT MANAGEMENT OVERVIEW
                  </h1>
                  <p style={{ color: "red" }}>
                    – ACHIEVING ENTERPRISE-WIDE ORGANIZATIONAL GOALS
                  </p>
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
              <img src="assets/media/others/bubble-9.png" alt="Bubble" />
            </li>
            <li
              className="shape shape-2"
              data-sal="slide-left"
              data-sal-duration="500"
              data-sal-delay="200"
            >
              <img src="assets/media/others/bubble-20.png" alt="Bubble" />
            </li>
            <li
              className="shape shape-3"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="300"
            >
              <img src="assets/media/others/line-4.png" alt="Line" />
            </li>
          </ul>
        </div>

        <section className="section-padding single-portfolio-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-11 offset-xl-1">
                <div classNameName="faq-accordion">
                  <div classNameName="accordion" id="accordion">
                    <div classNameName="row">
                      <div classNameName="col-lg-12">
                        <p>
                          To avoid delay, disruption and rework when managing
                          large, complex projects, executive managers need
                          strong leadership, communication and problem-solving
                          skills to make sound business decisions.
                        </p>
                      </div>
                      <div classNameName="col-lg-12">
                        <OfferingsAcc />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div id="it-pm" className="sect d-none">
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
                  <h1 className="title h2">
                    INFORMATION TECHNOLOGY (IT) PROJECT MANAGEMENT
                  </h1>
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
              <img src="assets/media/others/bubble-9.png" alt="Bubble" />
            </li>
            <li
              className="shape shape-2"
              data-sal="slide-left"
              data-sal-duration="500"
              data-sal-delay="200"
            >
              <img src="assets/media/others/bubble-20.png" alt="Bubble" />
            </li>
            <li
              className="shape shape-3"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="300"
            >
              <img src="assets/media/others/line-4.png" alt="Line" />
            </li>
          </ul>
        </div>

        <section className="section-padding single-portfolio-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-11 offset-xl-1">
                <div classNameName="faq-accordion">
                  <div classNameName="accordion" id="accordion">
                    <div classNameName="row">
                      <div classNameName="col-lg-12">
                        <p>
                          In this comprehensive introductory course, you’ll
                          discover critical success factors and hidden risks
                          inherent in IT projects and you’ll leave with an
                          understanding of strategies and techniques developed
                          in the field by experienced IT project managers for
                          successfully managing IT projects. “IT” means
                          different things to different people.
                        </p>
                      </div>
                      <div classNameName="col-lg-12">
                        <OfferingsAcc />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div id="project-quality-mgt" className="sect d-none">
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
                  <h1 className="title h2">PROJECT QUALITY MANAGEMENT</h1>
                  <p>
                    INCREASE CUSTOMER SATISFACTION THROUGH IMPROVED QUALITY!
                  </p>
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
              <img src="assets/media/others/bubble-9.png" alt="Bubble" />
            </li>
            <li
              className="shape shape-2"
              data-sal="slide-left"
              data-sal-duration="500"
              data-sal-delay="200"
            >
              <img src="assets/media/others/bubble-20.png" alt="Bubble" />
            </li>
            <li
              className="shape shape-3"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="300"
            >
              <img src="assets/media/others/line-4.png" alt="Line" />
            </li>
          </ul>
        </div>

        <section className="section-padding single-portfolio-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-11 offset-xl-1">
                <div classNameName="faq-accordion">
                  <div classNameName="accordion" id="accordion">
                    <div classNameName="row">
                      <div classNameName="col-lg-12">
                        <p>
                          Improve your project processes to achieve higher
                          quality products, services, or results. This intensive
                          course focuses on fundamental quality management
                          tenets of leading thinkers such as Deming, Juran, and
                          Crosby.
                        </p>
                        <p>
                          Learn how quality impacts virtually all aspects of
                          project management.
                        </p>
                      </div>
                      <div classNameName="col-lg-12">
                        <OfferingsAcc />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div id="pm-pa-admin" className="sect d-none">
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
                  <h1 className="title h2">
                    PROJECT MANAGEMENT FOR PERSONAL ASSISTANTS AND
                    ADMINISTRATORS
                  </h1>
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
              <img src="assets/media/others/bubble-9.png" alt="Bubble" />
            </li>
            <li
              className="shape shape-2"
              data-sal="slide-left"
              data-sal-duration="500"
              data-sal-delay="200"
            >
              <img src="assets/media/others/bubble-20.png" alt="Bubble" />
            </li>
            <li
              className="shape shape-3"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="300"
            >
              <img src="assets/media/others/line-4.png" alt="Line" />
            </li>
          </ul>
        </div>

        <section className="section-padding single-portfolio-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-11 offset-xl-1">
                <div classNameName="faq-accordion">
                  <div classNameName="accordion" id="accordion">
                    <div classNameName="row">
                      <div classNameName="col-lg-12">
                        <p>
                          This course provides an insight for PA’s and other
                          Senior Administrators into how to best manage the sort
                          of projects and responsibilities that may be assigned
                          to them. PA’s and senior Administrators often find
                          themselves in the position of managing projects in
                          their own right. This packed and practical course
                          enables project organizers/managers, to learn how to
                          manage the wide variety of responsibilities that are
                          often assigned to them.
                        </p>
                      </div>
                      <div classNameName="col-lg-12">
                        <OfferingsAcc />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div id="pm-for-auditors" className="sect d-none">
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
                  <h1 className="title h2">PROJECT MANAGEMENT FOR AUDITORS</h1>
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
              <img src="assets/media/others/bubble-9.png" alt="Bubble" />
            </li>
            <li
              className="shape shape-2"
              data-sal="slide-left"
              data-sal-duration="500"
              data-sal-delay="200"
            >
              <img src="assets/media/others/bubble-20.png" alt="Bubble" />
            </li>
            <li
              className="shape shape-3"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="300"
            >
              <img src="assets/media/others/line-4.png" alt="Line" />
            </li>
          </ul>
        </div>

        <section className="section-padding single-portfolio-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-11 offset-xl-1">
                <div classNameName="faq-accordion">
                  <div classNameName="accordion" id="accordion">
                    <div classNameName="row">
                      <div classNameName="col-lg-12">
                        <p>
                          An audit is simply a project. Yet few auditors take
                          advantage of techniques used by project managers to
                          bring their projects in on time and on budget. In
                          three intensive days you will learn the basics of
                          project management, including how you can achieve
                          improved cost control, resource utilization, and
                          timelier audit conclusions. You will then apply these
                          techniques to improving productivity in the internal
                          audit process.
                        </p>
                      </div>
                      <div classNameName="col-lg-12">
                        <OfferingsAcc />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div
        id="building-successful-interpersonal-team-communication"
        className="sect d-none"
      >
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
                  <h1 className="title h2">
                    BUILDING SUCCESSFUL INTERPERSONAL & TEAM COMMUNICATION
                  </h1>
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
              <img src="assets/media/others/bubble-9.png" alt="Bubble" />
            </li>
            <li
              className="shape shape-2"
              data-sal="slide-left"
              data-sal-duration="500"
              data-sal-delay="200"
            >
              <img src="assets/media/others/bubble-20.png" alt="Bubble" />
            </li>
            <li
              className="shape shape-3"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="300"
            >
              <img src="assets/media/others/line-4.png" alt="Line" />
            </li>
          </ul>
        </div>

        <section className="section-padding single-portfolio-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-11 offset-xl-1">
                <div classNameName="faq-accordion">
                  <div classNameName="accordion" id="accordion">
                    <div classNameName="row">
                      <div classNameName="col-lg-12">
                        <p>
                          Individual and team success depends upon the ability
                          of individuals to communicate with others and be
                          understood. The communication skills covered in this
                          course are required to successfully exploit individual
                          and group potential, focus a team's efforts, maximize
                          creativity, influence another's thoughts and actions,
                          and continually improve quality and productivity.
                        </p>
                      </div>
                      <div classNameName="col-lg-12">
                        <OfferingsAcc />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div id="project-procurement-mgt" className="sect d-none">
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
                  <h1 className="title h2">PROJECT PROCUREMENT MANAGEMENT</h1>
                  <p>
                    BE SUCCESSFUL IN PROCURING GOODS AND SERVICES FOR YOUR
                    PROJECTS!
                  </p>
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
              <img src="assets/media/others/bubble-9.png" alt="Bubble" />
            </li>
            <li
              className="shape shape-2"
              data-sal="slide-left"
              data-sal-duration="500"
              data-sal-delay="200"
            >
              <img src="assets/media/others/bubble-20.png" alt="Bubble" />
            </li>
            <li
              className="shape shape-3"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="300"
            >
              <img src="assets/media/others/line-4.png" alt="Line" />
            </li>
          </ul>
        </div>

        <section className="section-padding single-portfolio-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-11 offset-xl-1">
                <div classNameName="faq-accordion">
                  <div classNameName="accordion" id="accordion">
                    <div classNameName="row">
                      <div classNameName="col-lg-12">
                        <p>
                          A strategic make-lease-buy decision can critically
                          impact a project’s bottom line. Learn best practices
                          to procure outside services and products — from the
                          initial decision to buy, through final contract
                          closeout. Identify what must be done to successfully
                          execute the four key project procurement management
                          processes: plan procurements, conduct procurements,
                          administer procurements, and close procurements.
                        </p>
                        <p>
                          Formulate the make-lease-buy decision, prepare an
                          effective procurement management plan to guide the
                          team, and use outsourcing and partnering for maximum
                          benefit.
                        </p>
                      </div>
                      <div classNameName="col-lg-12">
                        <OfferingsAcc />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div id="practical-pm-simulation" className="sect d-none">
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
                  <h1 className="title h2">
                    PRACTICAL PROJECT MANAGEMENT SIMULATION
                  </h1>
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
              <img src="assets/media/others/bubble-9.png" alt="Bubble" />
            </li>
            <li
              className="shape shape-2"
              data-sal="slide-left"
              data-sal-duration="500"
              data-sal-delay="200"
            >
              <img src="assets/media/others/bubble-20.png" alt="Bubble" />
            </li>
            <li
              className="shape shape-3"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="300"
            >
              <img src="assets/media/others/line-4.png" alt="Line" />
            </li>
          </ul>
        </div>

        <section className="section-padding single-portfolio-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-11 offset-xl-1">
                <div classNameName="faq-accordion">
                  <div classNameName="accordion" id="accordion">
                    <div classNameName="row">
                      <div classNameName="col-lg-12">
                        <p>
                          MData Solutions has developed the Practical Project
                          Management (PPM) course to help project managers apply
                          project management best practices to their daily work.
                          MData Solutions has unique in-depth knowledge of
                          various project management related models and
                          standards. We have selected the PMBOK® Guide (Project
                          Management Body of Knowledge) - edited by the Project
                          Management Institute (PMI) - as the basis of reference
                          and added best practices from models like CMMI®,
                          PRINCE2® and our own hands-on experience. In this way,
                          MData offers current and future project managers a
                          truly unique set of practical information - readily
                          available for use in real-life projects. Learn how to
                          manage projects from initiation to close-out.
                        </p>
                        <p>
                          This practical course teaches participants how to
                          successfully initiate, plan, execute, control and
                          close-out projects while applying industry best
                          practices. Students will learn project management
                          concepts, helpful standard terminology, and
                          established methods based on the Project Management
                          Institute (PMI®) Project Management Body of Knowledge
                          (PMBOK®).
                        </p>
                      </div>
                      <div classNameName="col-lg-12">
                        <OfferingsAcc />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div id="project-mgt-office" className="sect d-none">
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
                  <h1 className="title h2">
                    BUILDING A SUCCESSFUL PROJECT MANAGEMENT OFFICE (PMO)
                  </h1>
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
              <img src="assets/media/others/bubble-9.png" alt="Bubble" />
            </li>
            <li
              className="shape shape-2"
              data-sal="slide-left"
              data-sal-duration="500"
              data-sal-delay="200"
            >
              <img src="assets/media/others/bubble-20.png" alt="Bubble" />
            </li>
            <li
              className="shape shape-3"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="300"
            >
              <img src="assets/media/others/line-4.png" alt="Line" />
            </li>
          </ul>
        </div>

        <section className="section-padding single-portfolio-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-11 offset-xl-1">
                <div classNameName="faq-accordion">
                  <div classNameName="accordion" id="accordion">
                    <div classNameName="row">
                      <div classNameName="col-lg-12">
                        <p>
                          A Project Management Office (PMO) is vital to ensure
                          project consistency, efficiency and effectiveness
                          across the organization. In this course, you learn how
                          to build an effective PMO. In this course, you gain
                          the skills to structure a central PMO that provides
                          standardization, oversight and ongoing support, and
                          training in a multiple-project environment.
                        </p>
                        <p>
                          At the end of this course, tools and templates
                          required for sustaining a successful PMO are received.
                        </p>
                      </div>
                      <div classNameName="col-lg-12">
                        <OfferingsAcc />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div
        id="managing-stakeholders-expectations-and-relationship"
        className="sect d-none"
      >
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
                  <h1 className="title h2">
                    MANAGING STAKEHOLDERS EXPECTATIONS AND RELATIONSHIP
                  </h1>
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
              <img src="assets/media/others/bubble-9.png" alt="Bubble" />
            </li>
            <li
              className="shape shape-2"
              data-sal="slide-left"
              data-sal-duration="500"
              data-sal-delay="200"
            >
              <img src="assets/media/others/bubble-20.png" alt="Bubble" />
            </li>
            <li
              className="shape shape-3"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="300"
            >
              <img src="assets/media/others/line-4.png" alt="Line" />
            </li>
          </ul>
        </div>

        <section className="section-padding single-portfolio-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-11 offset-xl-1">
                <div classNameName="faq-accordion">
                  <div classNameName="accordion" id="accordion">
                    <div classNameName="row">
                      <div classNameName="col-lg-12">
                        <h6>
                          Understand the Unique Needs and Expectations of
                          Project Stakeholders!
                        </h6>
                        <p>
                          Recognizing stakeholders' expectations is a critical
                          element in managing successful projects; especially in
                          these days of cross-functional, matrix-managed, and
                          virtual or geographically dispersed teams.
                        </p>
                        <p>
                          Managing those stakeholder relationships is key to the
                          success of our projects. This course focuses on a
                          stakeholder-based approach in projects and examines
                          what it takes to actively and successfully build and
                          manage relationships with our stakeholders, focusing
                          on identifying and meeting their needs, requirements
                          and priorities. Several key organizational issues
                          around stakeholder management are also examined:
                          power, influence, and authority.
                        </p>
                        <p>
                          This course addresses the critical skills of actively
                          managing stakeholder needs and expectations as well as
                          developing and managing the stakeholder relationship.
                          Additionally, this course explores tools that are
                          designed to aid in the discovery and management of
                          stakeholder and team expectations.
                        </p>
                      </div>
                      <div classNameName="col-lg-12">
                        <OfferingsAcc />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div id="managing-multiple-and-complex-projects" className="sect d-none">
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
                  <h1 className="title h2">
                    MANAGING MULTIPLE AND COMPLEX PROJECT
                  </h1>
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
              <img src="assets/media/others/bubble-9.png" alt="Bubble" />
            </li>
            <li
              className="shape shape-2"
              data-sal="slide-left"
              data-sal-duration="500"
              data-sal-delay="200"
            >
              <img src="assets/media/others/bubble-20.png" alt="Bubble" />
            </li>
            <li
              className="shape shape-3"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="300"
            >
              <img src="assets/media/others/line-4.png" alt="Line" />
            </li>
          </ul>
        </div>

        <section className="section-padding single-portfolio-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-11 offset-xl-1">
                <div classNameName="faq-accordion">
                  <div classNameName="accordion" id="accordion">
                    <div classNameName="row">
                      <div classNameName="col-lg-12">
                        <h6>
                          Learn to Successfully Manage and Lead Multiple
                          Projects Teams!
                        </h6>
                        <p>
                          Managing multiple projects is one of today's most
                          pressing business challenges. In this hands-on,
                          project driven course, you'll learn to successfully
                          apply tools and techniques to ensure your projects
                          succeed.
                        </p>
                        <p>
                          You'll gain insight into unique strategies for dynamic
                          resource allocation, managing sudden scope and
                          priority changes, and maximizing your return on the
                          limited assets available all within time and resource
                          constraints and ever-changing scope.
                        </p>
                        <p>
                          You will learn to adapt proven techniques to manage
                          multiple projects, especially with virtual teams.
                        </p>
                      </div>
                      <div classNameName="col-lg-12">
                        <OfferingsAcc />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div
        id="achieving-leadership-success-through-people"
        className="sect d-none"
      >
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
                  <h1 className="title h2">
                    ACHIEVING LEADERSHIP SUCCESS THROUGH PEOPLE
                  </h1>
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
              <img src="assets/media/others/bubble-9.png" alt="Bubble" />
            </li>
            <li
              className="shape shape-2"
              data-sal="slide-left"
              data-sal-duration="500"
              data-sal-delay="200"
            >
              <img src="assets/media/others/bubble-20.png" alt="Bubble" />
            </li>
            <li
              className="shape shape-3"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="300"
            >
              <img src="assets/media/others/line-4.png" alt="Line" />
            </li>
          </ul>
        </div>

        <section className="section-padding single-portfolio-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-11 offset-xl-1">
                <div classNameName="faq-accordion">
                  <div classNameName="accordion" id="accordion">
                    <div classNameName="row">
                      <div classNameName="col-lg-12">
                        <p>
                          The most successful leaders are those with the best
                          people skills, especially during the most difficult
                          circumstances. Poor communication and interpersonal
                          relationships routinely thwart leaders who are
                          otherwise technically competent. In order to succeed,
                          leaders must be fully engaged with the individuals who
                          make up their organization.
                        </p>
                        <p>
                          Focusing skill-by-skill on P.E.O.P.L.E.
                          (Professionalism, Empathy, Optimism, Partnering,
                          Loyalty and Empowering) this course can help anyone in
                          a position of leadership to better demonstrate caring
                          as well as courage, and to use a P.E.O.P.L.E. approach
                          to achieve maximum results.
                        </p>
                      </div>
                      <div classNameName="col-lg-12">
                        <OfferingsAcc />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div id="change-acceleration-process-training" className="sect d-none">
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
                  <h1 className="title h2">
                    CAP - CHANGE ACCELERATION PROCESS TRAINING
                  </h1>
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
              <img src="assets/media/others/bubble-9.png" alt="Bubble" />
            </li>
            <li
              className="shape shape-2"
              data-sal="slide-left"
              data-sal-duration="500"
              data-sal-delay="200"
            >
              <img src="assets/media/others/bubble-20.png" alt="Bubble" />
            </li>
            <li
              className="shape shape-3"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="300"
            >
              <img src="assets/media/others/line-4.png" alt="Line" />
            </li>
          </ul>
        </div>

        <section className="section-padding single-portfolio-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-11 offset-xl-1">
                <div classNameName="faq-accordion">
                  <div classNameName="accordion" id="accordion">
                    <div classNameName="row">
                      <div classNameName="col-lg-12">
                        <p>
                          Do you successfully manage Change in your
                          organization? Are you implementing a new enterprise
                          application, new operation process, or other
                          enterprise technology system? Are you implementing new
                          policies and procedures within your organization?
                        </p>
                        <p>
                          Have you experienced widespread organizational change?
                          If so, have you considered the technical, political,
                          and cultural change that staff members will be
                          experiencing as a result of this change? Learn to
                          successfully manage the Change that will be occurring
                          in your organization, as you become a Change Agent
                          with a tool kit to ensure your success. From
                          developing Vision Statements to Monitoring Progress,
                          you'll learn the 7 Phases of the Change Acceleration
                          Process, including activities for committees, leaders,
                          and staff members.
                        </p>
                      </div>
                      <div classNameName="col-lg-12">
                        <OfferingsAcc />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div
        id="strategic-system-and-business-process-improvement"
        className="sect d-none"
      >
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
                  <h1 className="title h2">
                    STRATEGIC SYSTEM AND BUSINESS PROCESS IMPROVEMENT
                  </h1>
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
              <img src="assets/media/others/bubble-9.png" alt="Bubble" />
            </li>
            <li
              className="shape shape-2"
              data-sal="slide-left"
              data-sal-duration="500"
              data-sal-delay="200"
            >
              <img src="assets/media/others/bubble-20.png" alt="Bubble" />
            </li>
            <li
              className="shape shape-3"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="300"
            >
              <img src="assets/media/others/line-4.png" alt="Line" />
            </li>
          </ul>
        </div>

        <section className="section-padding single-portfolio-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-11 offset-xl-1">
                <div classNameName="faq-accordion">
                  <div classNameName="accordion" id="accordion">
                    <div classNameName="row">
                      <div classNameName="col-lg-12">
                        <p>
                          In this course, you'll learn to model business
                          processes as they are currently enacted, assess the
                          quality of those business processes, and collaborate
                          with the stakeholders to identify improvements. The
                          course begins by teaching you the roles and
                          responsibilities of the business analyst and the
                          process for analyzing business systems, including how
                          to determine a business system's health. You will
                          learn how to identify business processes that could
                          become more streamlined.
                        </p>
                      </div>
                      <div classNameName="col-lg-12">
                        <OfferingsAcc />
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

export default Offerings;
