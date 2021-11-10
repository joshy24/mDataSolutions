import React, { useEffect } from "react";
import sal from "sal.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OurApproach from "./Components/about/OurApproach";
import Footer from "./Components/Footer";
import { Header } from "./Components/Header";
import Service from "./Components/Service";
import About from "./Pages/About";
import Home from "./Pages/Home";
import OurValues from "./Components/about/OurValues";
import WhyUs from "./Components/about/WhyUs";
import BecomeInstructor from "./Components/about/BecomeInstructor";
import Partners from "./Components/about/Partners";
import Training from "./Components/about/Training";

function App() {
  useEffect(() => {
    sal();
  }, []);
  return (
    <div id="main-wrapper" class="main-wrapper">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          {/* about pages  */}
          <Route exact path="/our-approach" element={<OurApproach />} />
          <Route exact path="/our-values" element={<OurValues />} />
          <Route exact path="/why-us" element={<WhyUs />} />
          <Route exact path="/become-instructor" element={<BecomeInstructor />} />
          <Route exact path="/partners" element={<Partners />} />
          <Route exact path="/training-schedule" element={<Training />} />

          {/*end of about pages  */}

          <Route exact path="/services" element={<Service />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
