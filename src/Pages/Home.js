import React, {useEffect} from "react";
import { Banner } from "../Components/Banner";
import CallToAction from "../Components/CallToAction";
import Counter from "../Components/Counter";
// import Projects from "../Components/Projects";
import Service from "../Components/Service";
import Testimonial from "../Components/Testimonial";
import sal from "sal.js";

const Home = () => {
  useEffect(() => {
    sal();
  }, []);
  return (
    <>
      <Banner />
      <Service />
      {/* <Projects /> */}
      <Testimonial />
      <Counter />
      <CallToAction />
    </>
  );
};

export default Home;
