import React from "react";
import $ from "jquery";

export default function OfferingsAcc() {
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
              INTRODUCTION TO PROJECT MANAGEMENT
            </button>
          </h6>
          <div
            id="faq1"
            className="accordion-collapse collapse"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              <p>
                Introduction to Project Management gives you the foundation,
                techniques and tools to manage each stage of the project life
                cycle...
              </p>
              <p className="mt-3">
                <a
                  onClick={(e) => togglePageSection(e, "intro-to-pm")}
                  href="#"
                >
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
              EXECUTIVE PROJECT MANAGEMENT OVERVIEW
            </button>
          </h6>
          <div
            id="faq2"
            className="accordion-collapse collapse"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              <p>
                To avoid delay, disruption and rework when managing large,
                complex projects, executive managers need strong leadership...
              </p>
              <p className="mt-3">
                <a
                  onClick={(e) => togglePageSection(e, "exec-pm-overview")}
                  href="#exec-pm-overview"
                >
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
              INFORMATION TECHNOLOGY (IT) PROJECT MANAGEMENT
            </button>
          </h6>
          <div
            id="faq3"
            className="accordion-collapse collapse"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              <p>
                In this comprehensive introductory course, you’ll discover
                critical success factors and hidden risks inherent in IT
                projects
              </p>
              <p className="mt-3">
                <a onClick={(e) => togglePageSection(e, "it-pm")} href="#it-pm">
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
              PROJECT QUALITY MANAGEMENT
            </button>
          </h6>
          <div
            id="faq4"
            className="accordion-collapse collapse"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              <p>
                Improve your project processes to achieve higher quality
                products, services, or results. This intensive course focuses...
              </p>
              <p className="mt-3">
                <a
                  onClick={(e) => togglePageSection(e, "project-quality-mgt")}
                  href="#project-quality-mgt"
                >
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
              PROJECT MANAGEMENT FOR P.A. AND ADMINISTRATORS
            </button>
          </h6>
          <div
            id="faq5"
            className="accordion-collapse collapse"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              <p>
                This course provides an insight for PA’s and other Senior
                Administrators into how to best manage the sort of projects...
              </p>
              <p className="mt-3">
                <a
                  onClick={(e) => togglePageSection(e, "pm-pa-admin")}
                  href="#pm-pa-admin"
                >
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
              PROJECT MANAGEMENT FOR AUDITORS
            </button>
          </h6>
          <div
            id="faq6"
            className="accordion-collapse collapse"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              <p>
                An audit is simply a project. Yet few auditors take advantage of
                techniques used by project managers to bring their projects...
              </p>
              <p className="mt-3">
                <a
                  onClick={(e) => togglePageSection(e, "pm-for-auditors")}
                  href="#pm-for-auditors"
                >
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
              BUILDING SUCCESSFUL INTERPERSONAL & TEAM COMMUNICATION
            </button>
          </h6>
          <div
            id="faq7"
            className="accordion-collapse collapse"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              <p>
                Individual and team success depends upon the ability of
                individuals to communicate with others and be understood.
              </p>
              <p className="mt-3">
                <a
                  onClick={(e) =>
                    togglePageSection(
                      e,
                      "building-successful-interpersonal-team-communication"
                    )
                  }
                  href="#building-successful-interpersonal-team-communication"
                >
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
              PROJECT PROCUREMENT MANAGEMENT
            </button>
          </h6>
          <div
            id="faq8"
            className="accordion-collapse collapse"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              <p>
                A strategic make-lease-buy decision can critically impact a
                project’s bottom line. Learn best practices to procure
                outside...
              </p>
              <p className="mt-3">
                <a
                  onClick={(e) =>
                    togglePageSection(e, "project-procurement-mgt")
                  }
                  href="#project-procurement-mgt"
                >
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
              data-bs-target="#faq9"
              aria-expanded="false"
              aria-controls="faq9"
            >
              PRACTICAL PROJECT MANAGEMENT SIMULATION
            </button>
          </h6>
          <div
            id="faq9"
            className="accordion-collapse collapse"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              <p>
                MData Solutions has developed the Practical Project Management
                (PPM) course to help project managers apply project
                management...
              </p>
              <p className="mt-3">
                <a
                  onClick={(e) =>
                    togglePageSection(e, "practical-pm-simulation")
                  }
                  href="#practical-pm-simulation"
                >
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
              data-bs-target="#faq10"
              aria-expanded="false"
              aria-controls="faq10"
            >
              BUILDING A SUCCESSFUL PROJECT MANAGEMENT OFFICE (PMO)
            </button>
          </h6>
          <div
            id="faq10"
            className="accordion-collapse collapse"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              <p>
                A Project Management Office (PMO) is vital to ensure project
                consistency, efficiency and effectiveness across...
              </p>
              <p className="mt-3">
                <a
                  onClick={(e) => togglePageSection(e, "project-mgt-office")}
                  href="#project-mgt-office"
                >
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
              data-bs-target="#faq11"
              aria-expanded="false"
              aria-controls="faq11"
            >
              MANAGING STAKEHOLDERS EXPECTATIONS AND RELATIONSHIP
            </button>
          </h6>
          <div
            id="faq11"
            className="accordion-collapse collapse"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              <p>
                Recognizing stakeholders' expectations is a critical element in
                managing successful projects; especially in these days...
              </p>
              <p className="mt-3">
                <a
                  onClick={(e) =>
                    togglePageSection(
                      e,
                      "managing-stakeholders-expectations-and-relationship"
                    )
                  }
                  href="#managing-stakeholders-expectations-and-relationship"
                >
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
              data-bs-target="#faq12"
              aria-expanded="false"
              aria-controls="faq12"
            >
              MANAGING MULTIPLE AND COMPLEX PROJECTS
            </button>
          </h6>
          <div
            id="faq12"
            className="accordion-collapse collapse"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              <p>
                Managing multiple projects is one of today's most pressing
                business challenges. In this hands-on, project driven course...
              </p>
              <p className="mt-3">
                <a
                  onClick={(e) =>
                    togglePageSection(
                      e,
                      "managing-multiple-and-complex-projects"
                    )
                  }
                  href="#managing-multiple-and-complex-projects"
                >
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
              data-bs-target="#faq13"
              aria-expanded="false"
              aria-controls="faq13"
            >
              ACHIEVING LEADERSHIP SUCCESS THROUGH PEOPLE
            </button>
          </h6>
          <div
            id="faq13"
            className="accordion-collapse collapse"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              <p>
                The most successful leaders are those with the best people
                skills, especially during the most difficult circumstances.
              </p>
              <p className="mt-3">
                <a
                  onClick={(e) =>
                    togglePageSection(
                      e,
                      "achieving-leadership-success-through-people"
                    )
                  }
                  href="#achieving-leadership-success-through-people"
                >
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
              data-bs-target="#faq14"
              aria-expanded="false"
              aria-controls="faq14"
            >
              CAP - CHANGE ACCELERATION PROCESS TRAINING
            </button>
          </h6>
          <div
            id="faq14"
            className="accordion-collapse collapse"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              <p>
                Do you successfully manage Change in your organization? Are you
                implementing a new enterprise application, new operation
                process,...
              </p>
              <p className="mt-3">
                <a
                  onClick={(e) =>
                    togglePageSection(e, "change-acceleration-process-training")
                  }
                  href="#change-acceleration-process-training"
                >
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
              data-bs-target="#faq15"
              aria-expanded="false"
              aria-controls="faq15"
            >
              STRATEGIC SYSTEM AND BUSINESS PROCESS IMPROVEMENT
            </button>
          </h6>
          <div
            id="faq15"
            className="accordion-collapse collapse"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              <p>
                In this course, you'll learn to model business processes as they
                are currently enacted, assess the quality of those business
                processes...
              </p>
              <p className="mt-3">
                <a
                  onClick={(e) =>
                    togglePageSection(
                      e,
                      "strategic-system-and-business-process-improvement"
                    )
                  }
                  href="#strategic-system-and-business-process-improvement"
                >
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
