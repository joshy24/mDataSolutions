import React, {useEffect} from "react";
import sal from "sal.js";
import instructor from '../../images/instructor.png'

const BecomeInstructor = () => {
  useEffect(() => {
    sal();
  }, []);
  return (
    <>
      <div className="breadcrum-area breadcrumb-banner single-breadcrumb">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="section-heading heading-left"
                data-sal="slide-right"
                data-sal-duration="1000"
                data-sal-delay="300"
              >
                <h1 className="title h2">Become an Instructor</h1>
                <p>
                  At Mdata, we welcome mentors who are specialists and have the energy to transfer knowledge. Our
                  undertaking is to make a worldwide system of exceptionally qualified mentors and specialists to convey
                  programs around the globe.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="banner-thumbnail"
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="400"
              >
                <img
                  className="paralax-image"
                  src={instructor}
                  alt="Illustration"
                />
              </div>
            </div>
          </div>
        </div>
        <ul className="shape-group-8 list-unstyled">
          <li
            className="shape shape-1"
            data-sal="slide-right"
            data-sal-duration="500"
            data-sal-delay="100"
          >
            <img src="assets/media/others/bubble-9.png" alt="Bubble"/>
          </li>
          <li
            className="shape shape-2"
            data-sal="slide-left"
            data-sal-duration="500"
            data-sal-delay="200"
          >
            <img src="assets/media/others/bubble-20.png" alt="Bubble"/>
          </li>
          <li
            className="shape shape-3"
            data-sal="slide-up"
            data-sal-duration="500"
            data-sal-delay="300"
          >
            <img src="assets/media/others/line-4.png" alt="Line"/>
          </li>
        </ul>
      </div>

      <section className="section-padding single-portfolio-area">
        <div className="container">
          <div className="blog-comment-form">
            <h6>
              Kindly fill the form below!
            </h6>
            <form>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control" name="firstName" placeholder="Your First name"/>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" name="lastName" placeholder="Your Last name"/>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Email</label>
                    <input type="tel" className="form-control" name="mobile" placeholder="Your Phone Number"/>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="email" className="form-control" name="email" placeholder="Your Email Address"/>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Expertise</label>
                    <select className="form-control" name="expertise">
                      <option value="">Select Expertise</option>
                      <option value="Project Management Professional">Project Management Professional</option>
                      <option value="PMI Training">PMI Training</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Upload Document</label>
                    <input type="file" className="form-control" name="file-upload"/>
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="form-group">
                    <button type="submit" className="axil-btn btn-fill-primary btn-fluid" name="submit-btn">Submit Now
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default BecomeInstructor;
