import React, { useEffect } from "react";
import sal from "sal.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OurApproach from "./Components/about/OurApproach";
import Footer from "./Components/Footer";
import { Header } from "./Components/Header";
import Service from "./Components/Service";
import Home from "./Pages/Home";
import OurValues from "./Components/about/OurValues";
import WhyUs from "./Components/about/WhyUs";
import BecomeInstructor from "./Components/about/BecomeInstructor";
import Partners from "./Components/about/Partners";
import Training from "./Components/about/Training";
import AboutUs from "./Components/about/AboutUs";
import Software from "./Components/digital/Software";
import DocumentManagement from "./Components/digital/DocumentManagement";
import DigitalTransformation from "./Components/digital/DigitalTransformation";
import BusinessAutomation from "./Components/digital/BusinessAutomation";
import Contact from "./Pages/Contact";

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

          {/* about us pages  */}
          <Route exact path="/our-approach" element={<OurApproach />} />
          <Route exact path="/our-values" element={<OurValues />} />
          <Route exact path="/why-us" element={<WhyUs />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/become-instructor" element={<BecomeInstructor />} />
          <Route exact path="/partners" element={<Partners />} />
          <Route exact path="/training-schedule" element={<Training />} />
          {/*end of about pages  */}

          {/* digital transformation pages  */}
          <Route exact path="/digital-transformation" element={<DigitalTransformation />} />
          <Route exact path="/software-technology" element={<Software />} />
          <Route exact path="/document-management" element={<DocumentManagement />} />
          <Route exact path="/buisness-process-automation" element={<BusinessAutomation />} />

          
          <Route exact path="/services" element={<Service />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
