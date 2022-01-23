import React from 'react'
import { Link } from 'react-router-dom'

const CallToAction = () => {
    return (
        <section className="section call-to-action-area">
        <div className="container">
            <div className="call-to-action">
                <div className="section-heading heading-light">
                    <span className="subtitle">Let's Work Together</span>
                    <h2 className="title">Need our professional help?</h2>
                    <Link to="/contact" className="axil-btn btn-large btn-fill-white">Get Started</Link>
                </div>
                <div className="thumbnail">
                    <div className="larg-thumb" data-sal="zoom-in" data-sal-duration="600" data-sal-delay="100">
                        <img src="assets/media/others/pc.png" alt="Computer"/>
                    </div>
                    <ul className="list-unstyled small-thumb">
                        <li className="shape shape-1" data-sal="slide-right" data-sal-duration="800" data-sal-delay="400">
                            <img src="assets/media/others/comment.png" alt="Comments"/>
                        </li>
                        <li className="shape shape-2" data-sal="slide-up" data-sal-duration="800" data-sal-delay="300">
                            <img src="assets/media/others/keyboard.png" alt="Comments"/>
                        </li>
                        <li className="shape shape-3" data-sal="slide-right" data-sal-duration="800" data-sal-delay="300">
                            <img src="assets/media/others/mouse.png" alt="Comments"/>
                        </li>
                        <li className="shape shape-4" data-sal="slide-left" data-sal-duration="800" data-sal-delay="300">
                            <img src="assets/media/others/bell-icon.png" alt="Comments"/>
                        </li>
                        <li className="shape shape-5" data-sal="zoom-in" data-sal-duration="800" data-sal-delay="200">
                            <img src="assets/media/others/chat-bot.png" alt="Comments"/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <ul className="list-unstyled shape-group-9">
            <li className="shape shape-1"><img src="assets/media/others/bubble-12.png" alt="Comments"/></li>
            <li className="shape shape-2"><img src="assets/media/others/bubble-16.png" alt="Comments"/></li>
            <li className="shape shape-3"><img src="assets/media/others/bubble-13.png" alt="Comments"/></li>
            <li className="shape shape-4"><img src="assets/media/others/bubble-14.png" alt="Comments"/></li>
            <li className="shape shape-5"><img src="assets/media/others/bubble-16.png" alt="Comments"/></li>
            <li className="shape shape-6"><img src="assets/media/others/bubble-15.png" alt="Comments"/></li>
            <li className="shape shape-7"><img src="assets/media/others/bubble-16.png" alt="Comments"/></li>
        </ul>
    </section>
    )
}

export default CallToAction
