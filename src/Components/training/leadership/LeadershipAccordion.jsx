import React from "react";
import $ from "jquery";

export default function LeadershipAccordion() {
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
              HOW TO COMMUNICATE WITH DIPLOMACY, TACT AND CREDIBILITY
            </button>
          </h6>
          <div
            id="faq1"
            className="accordion-collapse collapse"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              <p>
                Get your point across with a positive professional image. This
                communication skills seminar is for anyone who wants to hear
                others clearly and respond appropriately when feeling...
              </p>
              <p className="mt-3">
                <a onClick={(e) => togglePageSection(e, "how-to-communicate")} href="#">
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
              DEVELOPING EFFECTIVE BUSINESS CONVERSATION SKILLS
            </button>
          </h6>
          <div
            id="faq2"
            className="accordion-collapse collapse"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              <p>
                Enhancing and expanding your conversation skills can help you
                create buy-in for your ideas, make better informed decisions and
                obtain committed action from others.
              </p>
              <p className="mt-3">
                <a onClick={(e) => togglePageSection(e, "developing-effective-business-conversation-skills")} href="#">
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
              LEADERSHIP SKILLS FOR SUPERVISORS/THE PROFESSIONAL SUPERVISORS
            </button>
          </h6>
          <div
            id="faq3"
            className="accordion-collapse collapse"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              <p>
                With a host of new challenges and responsibilities to tackle,
                new supervisors need training that helps them adjust to their
                new role. Learning how to supervise your...
              </p>
              <p className="mt-3">
                <a onClick={(e) => togglePageSection(e, "leadership-skills")} href="#">
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
              PROBLEM SOLVING AND DECISION MAKING
            </button>
          </h6>
          <div
            id="faq4"
            className="accordion-collapse collapse"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              <p>
                Despite all the natural decision making that goes on and the
                problem solving we do, some people are very uncomfortable with
                having to make decisions. You may know someone...
              </p>
              <p className="mt-3">
                <a onClick={(e) => togglePageSection(e, "problem-solving")} href="#">
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
              BUILDING BETTER TEAMS
            </button>
          </h6>
          <div
            id="faq5"
            className="accordion-collapse collapse"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              <p>
                Teams are an important building block of successful
                organizations. Whether the focus is on service, quality, cost,
                value, speed, efficiency, performance, or other similar...
              </p>
              <p className="mt-3">
                <a onClick={(e) => togglePageSection(e, "building-better-teams")} href="#">
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
              CONFLICT RESOLUTIONS
            </button>
          </h6>
          <div
            id="faq6"
            className="accordion-collapse collapse"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              <p>
                Many people see conflict as a negative experience. In fact,
                conflict is a necessary part of our personal growth and
                development. Think of when you were trying...
              </p>
              <p className="mt-3">
                <a onClick={(e) => togglePageSection(e, "conflict-resolutions")} href="#">
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
              DELEGATION - THE ART OF DELEGATING EFFECTIVELY
            </button>
          </h6>
          <div
            id="faq7"
            className="accordion-collapse collapse"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              <p>
                Effective delegation is one of the most valuable skills you can
                master. It reduces your workload and develops employee skills.
                Delegating prepares employees...
              </p>
              <p className="mt-3">
                <a onClick={(e) => togglePageSection(e, "delegation")} href="#">
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
              GIVING EFFECTIVE FEEDBACK
            </button>
          </h6>
          <div
            id="faq8"
            className="accordion-collapse collapse"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              <p>
                This course is designed to help workplace leaders learn how to
                provide feedback any time that the message is due. Whether
                feedback is formal...
              </p>
              <p className="mt-3">
                <a onClick={(e) => togglePageSection(e, "giving-effective-feedback")} href="#">
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
              WORK PLACE VIOLENCE
            </button>
          </h6>
          <div
            id="faq9"
            className="accordion-collapse collapse"
            data-bs-parent="#accordion"
          >
            <div className="accordion-body">
              <p>
                Violence of any sort has many roots. Sometimes there are warning
                signs of workplace violence, but this is not always the case. It
                is up to us to learn whatever we can to prevent, identify, and
                mitigate any threats, and this comprehensive workshop includes
                everything a workplace leader needs to get started.
              </p>
              <p className="mt-3">
                <a onClick={(e) => togglePageSection(e, "workplace-violence")} href="#">
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
