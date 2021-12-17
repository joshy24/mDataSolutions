import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="breadcrum-area">
            <div className="container">
                <div className="breadcrumb">
                    <ul className="list-unstyled">
                        <li><a href="index-1.html">Home</a></li>
                        <li className="active">Contact</li>
                    </ul>
                    <h1 className="title h2">Contact</h1>
                </div>
            </div>
            <ul className="shape-group-8 list-unstyled">
                <li className="shape shape-1" data-sal="slide-right" data-sal-duration="500" data-sal-delay="100">
                    <img src="assets/media/others/bubble-9.png" alt="Bubble"/>
                </li>
                <li className="shape shape-2" data-sal="slide-left" data-sal-duration="500" data-sal-delay="200">
                    <img src="assets/media/others/bubble-17.png" alt="Bubble"/>
                </li>
                <li className="shape shape-3" data-sal="slide-up" data-sal-duration="500" data-sal-delay="300">
                    <img src="assets/media/others/line-4.png" alt="Line"/>
                </li>
            </ul>
        </div>

        <section className="section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-6">
                        <div className="contact-form-box shadow-box mb--30">
                            <h3 className="title">Get in contact with us</h3>
                            <form method="POST" action="mail.php" className="axil-contact-form">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" name="contact-name"/>
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" name="contact-email"/>
                                </div>
                                <div className="form-group">
                                    <label>Company</label>
                                    <input type="text" className="form-control" name="contact-company"/>
                                </div>
                                <div className="form-group mb--40">
                                    <label>How can we help you?</label>
                                    <textarea name="contact-message" id="contact-message" className="form-control textarea" cols="30" rows="4"></textarea>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="axil-btn btn-fill-primary btn-fluid btn-primary" name="submit-btn">Contact Us</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 offset-xl-1">
                    <div className="contact-info mb--100 mb_md--30 mt_md--0 mt--150">
                            <h4 className="title">Address</h4>
                            <p>3115 Georgia Ave NW, Washington, DC 20010. <br/>+14435380247</p>
                            <p>Lagos Office : <br/> NO. 1637, Adetokunbo Ademola Street. Opp Eko Hotel, V.I, Lagos. <br/> +234 708 441 0845, +234 802 325 8027</p>
                            <p>Ibadan Office: <br/> 11, Obe Street, KONGI Bodija, Ibadan, Oyo. <br/> +234 802 325 8027</p>
                        </div>
                        <div className="contact-info mb--100 mb_md--30 mt_md--0 mt--150">
                            <h4 className="title">Phone</h4>
                            <p>Our customer care is open from Mon-Fri, 10:00 am to 6:00 pm</p>
                            <p>+234 802 325 8027</p>
                            <h4 className="title">Email</h4>
                            <p>Our support will get back to you soon!</p>
                            <p>info@mdatasolutions.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="list-unstyled shape-group-12">
                <li className="shape shape-1"><img src="assets/media/others/bubble-2.png" alt="Bubble"/></li>
                <li className="shape shape-2"><img src="assets/media/others/bubble-1.png" alt="Bubble"/></li>
                <li className="shape shape-3"><img src="assets/media/others/circle-3.png" alt="Circle"/></li>
            </ul>
        </section>

        </>
    )
}

export default Contact
