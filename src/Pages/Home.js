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
                  <h2 class="title"> Paper – Digital – Cloud</h2>
                  <p>
                    Digitize your paper-based records and archives; join the
                    future of work, access and interact with your files anywhere
                    in the world.
                  </p>
                  <h2 class="title"> Bespoke Software Development</h2>
                  <p>
                    Software applications designed and developed just for you.
                    Web, Mobile and Enterprise. If you can imagine it, we can
                    bring it to life.
                  </p>
                  {/* <form>
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
                  </form> */}
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
