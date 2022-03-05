import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import sal from "sal.js";
import digital from "../../images/digital.png";

const DocumentManagement = () => {
  
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
                <h1 className="title h2">Document Management</h1>
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
                  src={digital}
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
              <div className="section-heading heading-left mb-0">
                {/* <span className="subtitle">Software, Technology</span> */}
                <h3 className="title">Document Management</h3>
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
              <p >
                With the pervasiveness of digital technologies today,
                institutions of all types are rushing to preserve their records
                and collections via digitization. MDocScan offers a suite of
                reliable, robust digitization solutions that maximize the
                availability and preservation of your institutional memories and
                assets, by leveraging a powerful combination of technology and
                expert consultants to deliver a solution that supports
                international digitization standards and best local practices.
              </p>
            </div>
            <div
             className="header-btn">
                  <Link to="/contact" className="axil-btn btn-fill-white">
                    Get Started
                  </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DocumentManagement;
