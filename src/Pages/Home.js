import React, { useEffect } from "react";
import { Banner } from "../Components/Banner";
import CallToAction from "../Components/CallToAction";
// import Counter from "../Components/Counter";
import Projects from "../Components/Projects";
import Service from "../Components/Service";
import sal from "sal.js";
import instructor from "../images/hero.png";

const Home = () => {
  useEffect(() => {
    sal();
  }, []);
  return (
    <>
      <Banner />
      <Service />
      <Projects />
      {/* <Counter /> */}
      <section style={{ padding: 40 }}>
        <div class="footer-main">
          <div class="row">
            <div
              class="col-xl-6 col-lg-5"
              data-sal="slide-right"
              data-sal-duration="800"
              data-sal-delay="100"
            >
              <div class="footer-widget border-end">
                <div class="footer-newsletter">
                  <h2 class="title">Get in touch!</h2>
                  <p>
                    Fusce varius, dolor tempor interdum tristique, dui urna bib
                    endum magna, ut ullamcorper purus
                  </p>
                  <form>
                    <div class="input-group">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Email address"
                      />
                      <button class="subscribe-btn" type="submit">
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div
              class="col-xl-6 col-lg-7"
              data-sal="slide-left"
              data-sal-duration="800"
              data-sal-delay="100"
            >
              <div class="row">
                <div class="col-sm-6">
                  <div class="footer-widget">
                    <img
                      className="paralax-image"
                      src={instructor}
                      alt="Illustration"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  );
};

export default Home;
