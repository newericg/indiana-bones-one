import React from "react";
import Section from "../components/Section";
import Reveal from "../libs/Reveal";
import Heading from "../components/Heading";

const GizmoKnowsPage = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem] mb-[5.25rem] min-h-screen text-center flex flex-col items-center px-8 sm:px-32"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      
    >
      <Reveal>
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center "
          title="Gizmo Knows"
          tag="Inquiries and Contacts"
        />
      </Reveal>
       
      <div id="chatling-inline-bot" className="w-full sm:w-4/6 h-auto" style={{height: '700px'}}></div>
      
        
      
    </Section>
  );
};

export default GizmoKnowsPage;
