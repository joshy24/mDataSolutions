import React, {useEffect} from "react";
import sal from "sal.js";

const Training = () => {
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
                <h1 class="title h2">Training Schedule</h1>
                <p>
                  A quick view of industry specific problems solved with design
                  by the awesome team at Keystroke.
                </p>
              </div>
            </div>
            {/* <div class="col-lg-6">
              <div
                class="banner-thumbnail"
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="400"
              >
                <img
                  class="paralax-image"
                  src="assets/media/project/project-2.png"
                  alt="Illustration"
                />
              </div>
            </div> */}
          </div>
        </div>
        <ul class="shape-group-8 list-unstyled">
          <li
            class="shape shape-1"
            data-sal="slide-right"
            data-sal-duration="500"
            data-sal-delay="100"
          >
            <img src="assets/media/others/bubble-9.png" alt="Bubble" />
          </li>
          <li
            class="shape shape-2"
            data-sal="slide-left"
            data-sal-duration="500"
            data-sal-delay="200"
          >
            <img src="assets/media/others/bubble-20.png" alt="Bubble" />
          </li>
          <li
            class="shape shape-3"
            data-sal="slide-up"
            data-sal-duration="500"
            data-sal-delay="300"
          >
            <img src="assets/media/others/line-4.png" alt="Line" />
          </li>
        </ul>
      </div>

      <section class="section-padding single-portfolio-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <div class="section-heading heading-left mb-0">
                <span class="subtitle">Branding, Creative</span>
                <h3 class="title">Creative agency</h3>
              </div>
              <p>
                From the designers and engineers who are creating the next
                generation of web and mobile experiences, to anyone putting a
                website together for the first time. We provide elegant
                solutions that set new standards for online publishing.
              </p>
              <p>
                Digital technology has made our world more transparent and
                interconnected, posing new challenges and opportunities for
                every business. A holistic, user-centric perspective is what
                truly sets one apart.
              </p>
              <a href="contact.html" class="axil-btn btn-fill-primary">
                Get it Now
              </a>
            </div>
            <div class="col-lg-6 offset-xl-1">
              <div class="why-choose-us">
                <div class="section-heading heading-left">
                  <h3 class="title">We delivered</h3>
                  <p>
                    Digital technology has made our world more transparent and
                    interconnected, posing new challenges and opportunities for
                    every business.
                  </p>
                </div>
                <div class="accordion" id="choose-accordion">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <i class="far fa-compress"></i> Strategy
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#choose-accordion"
                    >
                      <div class="accordion-body">
                        Aenean hendrerit laoreet vehicula. Nullam convallis
                        augue at enim gravida pellentesque.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <i class="far fa-code"></i>Design
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#choose-accordion"
                    >
                      <div class="accordion-body">
                        Aenean hendrerit laoreet vehicula. Nullam convallis
                        augue at enim gravida pellentesque.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <i class="fal fa-globe"></i>Development
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#choose-accordion"
                    >
                      <div class="accordion-body">
                        Aenean hendrerit laoreet vehicula. Nullam convallis
                        augue at enim gravida pellentesque.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Training;
