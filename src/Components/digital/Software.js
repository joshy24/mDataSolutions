import React, { useEffect } from "react";
import sal from "sal.js";
import software from '../../images/software.png'

const Software = () => {
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
                <h1 class="title h2">Software Development & Technology</h1>
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
                  src={software}
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
          <div class="col-lg-12">
              <div class="section-heading heading-left mb-0">
                <span class="subtitle">Software, Technology</span>
                <h3 class="title">Software Development & Technology</h3>
              </div>
              <p>
                We focus on custom software engineering services for
                organizations like Government Agencies, Schools, Hospitals,
                Businesses, food franchises, multinational corporations etc. We
                deliver technology excellence, quicker time-to-market,
                uncompromised quality and security of software applications. We
                have on our team, some incredibly talented engineers to ensure
                that our clients enjoy world-class solutions in the most cost
                effective way.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Software;
