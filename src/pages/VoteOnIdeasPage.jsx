import React from 'react'
import Section from "../components/Section";
import Reveal from "../libs/Reveal";
import Heading from "../components/Heading";

const VoteOnIdeasPage = () => {
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
          title="Give us Ideas"
          tag="Vote on Ideas! Challenge us."
        />
      </Reveal>
      <Reveal>
        <div className='w-full sm:w-[75rem] bg-black' data-canny ></div>
      </Reveal>

      
        
      
    </Section>
  )
}

export default VoteOnIdeasPage