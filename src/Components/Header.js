import React from "react";

export const Header = () => {
  return (
    <header className="header axil-header header-style-4">
      <div id="axil-sticky-placeholder"></div>
      <div className="axil-mainmenu">
        <div className="container">
          <div className="header-navbar">
            <div className="header-logo">
              <a href="index-1.html">
                <img src="assets/media/logo-3.svg" alt="logo" />
              </a>
            </div>
            <div className="header-main-nav">
              <nav className="mainmenu-nav" id="mobilemenu-popup">
                <div className="d-block d-lg-none">
                  <div className="mobile-nav-header">
                    <div className="mobile-nav-logo">
                      <a href="index-1.html">
                        <img
                          className="light-mode"
                          src="assets/media/logo-2.svg"
                          alt="Site Logo"
                        />
                        <img
                          className="dark-mode"
                          src="assets/media/logo-3.svg"
                          alt="Site Logo"
                        />
                      </a>
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
                    <a href="contact.html">Home</a>
                  </li>
                 
                  <li className="menu-item-has-children">
                    <a href="javascript:void(0);">About Us</a>
                    <ul className="axil-submenu">
                      <li>
                        <a href="/">Our Approach</a>
                      </li>
                      <li>
                        <a href="/">Our Values </a>
                      </li>
                      <li>
                        <a href="/">Why Us</a>
                      </li>
                      <li>
                        <a href="/">Become an Instructor</a>
                      </li>
                      <li>
                        <a href="/">Partners & Clients</a>
                      </li>
                      <li>
                        <a href="/">Training Schedule</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="javascript:void(0);">Training</a>
                    <ul className="axil-submenu">
                      <li>
                        <a href="/">Certification Offerings</a>
                      </li>
                      <li>
                        <a href="/">Project Management Offerings</a>
                      </li>
                      <li>
                        <a href="/">Business Analysis</a>
                      </li>  <li>
                        <a href="/">Risk Management</a>
                      </li>  <li>
                        <a href="/">Big Data</a>
                      </li>  <li>
                        <a href="/">Leadership </a>
                      </li>
                      <li>
                        <a href="/">Cybersecurity </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="javascript:void(0);">Security & Risk </a>
                    <ul className="axil-submenu">
                      <li>
                        <a href="service.html">Service</a>
                      </li>
                      <li>
                        <a href="service-2.html">Service Two</a>
                      </li>
                      <li>
                        <a href="service-design.html">Service Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html">Document Management</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header-action">
              <ul className="list-unstyled">
                <li className="header-btn">
                  <a href="contact.html" className="axil-btn btn-fill-white">
                    Let's Talk
                  </a>
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
