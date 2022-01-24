import React from "react";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <section className="error-page onepage-screen-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div
              className="content"
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-delay="400"
            >
              <h2 className="title">Page not found</h2>
              <Link to="/" className="axil-btn btn-fill-primary">
                Go Back
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="thumbnail"
              data-sal="zoom-in"
              data-sal-duration="800"
              data-sal-delay="400"
            >
              <img src="assets/media/others/404.png" alt="404" />
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
          <img src="assets/media/others/bubble-9.png" alt="Bubble" />
        </li>
        <li
          className="shape shape-2"
          data-sal="slide-left"
          data-sal-duration="500"
          data-sal-delay="200"
        >
          <img src="assets/media/others/bubble-27.png" alt="Bubble" />
        </li>
        <li
          className="shape shape-3"
          data-sal="slide-up"
          data-sal-duration="500"
          data-sal-delay="300"
        >
          <img src="assets/media/others/line-4.png" alt="Line" />
        </li>
      </ul>
    </section>
  );
};
