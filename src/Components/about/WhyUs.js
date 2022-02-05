import React, {useEffect} from "react";
import sal from "sal.js";
import about1 from '../../images/about1.png'

const WhyUs = () => {
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
                <h1 className="title h2">Why Us</h1>
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

      <section className="section section-padding bg-color-dark pb--80 pb_lg--40 pb_md--20">
        <div className="container">
          <div className="row">
          <div className="col-lg-12">
              <div className="about-quality active">
                <h3 className="sl-number">1</h3>
                <h5 className="title">WHY CHOOSE MDATA FOR YOUR PMP® CERTIFICATION TRAINING?</h5>
                <p>There are many choices when it comes to your Project Management Professional (PMP®) exam prep training, so which one do you choose? MANAGED DATA SOLUTIONS (MData) has been the choice since 2005 for thousands of candidates with a desire to obtain PMP® Certification. All classes scheduled at MData are guaranteed to run.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about-quality">
                <h3 className="sl-number">2</h3>
                <h5 className="title">MDATA INSTRUCTORS ARE PMP® CERTIFIED</h5>
                <p>We realize your number one goal is to pass the PMP® Exam, and MData can guarantee it. MData provides the best value for your money to prepare for PMP® Exam Certification with our "Pass PMP® in 4 days or your Money Back Guarantee*.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about-quality">
                <h3 className="sl-number">3</h3>
                <h5 className="title">PMP® TEST PASS GUARANTEE</h5>
                <p>We realize your number one goal is to pass the PMP® Exam, and MData can guarantee it. MData provides the best value for your money to prepare for PMP® Exam Certification with our "Pass PMP® in 4 days or your Money Back Guarantee*.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about-quality">
                <h3 className="sl-number">4</h3>
                <h5 className="title">PMP® REQUIREMENTS</h5>
                <p>As you know PMP® exam requires you to have stringent experiential and educational requirements. The certification is designed to validate your accomplishments. Hence, our training is designed around your commitment, your schedule, and we respect your experience in the className. You will be delighted with the level of knowledge, experience, education and commitment of our instructors. For a complete list of requirements visit PMI.org.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about-quality">
                <h3 className="sl-number">5</h3>
                <h5 className="title">PMI REP</h5>
                <p>MANAGED DATA SOLUTIONS (MData) is a Project Management Institute (PMI) Registered Education Provider (R.E.P) (R.E.P. ID: 2698). As a PMI Registered Education Provider (R.E.P.), MData has agreed to abide by PMI-established quality assurance criteria. PMI conducts in-depth review of R.E.Ps every three years. MData has been reviewed and approved as a provider of project management training by the Project Management Institute (PMI). MData has been approved by PMI to issue PDUs for our courses. All our trainers are PMP® credential holders. MData has maintained the Global R.E.P. status since 2005.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding single-portfolio-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-heading heading-left mb-0">
                <h3 className="title">COURSE & CLASS QUALITY</h3>
              </div>
              <p>
                PMI Global Registered Education Provider (REP) since 2005

                Instructors Made Significant Contributions to the Project Management Body of Knowledge (PMBOK Guide)

                Content/Questions Developed by Instructors

                35-Contact Hours to Pre-Qualify for Exam

                100% True PMP® Certification Guarantee
              </p>
            </div>
            <div className="col-lg-6">
              <div className="section-heading heading-left mb-0">
                <h3 className="title">COURSE MATERIALS (IN-CLASS)</h3>
              </div>
              <p>
                Course Content

                PMBOK Guide (exam edition)

                Course Content

                PMBOK Guide methodology templates

                PMP® In-Class Mock Exam 500 Questions

                Miscellaneous - Markers, Pens, Pencils, Eraser, Bag

                Certificate of Completion (Professional & PDF Version)
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
