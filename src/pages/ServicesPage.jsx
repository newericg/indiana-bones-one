import React from "react";
import Section from "../components/Section";
import Reveal from "../libs/Reveal";
import Heading from "../components/Heading";
import { whatWeDoServices } from "../constants";
import Arrow from "../assets/svg/Arrow";

const ServicesPage = () => {
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
          title="What we do"
          tag="Services"
        />
      </Reveal>

      <div className="flex flex-col sm:flex-row flex-wrap sm:gap-10 mb-10 md:w-4/5">
        {whatWeDoServices.map((service) => (
          <Reveal>
            <div className="my-5 flex flex-col w-full sm:w-[30rem] h-[40rem] sm:h-[45rem] border-2 border-color-400/5 rounded-xl p-5">
              <picture className="opacity-70 rounded-xl h-auto sm:h-[25rem] w-full overflow-hidden">
                <img
                  className="rounded-xl h-full w-full object-cover hover:scale-125 ease-in duration-150"
                  src={service.img}
                  alt="service image example"
                />
              </picture>
              <h1 className="text-xl sm:my-4 text-n-3 mt-10"> {service.name} </h1>
              <p className="text-n-4 text-justify mt-5">
                {service.description}
              </p>
              <a href={service.link} className="flex my-5 mt-auto">
                <p className="ml-auto my-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider hover:text-color-500 ease-in duration-1000" >
                  Read more
                </p>
                <Arrow className=""/>
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default ServicesPage;
