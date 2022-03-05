import React, { useEffect } from "react";
// import sal from "sal.js";
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
import Certification from "./Components/training/certification/Certification";
import Offerings from "./Components/training/pmOfferings/Offerings";
import Analysis from "./Components/training/businessAnalysis/Analysis";
import Risks from "./Components/training/riskManagement/Risks";
import BigData from "./Components/training/bigData/BigData";
import Leadership from "./Components/training/leadership/Leadership";
import AboutUs from "./Components/about/AboutUs";
import Software from "./Components/digital/Software";
import DocumentManagement from "./Components/digital/DocumentManagement";
import MDocScan from "./Components/digital/MDocScan";
import DigitalTransformation from "./Components/digital/DigitalTransformation";
import BusinessAutomation from "./Components/digital/BusinessAutomation";
import Contact from "./Pages/Contact";
import Grc from "./Components/security/Grc";
import { ErrorPage } from "./Components/ErrorPage";
import InformationTechAudit from "./Components/security/InformationTechAudit";
import InformationSecurity from "./Components/security/InformationSecurity";
import ReputationalRisk from "./Components/security/ReputationalRisk";
import EnterpriseRisk from "./Components/security/EnterpriseRisk";
import BusinessAnalysis from "./Components/security/BusinessAnalysis";

function App() {
  // useEffect(() => {
  //   sal();
  // }, []);
  return (
    <div id="main-wrapper" className="main-wrapper">
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

          {/*Training Pages*/}
          <Route exact path="/certification-offerings" element={<Certification />} />
          <Route exact path="/ProjectManagement" element={<Offerings />} />
          <Route exact path="/business-analysis" element={<Analysis />} />
          <Route exact path="/risk-management" element={<Risks />} />
          <Route exact path="/big-data" element={<BigData />} />
          <Route exact path="/leadership" element={<Leadership />} />
          {/*End of Training Pages*/}

          {/* digital transformation pages  */}
          <Route exact path="/digital-transformation" element={<DigitalTransformation />} />
          <Route exact path="/software-technology" element={<Software />} />
          <Route exact path="/MDocScan" element={<MDocScan />} />
          <Route exact path="/buisness-process-automation" element={<BusinessAutomation />} />

          {/* security and risk  */}
          <Route exact path="/grc" element={<Grc />} />
          <Route exact path="/information-tech-audit" element={<InformationTechAudit />} />
          <Route exact path="/services" element={<Service />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/information-security" element={<InformationSecurity />} />
          <Route exact path="/reputational-risk" element={<ReputationalRisk />} />
          <Route exact path="/enterprise-risk" element={<EnterpriseRisk />} />
          <Route exact path="/business_analysis" element={<BusinessAnalysis />} />



          <Route exact path="*" element={<ErrorPage />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
