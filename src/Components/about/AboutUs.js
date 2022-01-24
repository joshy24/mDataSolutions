import React, { useEffect } from "react";
import sal from "sal.js";
import about1 from '../../images/about1.png'

const AboutUs = () => {
  useEffect(() => {
    sal();
  }, []);
  return (
    <>
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
                <h1 className="title h2">About Us</h1>
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
                  src={about1}
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
              <div className="section-heading heading-left mb-0">
                <span className="subtitle">Get to know us</span>
                <h3 className="title">About MData Solutions</h3>
              </div>
              <p>
                MData Solutions is a top technology and business consulting firm
                focused on serving the comprehensive technology, project
                management, business transformation and technical training needs
                of businesses and corporations across the entire business
                lifecycle. We design and deploy fresh and innovative solutions
                to deliver value, and by implication deliver growth to our
                partners.
              </p>
              <p>
                Our projects cut across various sectors and at all stages of an
                organization’s lifecycle. Over the years, we have been involved
                in projects for The Government, multinational corporations,
                Medium and Small Organizations, NGOs, as well as High Net-worth
                individuals, providing high quality, value-driven solutions.
              </p>
              <p>
                Digital Transformation & Project Management are our core areas
                of competence and expertise. We are committed to providing our
                customers with unparalleled value, helping them realize new
                opportunities through our Solutions, understanding that each
                organization, sector, country and culture has diverse management
                and security needs. Through a focused careful assessment
                approach, Mdata Solutions is able to design and implement
                solutions individually suited to a client's current set of
                priorities, development goals and budgetary concerns.
              </p>
              <p>
                The Mdata team includes professionals from diverse roles
                including positions in consulting, product development, project
                management, information technology, telecommunications,
                customized training and professional services organizations. We
                are a team of young, disruptive and innovative professionals
                with requisite experience in solving difficult problems and
                delivering quality high-value projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
