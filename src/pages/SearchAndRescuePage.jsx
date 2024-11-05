import React from "react";
import Section from "../components/Section";
import Reveal from "../libs/Reveal";
import Heading from "../components/Heading";
import { indyDog1, indyDog3, indyDog4, indyDog5 } from "../assets";
import Card from "../components/design/Card";

let content = [
  {
    title: 'The Ultimate Solution',
    text: 'Introducing our cutting-edge "Search & Rescue Bundle" service - the ultimate solution for locating lost or wandering dogs quickly and efficiently. This innovative package combines advanced technology to give pet owners and search teams the best tools for finding dogs in various environments and conditions.',
    img: indyDog1,
  },
  {
    title: 'High-Tech Drone',
    text: "Equipped with a high-resolution camera for aerial searches Covers large areas quickly and efficiently Can access hard-to-reach locations Thermal Night Vision Binoculars: Detects heat signatures of animals, even in complete darkness Allows for precise location of dogs in low-light conditions or dense vegetation Weather-resistant and durable for outdoor use",
    img: indyDog3,
  },
  {
    title: 'Key Benefits',
    text: " Rapid Response: Deploy the drone for quick, wide-area searches while using the thermal binoculars for detailed ground-level inspection. Day and Night Operation: Effective in both daylight and darkness, ensuring round-the-clock search capabilities. Increased Success Rate: The combination of aerial and thermal imaging significantly improves the chances of locating lost dogs. Professional Guidance: Our trained operators will assist in using the equipment effectively.",
    img: indyDog5,
  },
  {
    title: 'Peace of Mind',
    text: "Know that you have access to top-tier technology when you need it most. Whether you are a pet owner looking for extra security or a professional search team seeking to enhance your capabilities, our Search & Rescue Bundle offers a comprehensive solution for finding lost dogs quickly and safely.",
    img: indyDog4,
  },
];

const SearchAndRescuePage = () => {
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
          title="Search And Rescue"
          tag="Services"
        />
      </Reveal>

      <Reveal>
        <div className="w-full sm:flex flex-col justify-center items-center">
          {content.map((section) => (
            <Card text={section.text} img={section.img} title={section.title}></Card>
          ))}
        </div>
      </Reveal>
      <Reveal>
        <p className="mt-20">
          Contact us today to learn more about how this service can help keep
          your furry friends safe and secure!
        </p>
      </Reveal>
    </Section>
  );
};

export default SearchAndRescuePage;
