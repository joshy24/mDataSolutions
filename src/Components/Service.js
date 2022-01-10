import React from "react";
import digital from "../images/electronic-signature.png";
import project from "../images/clipboard.png";
import training from "../images/training.png";
// import { Link } from "react-router-dom";

export default function Service() {
  return (
    <section className="section section-padding">
      <div className="container">
        <div className="section-heading heading-left mb--20 mb_md--70">
          <span className="subtitle">What We Can Do For You</span>
          <h2 className="title">What we do</h2>
        </div>
        <div className="row">
          <div
            className="col-lg-4 mt--200 mt_md--0"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-delay="100"
          >
            <div className="services-grid service-style-2">
              <div className="thumbnail">
                <img src={digital} alt="icon" style={{ height: 100 }} />
              </div>
              <div className="content">
                <h5 className="title">
                  {" "}
                  <a href="service-design.html">Digital Transformation</a>
                </h5>
                <p>
                  The world is changing and so are businesses all around the
                  world, the market is becoming highly dynamic and this requires
                  a{" "}
                </p>
                {/* <Link to="/digital-transformation" className="more-btn">
                  Find out more
                </Link> */}
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 mt--100 mt_md--0"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-delay="200"
          >
            <div className="services-grid service-style-2 active">
              <div className="thumbnail">
                <img src={project} alt="icon" style={{ height: 100 }} />
              </div>
              <div className="content">
                <h5 className="title">
                  <a href="service-development.html">Project Management</a>
                </h5>
                <p>
                  Architecting projects properly so that they fit well into our
                  clients' strategic framework, and also ensuring that the goals
                  of the project align with the goals of the business.
                </p>
                {/* <Link to="/" className="more-btn">
                  Find out more
                </Link> */}
              </div>
            </div>
          </div>
          <div
            className="col-lg-4"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-delay="300"
          >
            <div className="services-grid service-style-2">
              <div className="thumbnail">
                <img src={training} alt="icon" style={{ height: 100 }} />
              </div>
              <div className="content">
                <h5 className="title">
                  {" "}
                  <a href="service-content-strategy.html">Trainings</a>
                </h5>
                <p>
                  Drawing on a blend of project management and education
                  excellence, the programs are tailored to suit specific client
                  needs - from introductory to advance and targeted packages.
                </p>
                {/* <Link to="/training" className="more-btn">
                  Find out more
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className="shape-group-7 list-unstyled">
        <li className="shape shape-1">
          <img src="assets/media/others/circle-2.png" alt="circle" />
        </li>
        <li className="shape shape-2">
          <img src="assets/media/others/bubble-2.png" alt="Line" />
        </li>
        <li className="shape shape-3">
          <img src="assets/media/others/bubble-1.png" alt="Line" />
        </li>
      </ul>
    </section>
  );
}
