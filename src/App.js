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
import Certification from "./Components/training/certification/Certification";
import Offerings from "./Components/training/pmOfferings/Offerings";
import Analysis from "./Components/training/businessAnalysis/Analysis";
import Risks from "./Components/training/riskManagement/Risks";
import BigData from "./Components/training/bigData/BigData";
import Leadership from "./Components/training/leadership/Leadership";

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

          {/*Training Pages*/}
          <Route exact path="/certification-offerings" element={<Certification />} />
          <Route exact path="/pm-offerings" element={<Offerings />} />
          <Route exact path="/business-analysis" element={<Analysis />} />
          <Route exact path="/risk-management" element={<Risks />} />
          <Route exact path="/big-data" element={<BigData />} />
          <Route exact path="/leadership" element={<Leadership />} />
          {/*End of Training Pages*/}

          <Route exact path="/services" element={<Service />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
