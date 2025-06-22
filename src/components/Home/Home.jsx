import React from "react";
import Banner from "./Banner";
import SectionOne from "./SectionOne";
import HowItWorks from "./HowItWorks";
import Personal from "./Personal";
import Services from "./Services";
import VhjobsCTA from "./CTA";
import Download from "./Download";

const Home = () => {
  return (
    <div>
      <Banner />
      <SectionOne />
      <HowItWorks />
      <Personal />
      <Services />
      <VhjobsCTA />
      <Download />
    </div>
  );
};

export default Home;
