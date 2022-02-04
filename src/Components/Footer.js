import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
        <footer className="footer-area">
            <div className="container">
              
                <div className="footer-bottom" data-sal="slide-up" data-sal-duration="500" data-sal-delay="100">
                    <div className="footer-top-content">
                        <div className="row">
                            <div className="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                                <div className="footer-content">
                                    <Link to="/">
                                        <img
                                        src="assets/media/mdata.png"
                                        alt="logo"
                                        style={{ height: 75, width: 195 }}
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 col-sm-6 col-xs-12">
                                <div className="footer-content">
                                    <h6 className="title">Services</h6>
                                    <div className="footer-inner-content">
                                        <h6 className="subtitle">Technology</h6>
                                        <h6 className="subtitle">Security & Risk</h6>
                                        <h6 className="subtitle">Training</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 col-sm-6 col-xs-12">
                                <div className="footer-content">
                                    <h6 className="title">Useful Links</h6>
                                    <div className="footer-inner-content">
                                        <h6 className="subtitle"><Link to="/digital-transformation">
                                            Digital Transformation
                                        </Link></h6>

                                        <h6 className="subtitle"><Link to="/MDocScan">MDocScan</Link></h6>

                                        <h6 className="subtitle"><Link to="/buisness-process-automation">
                                            Business Process Automation
                                            </Link></h6>

                                        <h6 className="subtitle"><Link to="/software-technology">
                                            Software & Technology
                                            </Link></h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-2 col-sm-6 col-xs-12">
                                <div className="footer-content">
                                    <h6 className="title">Contacts</h6>
                                    <div className="footer-inner-content">
                                        <h6 className="subtitle">E-mail: info@mdatasolutions.com</h6>
                                        <h6 className="subtitle">Phone Number: +234 802 325 8027</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="footer-copyright">
                                <Link to="/">
                                <span className="copyright-text">© Mdata Solutions 2022</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>


       
        </>
    )
}

export default Footer;
