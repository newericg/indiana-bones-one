import Benefits from "../components/Benefits";
import Collaboration from "../components/Collaboration";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Roadmap from "../components/Roadmap";
import Services from "../components/Services";

import React from 'react';
import GizmoKnowsPage from "./GizmoKnowsPage";
import  {Timeline}  from "../components/Timeline";

const HomePage = () => {
  return (
    <>
        <Hero />
        <Collaboration />
        <Benefits />
        {/* <Services /> */}
        {/* <Pricing /> */}
        <Roadmap />
        {/* <Timeline /> */}
        <GizmoKnowsPage />
        
    </>
  )
}

export default HomePage