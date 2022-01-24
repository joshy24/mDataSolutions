import React, { useEffect } from "react";
import sal from "sal.js";
import DataAccordion from "./DataAccordion";

function BigData(props) {
  useEffect(() => {
    sal();
  }, []);
  return (
    <>
      <div className="sect" id="dataHome">
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
                  <h1 className="title h2">BIG DATA</h1>
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
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    <DataAccordion />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="sect d-none" id="hadoop-development">
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
                    HADOOP® DEVELOPMENT FOR BIG DATA SOLUTIONS
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
              <div className="col-lg-12">
                <p>
                  The availability of large data sets presents new opportunities
                  and challenges to organizations of all sizes. This course
                  provides the hands-on programming skills to develop solutions
                  that run on the Apache Hadoop platform to efficiently process
                  a variety of Big Data. Additionally, you learn to test and
                  deploy Big Data solutions on commodity clusters.
                </p>
              </div>
              <div className="col-lg-12 my-2">
                  <h5>About Big Data Hadoop Development</h5>
                  <div className="accordion-item">
                    <h6 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#hadoop1"
                        aria-expanded="false"
                        aria-controls="hadoop1"
                      >
                        01. WHAT IS BIG DATA HADOOP?
                      </button>
                    </h6>
                    <div
                      id="hadoop1"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        <p>
                          Hadoop Training will give you the technical
                          understanding required to manage a Hadoop cluster,
                          either in a development or a production environment.
                          This course introduces the fundamental concepts of
                          Apache Hadoop™ and Hadoop Cluster. You will get the
                          background to be able to configure, deploy and
                          maintain a Hadoop cluster, and to confidently navigate
                          the Hadoop ecosystem.
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
                        data-bs-target="#hadoop2"
                        aria-expanded="false"
                        aria-controls="hadoop2"
                      >
                        02. WHY TAKE BIG DATA HADOOP TRAINING?
                      </button>
                    </h6>
                    <div
                      id="hadoop2"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        <p>
                          Hadoop Training will give you a jumpstart in
                          understanding and solving real world problems that you
                          may come across while working on Hadoop Cluster.
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
                        data-bs-target="#hadoop3"
                        aria-expanded="false"
                        aria-controls="hadoop3"
                      >
                        03. WHAT ARE THE PREREQUISITES TO TAKE UP BIG DATA
                        HADOOP CERTIFICATION?
                      </button>
                    </h6>
                    <div
                      id="hadoop3"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        <p>
                          There are no prerequisites for attending this course.
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
                        data-bs-target="#hadoop4"
                        aria-expanded="false"
                        aria-controls="hadoop4"
                      >
                        04. WHO SHOULD TAKE UP BIG DATA HADOOP COURSE?
                      </button>
                    </h6>
                    <div
                      id="hadoop4"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        <p>
                          Students <br />
                          DBAs <br />
                          System Administrators <br />
                          Software Architects <br />
                          Data Warehouse Professionals <br />
                          IT Managers
                          <br />
                          Software Developers who are interested in learning
                          Hadoop Cluster Administration
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
                        data-bs-target="#hadoop5"
                        aria-expanded="false"
                        aria-controls="hadoop5"
                      >
                        05. MDATA SOLUTIONS TRAINING BENEFITS
                      </button>
                    </h6>
                    <div
                      id="hadoop5"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        <p>
                          MData Solutions offers you to deliver the requisite
                          quality and efficiency by its globally recognized ITSM
                          training and certification courses which enable
                          individuals and companies to formulate the project in
                          an efficient way. You furthermore have the selection
                          of taking our online trainer led classroom or one to
                          one Big Data Hadoop Administrator Training Course at
                          your very own convenience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              <div className="col-lg-11 offset-xl-1 mt-5">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    <DataAccordion />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="sect d-none" id="intro-to-data-science">
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
                  <h1 className="title h2">INTRODUCTION TO DATA SCIENCE FOR BIG DATA ANALYTICS</h1>
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
                Big Data Analytics allow organizations to build competitive strategies around data-driven insights and derive value from vast amounts of untapped data. Whether you are tracking the efficiency of a warehouse or predicting how and when to modify staffing levels in a call center, this course provides the knowledge and skills required to reach the next level of decision-making maturity.
                </p>
              </div>
              <div className="col-lg-11 offset-xl-1 mt-5">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    <DataAccordion />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="sect d-none" id="extracting-business-value">
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
                  <h1 className="title h2">EXTRACTING BUSINESS VALUE FROM BIG DATA</h1>
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
                Big Data Analytics allow organizations to build competitive strategies around data-driven insights and derive value from vast amounts of untapped data. Whether you are tracking the efficiency of a warehouse or predicting how and when to modify staffing levels in a call center, this course provides the knowledge and skills required to reach the next level of decision-making maturity.
                </p>
              </div>
              <div className="col-lg-11 offset-xl-1 mt-5">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    <DataAccordion />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="sect d-none" id="intro-to-cloud-computing">
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
                  <h1 className="title h2">INTRODUCTION TO CLOUD COMPUTING</h1>
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
                This introduction to cloud computing technologies course provides the training and knowledge required to effectively evaluate and assess the business and technical benefits of cloud computing and analyze cloud application use for your organization.
                </p>
              </div>
              <div className="col-lg-11 offset-xl-1 mt-5">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    <DataAccordion />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="sect d-none" id="essentials-of-cloud-computing">
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
                  <h1 className="title h2">ESSENTIALS OF CLOUD COMPUTING</h1>
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
                As organizations transition to cloud technologies, cloud computing security issues are a vital concern. In order to protect sensitive data and maintain regulatory compliance, you must address the unique cyber security challenges faced when moving to a cloud environment. This course provides hands-on experience identifying and resolving the security issues specific to public and private clouds.
                </p>
              </div>
              <div className="col-lg-11 offset-xl-1 mt-5">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    <DataAccordion />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="sect d-none" id="aws-and-cloud-computing">
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
                  <h1 className="title h2">AMAZON WEB SERVICES™ (AWS) & CLOUD COMPUTING</h1>
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
                Learn about Amazon Web Services (AWS) cloud computing solutions and receive training to advantage of the comprehensive range of IT cloud products in order to access reliable and scalable computing resources. In this course, you gain the skills needed to fully leverage AWS to deliver significant technical and business benefits.
                </p>
              </div>
              <div className="col-lg-11 offset-xl-1 mt-5">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    <DataAccordion />
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

export default BigData;
