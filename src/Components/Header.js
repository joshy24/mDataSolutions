import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header axil-header header-style-4">
      <div id="axil-sticky-placeholder"></div>
      <div className="axil-mainmenu">
        <div className="container">
          <div className="header-navbar">
            <div className="header-logo">
              <Link to="/">
                <img
                  src="assets/media/mdata.png"
                  alt="logo"
                  style={{ height: 50, width: 130 }}
                />
              </Link>
            </div>
            <div className="header-main-nav">
              <nav className="mainmenu-nav" id="mobilemenu-popup">
                <div className="d-block d-lg-none">
                  <div className="mobile-nav-header">
                    <div className="mobile-nav-logo">
                      <Link to="/">
                        <img
                          className="light-mode"
                          src="assets/media/mdata.png"
                          alt="Site Logo"
                          style={{ height: 50, width: 130 }}
                        />
                        <img
                          className="dark-mode"
                          src="assets/media/mdata.png"
                          alt="Site Logo"
                          style={{ height: 50, width: 130 }}
                        />
                      </Link>
                    </div>
                    <button
                      className="mobile-menu-close"
                      data-bs-dismiss="offcanvas"
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                </div>
                <ul className="mainmenu">
                  <li>
                    <Link to="/" style={{ color: "#828282" }}>
                      Home
                    </Link>
                  </li>
                  <li className="menu-item-has-children">
                  <a href="javascript:void(0);" style={{ color: "#828282" }}>
                      Technology
                    </a>
                    <ul className="axil-submenu">
                      <li>
                        <Link to="/digital-transformation">
                          Digital Transformation
                        </Link>
                      </li>
                      <li>
                        <Link to="/MDocScan">
                        MDocScan
                        </Link>
                      </li>
                      <li>
                        <Link to="/buisness-process-automation">
                          Business Process Automation
                        </Link>
                      </li>
                      <li>
                        <Link to="/software-technology">
                          Software & Technology
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="menu-item-has-children">
                    <a href="javascript:void(0);" style={{ color: "#828282" }}>
                      Security & Risk
                    </a>
                    <ul className="axil-submenu">
                     
                      <li>
                        <Link to="/information-tech-audit">Information Technology Audit</Link>
                      </li>
                      <li>
                        <Link to="/">Business Process Analysis</Link>
                      </li>
                      <li>
                        <Link to="/grc">Governance Risk Compliance</Link>
                      </li>
                      <li>
                        <Link to="/information-security">Information Security</Link>
                      </li>
                      <li>
                        <Link to="/">Enterprise Risk Management</Link>
                      </li>
                      <li>
                        <Link to="/">Reputational Risk Management</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="javascript:void(0);" style={{ color: "#828282" }}>
                      Training
                    </a>
                    <ul className="axil-submenu">
                      <li>
                        <Link to="/certification-offerings">Certification Offerings</Link>
                      </li>
                      <li>
                        <Link to="/ProjectManagement">Project Management Offerings</Link>
                      </li>

                      
                      <li>
                        <Link to="/business-analysis">Business Analysis, Training & Development</Link>
                      </li>
                      <li>
                        <Link to="/risk-management">Risk Management</Link>
                      </li>
                      <li>
                        <Link to="/big-data">Big Data</Link>
                      </li>
                      <li>
                        <Link to="/leadership">Leadership & Soft Skills</Link>
                      </li>
                      <li>
                        <Link to="/cyber-security">Cyber Security Awareness Training</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="javascript:void(0);" style={{ color: "#828282" }}>
                      About Us
                    </a>
                    <ul className="axil-submenu">
                      <li>
                        <Link to="/about-us">About Us</Link>
                      </li>
                      <li>
                        <Link to="/our-values">Our Values </Link>
                      </li>
                      <li>
                        <Link to="/why-us">Why Us</Link>
                      </li>
                      <li>
                        <Link to="/become-instructor">
                          Become an Instructor
                        </Link>
                      </li>
                      <li>
                        <Link to="/partners">Partners & Clients</Link>
                      </li>
                      <li>
                        <Link to="/training-schedule">Training Schedule</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header-action">
              <ul className="list-unstyled">
                <li className="header-btn">
                  <Link to="/contact" className="axil-btn btn-fill-white">
                    Let's Talk
                  </Link>
                </li>
                <li className="mobile-menu-btn sidemenu-btn d-lg-none d-block">
                  <button
                    className="btn-wrap btn-dark"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#mobilemenu-popup"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </li>
                <li className="my_switcher d-block d-lg-none">
                  <ul>
                    <li title="Light Mode">
                      <a
                        href="javascript:void(0)"
                        className="setColor light"
                        data-theme="light"
                      >
                        <i className="fal fa-lightbulb-on"></i>
                      </a>
                    </li>
                    <li title="Dark Mode">
                      <a
                        href="javascript:void(0)"
                        className="setColor dark"
                        data-theme="dark"
                      >
                        <i className="fas fa-moon"></i>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
