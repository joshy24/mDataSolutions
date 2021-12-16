import React from "react";
import $ from "jquery";

export default function AnalysisAccordion() {
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
              PRINCIPLES OF BUSINESS ANALYSIS
            </button>
          </h6>
          <div
            id="faq1"
            className="accordion-collapse collapse"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              <p>
                This course is designed for business and IT professionals who
                want to make informed decisions about the needs...
              </p>
              <p className="mt-3">
                <a onClick={(e) => togglePageSection(e, "principle-of-business-analysis")} href="#">
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
              CRAFTING HIGH-QUALITY REQUIREMENTS
            </button>
          </h6>
          <div
            id="faq2"
            className="accordion-collapse collapse"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              <p>
                Whether outsourced or in-house, every new development project
                needs exceptional requirements management.
              </p>
              <p className="mt-3">
                <a onClick={(e) => togglePageSection(e, "crafting-high-quality-requirements")} href="#">
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
              BUILDING BUSINESS CASES
            </button>
          </h6>
          <div
            id="faq3"
            className="accordion-collapse collapse"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              <p>
                Proposed solutions are required to explain the value they bring
                to the organization. Traditional solution definition techniques
                focus more...
              </p>
              <p className="mt-3">
                <a onClick={(e) => togglePageSection(e, "building-business-cases")} href="#">
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
              CAUSE MAPPING: EFFECTIVE ROOT CAUSE ANALYSIS FACILITATION &
              DOCUMENTATION
            </button>
          </h6>
          <div
            id="faq4"
            className="accordion-collapse collapse"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              <p>
                The Cause Mapping method is a simple, objective, evidence-based
                approach for breaking any issue into its cause-and-effect
                relationships...
              </p>
              <p className="mt-3">
                <a onClick={(e) => togglePageSection(e, "cause-mapping")} href="#">
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
