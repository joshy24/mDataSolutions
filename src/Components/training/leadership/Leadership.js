import React, { useEffect } from "react";
import sal from "sal.js";
import LeadershipAccordion from "./LeadershipAccordion";
import business from "../../../images/business.png";

function Leadership(props) {
  useEffect(() => {
    sal();
  }, []);
  return (
    <>
      <div className="sect" id="leadershipHome">
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
                  <h1 className="title h2">LEADERSHIP & SOFT SKILLS</h1>
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
                    src={business}
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
                    <LeadershipAccordion />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="sect d-none" id="how-to-communicate">
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
                    HOW TO COMMUNICATE WITH DIPLOMACY, TACT AND CREDIBILITY
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
                  Get your point across with a positive professional image. This
                  communication skills seminar is for anyone who wants to hear
                  others clearly and respond appropriately when feeling
                  challenged, overwhelmed or “on the spot”…gain collaboration
                  when presenting new ideas instead of trying to seize
                  control…and have thoughtful and diplomatic interactions in
                  difficult situations.
                </p>
                <p>
                  How well you communicate can make or break your professional
                  image, influencing how others view your work, your
                  performance…even your technical skill sets and your prospects
                  for career mobility. This communication skills seminar will
                  teach you how to choose and use the most appropriate words and
                  emotional tone for every business situation. In just two days,
                  you'll gain insights into your communication style and that of
                  others, while providing you with skills for clearly and
                  effectively receiving and transmitting information, ideas,
                  thoughts, feelings and needs.
                </p>
              </div>
              <div className="col-lg-11 offset-xl-1 mt-5">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    <LeadershipAccordion />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div
        className="sect d-none"
        id="developing-effective-business-conversation-skills"
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
                  <h1 className="title h2">
                    DEVELOPING EFFECTIVE BUSINESS CONVERSATION SKILLS
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
                  <strong>
                    <small>
                      Master conversational skills to get attention and gain
                      credibility
                    </small>
                  </strong>
                </p>
                <p>
                  Enhancing and expanding your conversation skills can help you
                  create buy-in for your ideas, make better informed decisions
                  and obtain committed action from others. After assessing your
                  present communication style, you’ll practice shaping engaging,
                  clear and effective business conversations through real-world
                  scenarios. Each interactive exercise is designed to help you
                  build conversational bridges at work, get your point across
                  and steer discussions in the right direction.
                </p>
                <p>
                  Are your spoken messages organized and coherent or rambling
                  and unfocused? Do you put off business conversations or are
                  you able to work through issues with confidence and empathy?
                  Do you know when to talk, when to listen and when to ask
                  questions? Improve your business conversation skills with this
                  seminar on effective business communication.
                </p>
              </div>
              <div className="col-lg-11 offset-xl-1 mt-5">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    <LeadershipAccordion />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="sect d-none" id="leadership-skills">
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
                    LEADERSHIP SKILLS FOR SUPERVISORS/THE PROFESSIONAL
                    SUPERVISORS
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
                  With a host of new challenges and responsibilities to tackle,
                  new supervisors need training that helps them adjust to their
                  new role. Learning how to supervise your new employees on a
                  trial and error basis can lead to discouragement. This
                  three-day workshop can help you overcome many of the problems
                  a new supervisor may encounter, and to set the groundwork for
                  a successful change in your working life!
                </p>
              </div>
              <div className="col-lg-11 offset-xl-1 mt-5">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    <LeadershipAccordion />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="sect d-none" id="problem-solving">
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
                  <h1 className="title h2">PROBLEM SOLVING AND DECISION MAKING</h1>
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
                  Despite all the natural decision making that goes on and the
                  problem solving we do, some people are very uncomfortable with
                  having to make decisions. You may know someone who has a hard
                  time making decisions about what to eat, never mind the
                  internal wrestling they go through in order to take on major
                  decisions at work. Likewise, we've probably all looked at a
                  solution to something and said, “I could have thought of
                  that.” The key to finding creative solutions is not just
                  creativity, although that will certainly help. The answer
                  rests in our ability to identify options, research them, and
                  then put things together in a way that works.
                </p>
              </div>
              <div className="col-lg-11 offset-xl-1 mt-5">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    <LeadershipAccordion />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="sect d-none" id="building-better-teams">
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
                  <h1 className="title h2">BUILDING BETTER TEAMS</h1>
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
                  Teams are an important building block of successful
                  organizations. Whether the focus is on service, quality, cost,
                  value, speed, efficiency, performance, or other similar goals,
                  teams are the basic unit that supports most organizations.
                </p>
                <p>
                  With teams at the core of corporate strategy, your success as
                  an organization can often depend on how well you and other
                  team members operate together. How are your problem-solving
                  skills? Is the team enthusiastic and motivated to do its best?
                  Do you work well together? This 2-day course can help you get
                  there!
                </p>
              </div>
              <div className="col-lg-11 offset-xl-1 mt-5">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    <LeadershipAccordion />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="sect d-none" id="conflict-resolutions">
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
                  <h1 className="title h2">CONFLICT RESOLUTIONS</h1>
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
                Many people see conflict as a negative experience. In fact, conflict is a necessary part of our personal growth and development. Think of when you were trying to choose your major in college, for example, or trying to decide between two jobs. However, conflict becomes an issue when the people involved cannot work through it. They become engaged in a battle that does not result in growth. When this type of conflict arises, negative energy can result, causing hurt feelings and damaged relationships. This two-day course will give participants the tools that will help you resolve conflict successfully and produce a win-win outcome.
                </p>
              </div>
              <div className="col-lg-11 offset-xl-1 mt-5">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    <LeadershipAccordion />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="sect d-none" id="delegation">
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
                  <h1 className="title h2">DELEGATION - THE ART OF DELEGATING EFFECTIVELY</h1>
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
                Effective delegation is one of the most valuable skills you can master. It reduces your workload and develops employee skills. Delegating prepares employees who work for you to be able to handle your responsibilities and simultaneously allows you to advance to other career opportunities within your organization.
                </p>
                <p>
                Delegation is often one of the hardest skills for a manager to master. However, the skill can be learned. This workshop will explore many of the facets of delegation, including when to delegate and to whom to delegate. We will also go through the delegation process step by step and learn about techniques to overcome problems.
                </p>
              </div>
              <div className="col-lg-11 offset-xl-1 mt-5">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    <LeadershipAccordion />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="sect d-none" id="giving-effective-feedback">
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
                  <h1 className="title h2">GIVING EFFECTIVE FEEDBACK</h1>
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
                GIVING EFFECTIVE FEEDBACK
                </p>
              </div>
              <div className="col-lg-11 offset-xl-1 mt-5">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    <LeadershipAccordion />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="sect d-none" id="workplace-violence">
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
                  <h1 className="title h2">WORK PLACE VIOLENCE</h1>
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
                WORK PLACE VIOLENCE
                </p>
              </div>
              <div className="col-lg-11 offset-xl-1 mt-5">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    <LeadershipAccordion />
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

export default Leadership;
