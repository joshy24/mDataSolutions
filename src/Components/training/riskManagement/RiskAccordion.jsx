import React from "react";
import $ from "jquery";

export default function RiskAccordion() {
  const togglePageSection = (e, section) => {
    console.log(section);
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
    <div className="row">
      <div className="col-lg-6">
        <div className="accordion-item">
          <h6 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq1"
              aria-expanded="false"
              aria-controls="faq1"
            >
              CISM- CERTIFIED INFORMATION SECURITY MANAGER CERTIFICATION
              TRAINING COURSE
            </button>
          </h6>
          <div
            id="faq1"
            className="accordion-collapse collapse"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              <p>
                MDATA Solutions CISM course provides a common body of knowledge
                for information security management.
              </p>
              <p className="mt-3">
                <a onClick={(e) => togglePageSection(e, "cism-training-course")} href="#">
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="accordion-item">
          <h6 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq2"
              aria-expanded="false"
              aria-controls="faq2"
            >
              CISA- CERTIFIED INFORMATION SYSTEMS AUDITOR CERTIFICATION TRAINING
              COURSE
            </button>
          </h6>
          <div
            id="faq2"
            className="accordion-collapse collapse"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              <p>
                An increasing number of businesses and organizations recognize
                CISA training as the standard for auditing practices.
              </p>
              <p className="mt-3">
                <a onClick={(e) => togglePageSection(e, "cisa-training-course")} href="#">
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="accordion-item">
          <h6 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq3"
              aria-expanded="false"
              aria-controls="faq3"
            >
              SOCIAL ENGINEERING DECEPTIONS AND DEFENSES
            </button>
          </h6>
          <div
            id="faq3"
            className="accordion-collapse collapse"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              <p>
                Social engineering has been considered the number one cyber
                security threat by many industry resources. This course
                provides...
              </p>
              <p className="mt-3">
                <a onClick={(e) => togglePageSection(e, "social-engineering-deceptions-defenses")} href="#">
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="accordion-item">
          <h6 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq4"
              aria-expanded="false"
              aria-controls="faq4"
            >
              CYBER SECURITY RISK ASSESSMENT & MANAGEMENT
            </button>
          </h6>
          <div
            id="faq4"
            className="accordion-collapse collapse"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              <p>
                Laws and regulations impose stringent cyber security
                requirements on all organizations. By employing the
                standards-based risk...
              </p>
              <p className="mt-3">
                <a onClick={(e) => togglePageSection(e, "cyber-security-risk-assessment")} href="#">
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="accordion-item">
          <h6 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq5"
              aria-expanded="false"
              aria-controls="faq5"
            >
              SECURING WEB APPLICATIONS, SERVICES AND SERVERS
            </button>
          </h6>
          <div
            id="faq5"
            className="accordion-collapse collapse"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              <p>
                Cyber security is a serious challenge today as attackers
                specifically target web application vulnerabilities. As a
                result, organizations...
              </p>
              <p className="mt-3">
                <a onClick={(e) => togglePageSection(e, "securing-web-applications")} href="#">
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="accordion-item">
          <h6 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq6"
              aria-expanded="false"
              aria-controls="faq6"
            >
              VULNERABILITY ASSESSMENT: PROTECTING YOUR ORGANIZATION
            </button>
          </h6>
          <div
            id="faq6"
            className="accordion-collapse collapse"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              <p>
                Knowledge of vulnerability assessment and hacking techniques
                allows you to detect weaknesses before your networks are
                attacked.
              </p>
              <p className="mt-3">
                <a onClick={(e) => togglePageSection(e, "vulnerability-assessment")} href="#">
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="accordion-item">
          <h6 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq7"
              aria-expanded="false"
              aria-controls="faq7"
            >
              PENETRATION TESTING: TOOLS AND TECHNIQUES
            </button>
          </h6>
          <div
            id="faq7"
            className="accordion-collapse collapse"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              <p>
                As network breaches become increasingly sophisticated, proactive
                defenses are essential to counter malicious attacks.
              </p>
              <p className="mt-3">
                <a onClick={(e) => togglePageSection(e, "penetration-testing")} href="#">
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="accordion-item">
          <h6 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq8"
              aria-expanded="false"
              aria-controls="faq8"
            >
              CERTIFIED AUTHORIZATION PROFESSIONAL (CAP®) CERTIFICATION COURSE
            </button>
          </h6>
          <div
            id="faq8"
            className="accordion-collapse collapse"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              <p>
                The CAP® (Certified Authorization Professional) certification
                from (ISC)2® is a very objective measure of the skills,
                abilities and knowledge required for all persons...
              </p>
              <p className="mt-3">
                <a onClick={(e) => togglePageSection(e, "cap-certification-course")} href="#">
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
