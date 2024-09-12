import React from "react";
import Section from "../components/Section";
import Reveal from "../libs/Reveal";
import Heading from "../components/Heading";
import { workInProgress} from "../assets";

const WorkInProgressPage = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem] mb-[5.25rem] min-h-screen text-center flex flex-col items-center px-8 sm:px-32"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <Reveal>
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center "
          title=""
          tag=""
        />
      </Reveal>
       
        <div>
            <img src={workInProgress} alt="" />
        </div>
        <h1 className="mt-5">This page will launch very soon!</h1>
      
        
      
    </Section>
  )
}

export default WorkInProgressPage