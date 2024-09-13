import React from 'react'
import Section from "../components/Section";
import Reveal from "../libs/Reveal";
import Heading from "../components/Heading";

const DogHikingPage = () => {
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
          title="Dog Hiking"
          tag="Services"
        />
      </Reveal>

      
    </Section>
  )
}

export default DogHikingPage