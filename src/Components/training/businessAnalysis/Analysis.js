import React, { useEffect } from "react";
import sal from "sal.js";
import AnalysisAccordion from "./AnalysisAccordion";

function Analysis(props) {
  useEffect(() => {
    sal();
  }, []);
  return (
    <>
      <div className="sect" id="analysisHome">
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
                  <h1 className="title h2">
                    BUSINESS OFFERINGS, TRAINING & DEVELOPMENT
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
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    <AnalysisAccordion />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="sect d-none" id="principle-of-business-analysis">
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
                  <h1 className="title h2">PRINCIPLES OF BUSINESS ANALYSIS</h1>
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
              <div className="col-lg-12">
                <p>
                This course is designed for business and IT professionals who want to make informed decisions about the needs of the organization and document them as business and project requirements. Establish a solid foundation of skills, knowledge, and techniques to make sure your projects contribute value to your organization's mission, goals, and objectives.
                </p>
              </div>
              <div className="col-lg-11 offset-xl-1">
                <div className="faq-accordion">
                  <div className="accordion mt-5" id="accordion">
                    <AnalysisAccordion />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div
        className="sect d-none"
        id="crafting-high-quality-requirements"
      >
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
                  <h1 className="title h2">CRAFTING HIGH-QUALITY REQUIREMENTS</h1>
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
              <div className="col-lg-12">
                <p>
                Whether outsourced or in-house, every new development project needs exceptional requirements management. Up to 70% of IT-enabled business change project failures are tied directly to poor requirements management.
                </p>
                <p>
                Develop the key skills required to reduce requirements-driven causes of project failure. Introduce lean process thinking to right-size the requirements analysis process. Identify, document, analyze, and track requirements throughout a project's life cycle. Determine key roles and responsibilities in requirements analysis. Discover the importance of allocating and tracing requirements.
                </p>
              </div>
              <div className="col-lg-11 offset-xl-1">
                <div className="faq-accordion">
                  <div className="accordion mt-5" id="accordion">
                    <AnalysisAccordion />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="sect d-none" id="building-business-cases">
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
                  <h1 className="title h2">CRAFTING HIGH-QUALITY REQUIREMENTS</h1>
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
              <div className="col-lg-12">
                <p>
                Proposed solutions are required to explain the value they bring to the organization. Traditional solution definition techniques focus more on design than on business value and, therefore, fall short of fulfilling the intended business needs.
                </p>
                <p>
                Learn how to justify the business value of your proposed solution to the organization and to demonstrate how it aligns to the mission goals and objectives.
                </p>
              </div>
              <div className="col-lg-11 offset-xl-1">
                <div className="faq-accordion">
                  <div className="accordion mt-5" id="accordion">
                    <AnalysisAccordion />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="sect d-none" id="cause-mapping">
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
                  <h1 className="title h2">CAUSE MAPPING: EFFECTIVE ROOT CAUSE ANALYSIS FACILITATION & DOCUMENTATION</h1>
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
              <div className="col-lg-12">
                <p>
                The Cause Mapping method is a simple, objective, evidence-based approach for breaking any issue into its cause-and-effect relationships so that everyone sees the same accurate information. This training provides valuable problem-solving skills that you can immediately apply within your organization.
                </p>
              </div>
              <div className="col-lg-11 offset-xl-1">
                <div className="faq-accordion">
                  <div className="accordion mt-5" id="accordion">
                    <AnalysisAccordion />
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

export default Analysis;
