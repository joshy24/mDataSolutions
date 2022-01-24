import React from "react";
import tele from "../images/tele.jpg";
import gov from "../images/gov.jpg";
import gas from "../images/gas.jpg";
import bank from "../images/bank.jpg";
// import test from '../images/telx.jpeg';
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <section className="section section-padding-2 bg-color-light">
        <div className="container">
          <div className="section-heading heading-left">
            <span className="subtitle">Industries</span>
            <h2 className="title">
              Some sectors <br /> we work with.
            </h2>
          </div>
          <div className="axil-isotope-wrapper" style={{ marginBottom: 30 }}>
            <div className="row row-35 isotope-list">
              <div
                className="col-md-6 project branding"
                style={{
                  height: 150,
                  width: 300,
                  marginTop: 30,
                  marginBottom: 30,
                }}
              >
                <div className="project-grid">
                  <div className="thumbnail">
                    <Link to="/">
                      <img
                        src={gas}
                        alt="project"
                        style={{ height: 150, width: 285 }}
                      />
                    </Link>
                  </div>
                  <div className="content">
                    <Link to="/">
                      <p
                        className="title"
                        style={{ fontSize: "1.5em", color: "black" }}
                      >
                        Oil & Gas
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 project mobile"
                style={{
                  height: 200,
                  width: 300,
                  marginTop: 30,
                  marginBottom: 30,
                }}
              >
                <div className="project-grid">
                  <div className="thumbnail">
                    <Link to="/">
                      <img src={tele} alt="project" />
                    </Link>
                  </div>
                  <div className="content">
                    <Link to="/" style={{ marginLeft: -35 }}>
                      <p
                        className="title"
                        style={{ fontSize: "1.5em", color: "black" }}
                      >
                        Telecommunications
                      </p>
                    </Link>
                    {/* <span className="subtitle">Logo, Website & Mobile App</span> */}
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 project branding"
                style={{
                  height: 200,
                  width: 300,
                  marginTop: 30,
                  marginBottom: 30,
                }}
              >
                <div className="project-grid">
                  <div className="thumbnail">
                    <Link to="/">
                      <img src={bank} alt="project" />
                    </Link>
                  </div>
                  <div className="content">
                    <Link to="/" className="text-center">
                      <p
                        className="title"
                        style={{ fontSize: "1.5em", color: "black" }}
                      >
                        Banking
                      </p>
                    </Link>

                    {/* <span className="subtitle">Website, UI/UX</span> */}
                  </div>
                </div>
              </div>
              <br />
              <div
                className="col-md-6 project mobile"
                style={{
                  height: 200,
                  width: 300,
                  marginTop: 30,
                  marginBottom: 30,
                }}
              >
                <div className="project-grid">
                  <div className="thumbnail">
                    <Link to="/">
                      <img
                        src={gov}
                        alt="project"
                        style={{ height: 150, width: 285 }}
                      />
                    </Link>
                  </div>
                  <div className="content">
                    <Link to="/">
                      <p
                        className="title"
                        style={{ fontSize: "1.5em", color: "black" }}
                      >
                        Government
                      </p>
                    </Link>
                  </div>
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
    </>
  );
};

export default Projects;
