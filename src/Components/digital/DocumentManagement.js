import React, { useEffect } from "react";
import sal from "sal.js";
import digital from '../../images/digital.png'

const DocumentManagement = () => {
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
                <h1 class="title h2">Document Management</h1>
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
                  src={digital}
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
            <div class="col-lg-5">
              <div class="section-heading heading-left mb-0">
                {/* <span class="subtitle">Software, Technology</span> */}
                <h3 class="title">Document Management</h3>
              </div>
              <p>
                This solution provides back-file scanning which is also
                inclusive of sorting and indexing of archival paper documents,
                scanning of archival documents, document shredding etc. This
                makes information and organizational records easily accessible,
                helping the organization save a lot of effort, time and
                resources. The deliverable digital files can be stored in CD,
                DVD or a Hard Drive; it can also be stored on Cloud for a faster
                and a more real-time access. Organisations like Law firms,
                Hospitals, Newspapers, Magazines, NGOs, Schools, Government
                Agencies, Churches, Insurance Companies etc.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DocumentManagement;
