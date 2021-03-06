import React, {useEffect} from "react";
import RiskAccordion from "./RiskAccordion";
import sal from "sal.js";

function Risks(props) {
  useEffect(() => {
    sal();
  }, []);

  return (
    <>
      <div className="sect" id="riskHome">
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
                    RISK MANAGEMENT, SECURITY & COMPLIANCE
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
                    <RiskAccordion />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="sect d-none" id="cism-training-course">
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
                    CISM- CERTIFIED INFORMATION SECURITY MANAGERCERTIFICATION
                    TRAINING COURSE
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
                  MDATA Solutions CISM course provides a common body of
                  knowledge for information security management. The focus of
                  this course is on information risk management as the basis of
                  information security.
                </p>
                <p>
                  Additionally, material on broader issues is included such as
                  how to govern information security as well as information on
                  practical issues such as developing and managing an
                  information security program and how to respond when incidents
                  arise.
                </p>
              </div>
              <div className="col-lg-11 offset-xl-1">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    <RiskAccordion />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="sect d-none" id="cisa-training-course">
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
                    CISA- CERTIFIED INFORMATION SYSTEMS AUDITOR CERTIFICATION
                    TRAINING COURSE
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
                  An increasing number of businesses and organizations recognize
                  CISA training as the standard for auditing practices. With
                  that in mind, it doesn't make sense for you, as an IT
                  professional, not to have CISA certification.
                </p>
                <p>
                  By becoming a certified information systems auditor, you
                  become an expert in the systems security that so many
                  businesses and government entities need in order to guarantee
                  that they are able to operate as smoothly as possible. Here at
                  MDATA Solutions, we offer comprehensive training for IT
                  professionals who want to become CISA certified.
                </p>
              </div>
              <div className="col-lg-11 offset-xl-1">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    <RiskAccordion />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="sect d-none" id="social-engineering-deceptions-defenses">
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
                    SOCIAL ENGINEERING DECEPTIONS AND DEFENSES
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
                  Social engineering has been considered the number one cyber
                  security threat by many industry resources. This course
                  provides the skills to defend against social engineering
                  attacks that threaten organizational security.
                </p>
                <p>
                  Through hands-on exercises, you learn the motivations and
                  methods used by social engineers to better protect your
                  organization and prevent data breaches.
                </p>
              </div>
              <div className="col-lg-11 offset-xl-1">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    <RiskAccordion />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="sect d-none" id="cyber-security-risk-assessment">
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
                    CYBER SECURITY RISK ASSESSMENT & MANAGEMENT
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
                  Laws and regulations impose stringent cyber security
                  requirements on all organizations. By employing the
                  standards-based risk management process described in this
                  course, you will establish and maintain an acceptable security
                  posture and protect your organization from unacceptable
                  losses.
                </p>
              </div>
              <div className="col-lg-11 offset-xl-1">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    <RiskAccordion />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="sect d-none" id="securing-web-applications">
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
                    SECURING WEB APPLICATIONS, SERVICES AND SERVERS
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
                  Cyber security is a serious challenge today as attackers
                  specifically target web application vulnerabilities. As a
                  result, organizations must integrate robust security measures
                  into the web application development process. This course
                  provides in-depth, hands-on experience securing web-based
                  applications and host servers.
                </p>
              </div>
              <div className="col-lg-11 offset-xl-1">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    <RiskAccordion />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="sect d-none" id="vulnerability-assessment">
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
                    VULNERABILITY ASSESSMENT: PROTECTING YOUR ORGANIZATION
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
                  Knowledge of vulnerability assessment and hacking techniques
                  allows you to detect weaknesses before your networks are
                  attacked. In this course, you learn to configure vulnerability
                  scanners to detect points of exposure and prevent network
                  exploitation. You acquire the knowledge to assess the risk to
                  your enterprise from an array of vulnerabilities and to
                  minimize costly security breaches.
                </p>
              </div>
              <div className="col-lg-11 offset-xl-1">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    <RiskAccordion />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="sect d-none" id="penetration-testing">
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
                    PENETRATION TESTING: TOOLS AND TECHNIQUES
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
                  As network breaches become increasingly sophisticated,
                  proactive defenses are essential to counter malicious attacks.
                  In this course, you discover weaknesses in your network using
                  the same mindset and methods as hackers. You acquire the
                  knowledge to test and exploit internal and external defenses.
                  You learn countermeasures to reduce risk to your enterprise.
                </p>
              </div>
              <div className="col-lg-11 offset-xl-1">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    <RiskAccordion />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="sect d-none" id="cap-certification-course">
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
                    CERTIFIED AUTHORIZATION PROFESSIONAL (CAP??) CERTIFICATION
                    COURSE
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
                  The CAP?? (Certified Authorization Professional) certification
                  from (ISC)2?? is a very objective measure of the skills,
                  abilities and knowledge required for all persons involved in
                  the overall process of maintaining and authorizing information
                  systems. This credential specifically applies to those who are
                  responsible for formalizing processes that are used to
                  establish security requirements and documentation as well as
                  to assess risk. The decisions made by these individuals will
                  help to ensure that information systems possess proper
                  security commensurate with the correct level of exposure to
                  any potential risks, as well as damage to individuals or
                  assets. Security authorization includes a risk management
                  approach that is tiered in such a way as to evaluate both the
                  strategic and tactical risk across an enterprise.
                </p>
              </div>
              <div className="col-lg-11 offset-xl-1">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    <RiskAccordion />
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

export default Risks;
