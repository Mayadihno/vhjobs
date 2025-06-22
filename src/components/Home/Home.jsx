import React from "react";
import Banner from "./Banner";
import SectionOne from "./SectionOne";
import HowItWorks from "./HowItWorks";
import Personal from "./Personal";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <SectionOne />
      <HowItWorks />
      <Personal />
      <Services />
    </div>
  );
};

export default Home;
