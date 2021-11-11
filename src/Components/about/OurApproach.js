import React, {useEffect} from "react";
import sal from "sal.js";
import about2 from '../../images/about2.png'

const OurApproach = () => {
  useEffect(() => {
    sal();
  }, []);
  return (
    <>
      <div class="breadcrum-area breadcrumb-banner single-breadcrumb">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div
                class="section-heading heading-left"
                data-sal="slide-right"
                data-sal-duration="1000"
                data-sal-delay="300"
              >
                <h1 class="title h2">Our Approach</h1>
              </div>
            </div>
            <div class="col-lg-6">
              <div
                class="banner-thumbnail"
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="400"
              >
                <img
                  class="paralax-image"
                  src={about2}
                  alt="Illustration"
                />
              </div>
            </div>
          </div>
        </div>
        <ul class="shape-group-8 list-unstyled">
          <li
            class="shape shape-1"
            data-sal="slide-right"
            data-sal-duration="500"
            data-sal-delay="100"
          >
            <img src="assets/media/others/bubble-9.png" alt="Bubble"/>
          </li>
          <li
            class="shape shape-2"
            data-sal="slide-left"
            data-sal-duration="500"
            data-sal-delay="200"
          >
            <img src="assets/media/others/bubble-20.png" alt="Bubble"/>
          </li>
          <li
            class="shape shape-3"
            data-sal="slide-up"
            data-sal-duration="500"
            data-sal-delay="300"
          >
            <img src="assets/media/others/line-4.png" alt="Line"/>
          </li>
        </ul>
      </div>

      <section class="section-padding single-portfolio-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <div class="section-heading heading-left mb-0">
                {/* <span class="subtitle">Branding, Creative</span> */}
                <h3 class="title">Our Approach</h3>
              </div>
              <p>
                Utilizing our high-impact 4-step approach as the framework for each client engagement ensures that we
                deliver the right training solution and that you realize the best return on your training investment.
              </p>
              <p>
                Before any training programs are delivered, our subject matter experts evaluate your firm's articulated
                business processes, communications issues or competencies gaps to affirm training goals are correctly
                stated, that inputs and outputs are measurable; and, that the resulted solution will deliver the
                expected corporate benefit.
              </p>
              <p>
                After this, MData then proposes a comprehensive learning solution, which can be delivered through a
                variety of learning methods that best align to your organization's specific needs. Throughout the
                training engagement, all participants are regularly polled to confirm the curriculum and materials are
                real-world appropriate and contribute to immediate application.
              </p>
              <p>
                Training is a critical part of your company's performance development initiatives, but it doesn't start
                or end there. MData’s 4-step approach reflects our commitment to supporting your organization every step
                of the way.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default OurApproach;
