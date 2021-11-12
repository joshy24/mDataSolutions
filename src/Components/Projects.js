import React from "react";
import tele from '../images/tele.jpg';
import gov from '../images/gov.jpg';
import gas from '../images/gas.jpg';
import bank from '../images/bank.jpg';

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
          <div className="axil-isotope-wrapper" style={{marginBottom:30}}>
            {/* <div className="isotope-button isotope-project-btn">
              <button data-filter="*" className="is-checked">
                <span className="filter-text">All Works</span>
              </button>
              <button data-filter=".branding">
                <span className="filter-text">Branding</span>
              </button>
              <button data-filter=".mobile">
                <span className="filter-text">Mobile</span>
              </button>
            </div> */}
            <div className="row row-35 isotope-list">
              <div className="col-md-6 project branding"  style={{height:150, width:300}}>
                <div className="project-grid">
                  <div className="thumbnail">
                    <a href="single-portfolio.html">
                      <img
                        src={gov}
                        alt="project"
                        style={{height:180, width:285}}
                      />
                    </a>
                  </div>
                  <div className="content">
                  <h4 className="title" style={{fontSize: '1.5em'}}>
                      <a href="single-portfolio.html">Oil & Gas</a>
                    </h4>
                    {/* <span className="subtitle">
                      Full Branding, Website, App
                    </span> */}
                  </div>
                </div>
              </div>
              <div className="col-md-6 project mobile"  style={{height:200, width:300}}>
                <div className="project-grid">
                  <div className="thumbnail">
                    <a href="single-portfolio.html">
                      <img
                        src={gas}
                        alt="project"
                      />
                    </a>
                  </div>
                  <div className="content">
                  <h4 className="title" style={{fontSize: '1.5em'}}>
                      <a href="single-portfolio.html">Banking</a>
                    </h4>
                    {/* <span className="subtitle">Logo, Website & Mobile App</span> */}
                  </div>
                </div>
              </div>
              <div className="col-md-6 project branding" style={{height:200, width:300}}>
                <div className="project-grid">
                  <div className="thumbnail">
                    <a href="single-portfolio.html">
                      <img
                        src={bank}
                        alt="project"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <h4 className="title" style={{fontSize: '1.5em'}}>
                      <a href="single-portfolio.html">Telecommunication</a>
                    </h4>
                    {/* <span className="subtitle">Website, UI/UX</span> */}
                  </div>
                </div>
              </div>
              <br/>
              <div className="col-md-6 project mobile"  style={{height:200, width:300}}>
                <div className="project-grid">
                  <div className="thumbnail">
                    <a href="single-portfolio.html">
                      <img
                        src={tele}
                        alt="project"
                      />
                    </a>
                  </div>
                  <div className="content">
                  <h4 className="title" style={{fontSize: '1.5em'}}>
                      <a href="single-portfolio.html">Government</a>
                    </h4>
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
