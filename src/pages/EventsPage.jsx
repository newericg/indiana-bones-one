import React from 'react'
import Section from "../components/Section";
import Reveal from "../libs/Reveal";
import Heading from "../components/Heading";
import { useLocation } from 'react-router-dom';


const EventsPage = () => {
    const location = useLocation();

    const title = location.state[0].title
    const tag = location.state[0].tag

    console.log(location)

  return (
    <Section
    className="pt-[12rem] -mt-[5.25rem] mb-[5.25rem] min-h-screen text-center flex flex-col items-center px-2 sm:px-32"
    crosses
    crossesOffset="lg:translate-y-[5.25rem]"
    customPaddings
    
  >
    <Reveal>
      <Heading
        className="md:max-w-md lg:max-w-2xl text-center "
        title={title}
        tag={tag}
      />
    </Reveal>
    
  </Section>
  )
}

export default EventsPage