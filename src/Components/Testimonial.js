import React from 'react'

const Testimonial = () => {
    return (
        <section className="section section-padding">
            <div className="container">
                <div className="section-heading heading-left">
                    <span className="subtitle">Testimonial</span>
                    <h2 className="title">From getting started</h2>
                    <p>Nulla facilisi. Nullam in magna id dolor blandit rutrum eget vulputate augue sed eu leo eget risus imperdiet.</p>
                </div>
                <div className="row">
                    <div className="col-lg-4" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="100">
                        <div className="testimonial-grid active">
                            <span className="social-media"><img src="assets/media/icon/yelp-2.png" alt="Yelp"/></span>
                            <p>“ Donec metus lorem, vulputate
                                at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. ”</p>
                            <div className="author-info">
                                <div className="thumb">
                                    <img src="assets/media/testimonial/testimonial-1.png" alt="Google Review"/>
                                </div>
                                <div className="content">
                                    <span className="name">Darrell Steward</span>
                                    <span className="designation">Executive Chairman</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="200">
                        <div className="testimonial-grid">
                            <span className="social-media"><img src="assets/media/icon/google-2.png" alt="google"/></span>
                            <p>“ Donec metus lorem, vulputate
                                at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. ”</p>
                            <div className="author-info">
                                <div className="thumb">
                                    <img src="assets/media/testimonial/testimonial-2.png" alt="Google Review"/>
                                </div>
                                <div className="content">
                                    <span className="name">Savannah Nguyen</span>
                                    <span className="designation">Executive Chairman</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300">
                        <div className="testimonial-grid">
                            <span className="social-media"><img src="assets/media/icon/fb-2.png" alt="Facebook"/></span>
                            <p>“ Donec metus lorem, vulputate
                                at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. ”</p>
                            <div className="author-info">
                                <div className="thumb">
                                    <img src="assets/media/testimonial/testimonial-3.png" alt="Google Review" />
                                </div>
                                <div className="content">
                                    <span className="name">Floyd Miles</span>
                                    <span className="designation">Executive Chairman</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="shape-group-4 list-unstyled">
                <li className="shape-1"><img src="assets/media/others/bubble-1.png" alt="Bubble"/></li>
            </ul>
        </section>
    )
}

export default Testimonial
