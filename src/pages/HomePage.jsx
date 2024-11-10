import Benefits from "../components/Benefits";
import Collaboration from "../components/Collaboration";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Roadmap from "../components/Roadmap";
import Services from "../components/Services";
import CompanyLogos from "../components/CompanyLogos";

import React from "react";
import GizmoKnowsPage from "./GizmoKnowsPage";
import { Timeline } from "../components/Timeline";

// var t = document.createElement("script");
// t.setAttribute("type", "text/javascript");
// t.setAttribute("src", "https://cdn.ywxi.net/js/1.js");
// parent.document.getElementsByTagName("head")[0].appendChild(t);


const HomePage = () => {
  return (
    <>
      <Hero />
      <Collaboration />
      <CompanyLogos className="my-12 sm:mb-20 sm:mt-32 company-logos flex flex-col justify-center items-center background-banner-1" />
      <Benefits />
      <Timeline />
      {/* <GizmoKnowsPage /> */}
      {/* <Services /> */}
      {/* <Pricing /> */}
      {/* <Roadmap /> */}
    </>
  );
};

export default HomePage;
