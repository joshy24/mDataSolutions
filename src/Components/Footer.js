import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
        <footer className="footer-area">
            <div className="container">
                {/* <div className="footer-top">
                    <div className="footer-social-link">
                        <ul className="list-unstyled">
                            <li><Link to="https://facebook.com/" data-sal="slide-up" data-sal-duration="500" data-sal-delay="100"><i className="fab fa-facebook-f"></i></Link></li>
                            <li><Link to="https://twitter.com/" data-sal="slide-up" data-sal-duration="500" data-sal-delay="200"><i className="fab fa-twitter"></i></Link></li>
                            <li><Link to="https://www.pinterest.com/" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300"><i className="fab fa-pinterest-p"></i></Link></li>
                            <li><Link to="https://www.linkedin.com/" data-sal="slide-up" data-sal-duration="500" data-sal-delay="400"><i className="fab fa-linkedin-in"></i></Link></li>
                            <li><Link to="https://www.instagram.com/" data-sal="slide-up" data-sal-duration="500" data-sal-delay="500"><i className="fab fa-instagram"></i></Link></li>
                            <li><Link to="https://vimeo.com/" data-sal="slide-up" data-sal-duration="500" data-sal-delay="600"><i className="fab fa-vimeo-v"></i></Link></li>
                            <li><Link to="https://dribbble.com/" data-sal="slide-up" data-sal-duration="500" data-sal-delay="700"><i className="fab fa-dribbble"></i></Link></li>
                            <li><Link to="https://www.behance.net/" data-sal="slide-up" data-sal-duration="500" data-sal-delay="800"><i className="fab fa-behance"></i></Link></li>
                        </ul>
                    </div>
                </div> */}
                {/* <div className="footer-main">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5" data-sal="slide-right" data-sal-duration="800" data-sal-delay="100">
                            <div className="footer-widget border-end">
                                <div className="footer-newsletter">
                                    <h2 className="title">Get in touch!</h2>
                                    <p>Fusce varius, dolor tempor interdum tristique, dui urna bib
                                        endum magna, ut ullamcorper purus</p>
                                    <form>
                                        <div className="input-group">
                                            <input type="email" className="form-control" placeholder="Email address" />
                                            <button className="subscribe-btn" type="submit">Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7" data-sal="slide-left" data-sal-duration="800" data-sal-delay="100">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="footer-widget">
                                        <h6 className="widget-title">Services</h6>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                                <li><Link to="service-design.html">Logo &amp; Branding</Link></li>
                                                <li><Link to="service-development.html">Website Development</Link></li>
                                                <li><Link to="service-development.html">Mobile App Development</Link></li>
                                                <li><Link to="service-marketing.html">Search Engine Optimization</Link></li>
                                                <li><Link to="service-marketing.html">Pay-Per-Click</Link></li>
                                                <li><Link to="service-marketing.html">Social Media Marketing</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="footer-widget">
                                        <h6 className="widget-title">Resourses</h6>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                                <li><Link to="blog.html">Blog</Link></li>
                                                <li><Link to="case-study.html">Case Studies</Link></li>
                                                <li><Link to="project.html">Portfolio</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="footer-widget">
                                        <h6 className="widget-title">Support</h6>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                                <li><Link to="contact.html">Contact</Link></li>
                                                <li><Link to="privacy-policy.html">Privacy Policy</Link></li>
                                                <li><Link to="terms-of-use.html">Terms of Use</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="footer-bottom" data-sal="slide-up" data-sal-duration="500" data-sal-delay="100">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="footer-copyright">
                                <span className="copyright-text">Powered by <Link to="https://techspice.com.ng/" target="_blank">Techspice Limited</Link>.</span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="footer-bottom-link">
                                <ul className="list-unstyled">
                                    <li><Link to="privacy-policy.html">Privacy Policy</Link></li>
                                    <li><Link to="terms-of-use.html">Terms of Use</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>


        <div className="offcanvas offcanvas-end header-offcanvasmenu" tabindex="-1" id="offcanvasMenuRight">
            <div className="offcanvas-header">
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <form action="#" className="side-nav-search-form">
                    <div className="form-group">
                        <input type="text" className="search-field" name="search-field" placeholder="Search..."/>
                        <button className="side-nav-search-btn"><i className="fas fa-search"></i></button>
                    </div>
                </form>
                <div className="row ">
                    <div className="col-lg-5 col-xl-6">
                        <ul className="main-navigation list-unstyled">
                            <li><Link to="index-1.html">Digital Agency</Link></li>
                            <li><Link to="index-2.html">Creative Agency</Link></li>
                            <li><Link to="index-3.html">Personal Portfolio</Link></li>
                            <li><Link to="index-4.html">Home Startup</Link></li>
                            <li><Link to="index-5.html">Corporate Agency</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-7 col-xl-6">
                        <div className="contact-info-wrap">
                            <div className="contact-inner">
                                <address className="address">
                                    <span className="title">Contact Information</span>
                                    <p>Theodore Lowe, Ap #867-859 <br/> Sit Rd, Azusa New York</p>
                                </address>
                                <address className="address">
                                    <span className="title">We're Available 24/7. Call Now.</span>
                                    <Link className="tel" to="tel:8884562790"><i className="fas fa-phone"></i>(888)
                                        456-2790</Link>
                                    <Link className="tel" to="tel:12125553333"><i className="fas fa-fax"></i>(121)
                                        255-53333</Link>
                                </address>
                            </div>
                            <div className="contact-inner">
                                <h5 className="title">Find us here</h5>
                                <div className="contact-social-share">
                                    <ul className="social-share list-unstyled">
                                        <li><Link to="https://facebook.com/"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link to="https://twitter.com/"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link to="https://www.behance.net/"><i className="fab fa-behance"></i></Link></li>
                                        <li><Link to="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;
