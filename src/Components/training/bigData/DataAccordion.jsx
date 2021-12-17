import React from "react";
import $ from "jquery";

export default function DataAccordion() {
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
              HADOOP® DEVELOPMENT FOR BIG DATA SOLUTIONS
            </button>
          </h6>
          <div
            id="faq1"
            className="accordion-collapse collapse"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              <p>
                The availability of large data sets presents new opportunities
                and challenges to organizations of all sizes. This course
                provides...
              </p>
              <p className="mt-3">
                <a onClick={(e) => togglePageSection(e, "hadoop-development")} href="#">
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
              INTRODUCTION TO DATA SCIENCE FOR BIG DATA ANALYTICS
            </button>
          </h6>
          <div
            id="faq2"
            className="accordion-collapse collapse"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              <p>
                Big Data Analytics allow organizations to build competitive
                strategies around data-driven insights and derive value from
                vast amounts of untapped data.
              </p>
              <p className="mt-3">
                <a onClick={(e) => togglePageSection(e, "intro-to-data-science")} href="#">
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
              EXTRACTING BUSINESS VALUE FROM BIG DATA
            </button>
          </h6>
          <div
            id="faq3"
            className="accordion-collapse collapse"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              <p>
                Big Data Analytics allow organizations to build competitive
                strategies around data-driven insights and derive value from
                vast amounts of untapped data.
              </p>
              <p className="mt-3">
                <a onClick={(e) => togglePageSection(e, "extracting-business-value")} href="#">
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
              INTRODUCTION TO CLOUD COMPUTING
            </button>
          </h6>
          <div
            id="faq4"
            className="accordion-collapse collapse"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              <p>
                This introduction to cloud computing technologies course
                provides the training andknowledge required to effectively
                evaluate and assess...
              </p>
              <p className="mt-3">
                <a onClick={(e) => togglePageSection(e, "intro-to-cloud-computing")} href="#">
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
              ESSENTIALS OF CLOUD COMPUTING
            </button>
          </h6>
          <div
            id="faq5"
            className="accordion-collapse collapse"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              <p>
                As organizations transition to cloud technologies, cloud
                computing security issues are a vital concern. In order to
                protect sensitive data and maintain regulatory...
              </p>
              <p className="mt-3">
                <a onClick={(e) => togglePageSection(e, "essentials-of-cloud-computing")} href="#">
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
              AMAZON WEB SERVICES™ (AWS) & CLOUD COMPUTING
            </button>
          </h6>
          <div
            id="faq6"
            className="accordion-collapse collapse"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              <p>
                Learn about Amazon Web Services (AWS) cloud computing solutions
                and receive training to advantage of the comprehensive range of
                IT cloud products in order to access...
              </p>
              <p className="mt-3">
                <a onClick={(e) => togglePageSection(e, "aws-and-cloud-computing")} href="#">
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
