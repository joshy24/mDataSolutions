import React, { useEffect } from "react";
import { Banner } from "../Components/Banner";
import CallToAction from "../Components/CallToAction";
// import Counter from "../Components/Counter";
import Projects from "../Components/Projects";
import Service from "../Components/Service";
import sal from "sal.js";
import instructor from "../images/imgg.jpeg";
import paper from "../images/paper.jpg";
import { Link } from "react-router-dom";


const Home = () => {
  useEffect(() => {
    sal();
  }, []);
  return (
    <div>
      <Banner />
      <div className="spacingss">

      <Service />
      <Projects />
      {/* <Counter /> */}

      <section className="paper-digital-cloud">
        <div className="footer-main">
          <div className="row">
            <div
              className="col-xl-6 col-lg-5"
              data-sal="slide-right"
              data-sal-duration="800"
              data-sal-delay="100"
            >
            
              <div className="footer-widget border-end">
                <div className="footer-newsletter">
                <Link to="/MDocScan">
                  <h2 className="title"> Paper → Digital → Cloud</h2>
                  </Link>
                  <p>
                    Digitize your paper-based records and archives; join the
                    future of work, access and interact with your files anywhere
                    in the world.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-7"
              data-sal="slide-left"
              data-sal-duration="800"
              data-sal-delay="100"
            >
              <div className="row">
                <div className="col-sm-6">
                  <div className="footer-widget">
                     <Link to="/MDocScan">
                        <img
                          className="paralax-image mDocScanHomeFrame"
                          src="assets/media/banner/mdocscanlogo.png"
                          alt="Illustration"
                          style={{borderRadius: 20, height:312, width:305}}
                        />
                     </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bespoke-software">
        <div className="footer-main">
          <div className="row">
            <div
              className="col-xl-6 col-lg-7"
              data-sal="slide-left"
              data-sal-duration="800"
              data-sal-delay="100"
            >
              <div className="row">
                <div className="col-sm-6">
                  <div className="footer-widget" >
                    <Link to="/software-technology">
                        <img
                          className="paralax-image"
                          src={instructor}
                          alt="Illustration"
                          style={{borderRadius: 20, height:300, width:500, marginLeft:50}}
                        />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-5"
              data-sal="slide-right"
              data-sal-duration="800"
              data-sal-delay="100"
            >
              <div className="footer-widget ">
                <div className="footer-newsletter">
                <Link to="/software-technology">
                  <h2 className="title"> Bespoke Software Development</h2>
                  </Link>
                  <p>
                    Software applications designed and developed just for you.
                    Web, Mobile and Enterprise. If you can imagine it, we can
                    bring it to life.
                  </p>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </section>
      <CallToAction />
      </div>

    </div>
  );
};

export default Home;
