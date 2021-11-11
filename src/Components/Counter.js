import React from 'react'

const Counter = () => {
    return (
        <section className="section section-padding bg-color-dark">
        <div className="container">
            <div className="section-heading heading-light">
                <span className="subtitle">Featured Case Study</span>
                <h2 className="title">Design startup movement</h2>
                <p>In vel varius turpis, non dictum sem. Aenean in efficitur ipsum, in egestas ipsum. Mauris in mi ac tellus.</p>
            </div>
            <div className="row">
                <div className="col-lg-3 col-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="100">
                    <div className="counterup-progress active">
                        <div className="icon">
                            <img src="assets/media/icon/icon-7.png" alt="Apple"/>
                        </div>
                        <div className="count-number h2">
                            <span className="number count">15</span>
                            <span className="symbol">+</span>
                        </div>
                        <h6 className="title">Years of operation</h6>
                    </div>
                </div>
                <div className="col-lg-3 col-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="200">
                    <div className="counterup-progress">
                        <div className="icon">
                            <img src="assets/media/icon/icon-8.png" alt="Apple"/>
                        </div>
                        <div className="count-number h2">
                            <span className="number count">360</span>
                            <span className="symbol">+</span>
                        </div>
                        <h6 className="title">Projects deliverd</h6>
                    </div>
                </div>
                <div className="col-lg-3 col-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="300">
                    <div className="counterup-progress">
                        <div className="icon">
                            <img src="assets/media/icon/icon-9.png" alt="Apple"/>
                        </div>
                        <div className="count-number h2">
                            <span className="number count">600</span>
                            <span className="symbol">+</span>
                        </div>
                        <h6 className="title">Specialist</h6>
                    </div>
                </div>
                <div className="col-lg-3 col-6" data-sal="slide-up" data-sal-duration="800" data-sal-delay="400">
                    <div className="counterup-progress">
                        <div className="icon">
                        <img src="assets/media/icon/icon-8.png" alt="Apple"/>
                        </div>
                        <div className="count-number h2">
                            <span className="number count">64</span>
                            <span className="symbol">+</span>
                        </div>
                        <h6 className="title">Years of operation</h6>
                    </div>
                </div>
            </div>
        </div>
        <ul className="shape-group-5 list-unstyled">
            <li className="shape shape-1"><img src="assets/media/others/circle-1.png" alt="line"/></li>
            <li className="shape shape-2"><img src="assets/media/others/line-3.png" alt="line"/></li>
            <li className="shape shape-3"><img src="assets/media/others/bubble-5.png" alt="line"/></li>
            <li className="shape shape-4"><img src="assets/media/others/bubble-6.png" alt="line"/></li>
        </ul>
    </section>
    )
}

export default Counter
