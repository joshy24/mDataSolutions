import React, {useEffect} from "react";
// import sal from 'sal.js'

export const Banner = () => {
    // useEffect(() => {
    //     sal()
    // }, [])
  return (
    <>
      <section className="banner banner-style-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-7">
              <div className="banner-content">
                <h1
                  className="title"
                  data-sal="slide-up"
                  data-sal-duration="1000"
                  data-sal-delay="200"
                >
                  Technology &amp; design Studio
                </h1>
                <div
                  data-sal="slide-up"
                  data-sal-duration="1000"
                  data-sal-delay="100"
                >
                  <a
                    href="portfolio.html"
                    className="axil-btn btn-fill-white btn-large"
                  >
                    View Showcase
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-xl-5"
              data-sal="slide-up" data-sal-duration="1000" data-sal-delay="100"
            >
              <div className="banner-form">
                <div className="contact-form-box shadow-box">
                  <h3 className="title">Get a free Keystroke quote now</h3>
                  <form
                    method="POST"
                    action="mail.php"
                    className="axil-contact-form"
                  >
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="contact-name"
                        placeholder="John Smith"
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="contact-email"
                        placeholder="example@mail.com"
                      />
                    </div>
                    <div className="form-group mb--40">
                      <label>Phone</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="contact-company"
                        placeholder="+123456789"
                      />
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="axil-btn btn-borderd btn-fluid btn-primary"
                        name="submit-btn"
                      >
                        Get Pricing Now
                      </button>
                    </div>
                    <input
                      type="hidden"
                      className="form-control"
                      name="contact-message"
                      value="Null"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
