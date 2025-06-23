import React from "react";
import Banner from "./Banner";
import SectionOne from "./SectionOne";
import HowItWorks from "./HowItWorks";
import Personal from "./Personal";
import Services from "./Services";
import VhjobsCTA from "./CTA";
import Download from "./Download";
import Faq from "./Faq";

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
      <Faq />
    </div>
  );
};

export default Home;
