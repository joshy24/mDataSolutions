import React from 'react'

export default function Service() {
    return (
        <section className="section section-padding">
        <div className="container">
            <div className="section-heading heading-left mb--20 mb_md--70">
                <span className="subtitle">What We Can Do For You</span>
                <h2 className="title">Services we can <br/> help you with</h2>
            </div>
            <div className="row">
                <div className="col-lg-4 mt--200 mt_md--0" data-sal="slide-up" data-sal-duration="800" data-sal-delay="100">
                    <div className="services-grid service-style-2">
                        <div className="thumbnail">
                            <img src="assets/media/icon/icon-1.png" alt="icon" />
                        </div>
                        <div className="content">
                            <h5 className="title"> <a href="service-design.html">Design</a></h5>
                            <p>Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.</p>
                            <a href="service-design.html" className="more-btn">Find out more</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt--100 mt_md--0" data-sal="slide-up" data-sal-duration="800" data-sal-delay="200">
                    <div className="services-grid service-style-2 active">
                        <div className="thumbnail">
                            <img src="assets/media/icon/icon-2.png" alt="icon" />
                        </div>
                        <div className="content">
                            <h5 className="title"> <a href="service-development.html">Development</a></h5>
                            <p>Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.</p>
                            <a href="service-development.html" className="more-btn">Find out more</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4" data-sal="slide-up" data-sal-duration="800" data-sal-delay="300">
                    <div className="services-grid service-style-2">
                        <div className="thumbnail">
                            <img src="assets/media/icon/icon-6.png" alt="icon" />
                        </div>
                        <div className="content">
                            <h5 className="title"> <a href="service-content-strategy.html">Content strategy</a></h5>
                            <p>Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.</p>
                            <a href="service-content-strategy.html" className="more-btn">Find out more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ul className="shape-group-7 list-unstyled">
            <li className="shape shape-1"><img src="assets/media/others/circle-2.png" alt="circle" /></li>
            <li className="shape shape-2"><img src="assets/media/others/bubble-2.png" alt="Line" /></li>
            <li className="shape shape-3"><img src="assets/media/others/bubble-1.png" alt="Line" /></li>
        </ul>
    </section>
    )
}
