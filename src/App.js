import React from "react";
import {  BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Footer from "./Components/Footer";
import { Header } from "./Components/Header";
import Service from "./Components/Service";
import About from "./Pages/About";
import Home from "./Pages/Home";

function App () {
  return (
    <div id="main-wrapper" class="main-wrapper">
      <Router>
        <Header />
          <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Service />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
