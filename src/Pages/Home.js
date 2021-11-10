import React from "react";
import { Banner } from "../Components/Banner";
import CallToAction from "../Components/CallToAction";
import Counter from "../Components/Counter";
import Projects from "../Components/Projects";
import Service from "../Components/Service";
import Testimonial from "../Components/Testimonial";

const Home = () => {
  return (
    <>
      <Banner />
      <Service />
      <Projects />
      <Testimonial />
      <Counter />
      <CallToAction />
    </>
  );
};

export default Home;
