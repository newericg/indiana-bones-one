import React from "react";
import Section from "../components/Section";
import Reveal from "../libs/Reveal";
import Heading from "../components/Heading";
import { indyDog1, indyDog2, indyDog3, indyDog4 } from "../assets";

let droneText = [
  {
    title: "Certified Drone Pilot",
    text: "Our team includes certified drone pilot, ensuring that all aerial operations are conducted professionally and in full compliance with regulations. This certification demonstrates our commitment to safety, quality, and legal standards in drone operations.",
    img: indyDog2,
  },
  {
    title: "Enhanced Safety Measures",
    text: "We utilize state-of-the-art drone technology to add an extra dimension of safety to our services. Our drones allow us to:",
    textItems: [
      "Conduct thorough aerial inspections",
      "Monitor large areas efficiently",
      "Provide real-time aerial footage for enhanced situational awareness",
    ],
    img: indyDog1,
  },
  {
    title: "Community Service: Lost Pet Search",
    text: "We are passionate about giving back to our community. If you have lost a dog, we are here to help:",
    textItems: [
      "We offer our drone services free of charge to assist in locating lost pets",
      "Contact us immediately if you need help finding your furry friend",
    ],
    img: indyDog3,
  },
  {
    title: "Versatile Aerial Photography and Videography",
    text: "Our certified drone pilots are also available for a variety of aerial photography and videography needs:",
    textItems: [
      "Wedding photography and videography",
      "Real estate aerial shots",
      "Event coverage",
      "Promotional videos",
      "And much more!",
    ],
    img: indyDog4,
  },
];


const DronePage = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem] mb-[5.25rem] min-h-screen text-center flex flex-col items-center px-10 sm:px-32"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
    >
      <Reveal>
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center "
          title="Our Innovative Drone Services"
          tag="Services"
        />
      </Reveal>

      {droneText.map((item, index) => (
        <div
          className={
            "w-full my-20 sm:flex sm:w-2/4 " +
            (index % 2 ? "flex-row" : "flex-row-reverse")
          }
        >
          <div className="flex justify-center sm:w-1/2">
            <img src={item.img} className="w-1/2 rounded-lg" alt="" />
          </div>

          <div className="flex flex-col justify-center sm:w-1/2 text-color-300">
            <h2 className="text-2xl my-10">{item.title}</h2>
            <p className="text-justify">{item.text}</p>
            {item.textItems ? (
              <ul className="list-disc mt-5 text-start ">
                {item.textItems.map((i) => (
                  <li className=""> {i}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      ))}

      <p className="my-10">
        Contact us today to discuss how our innovative drone services can meet
        your aerial photography and videography needs.
      </p>
      <p className="mb-10">
        At Indiana Bones, we're not just keeping up with technology – we're
        soaring above the competition to bring you the best in safety and
        service.
      </p>
      <p>Contact: sam.zambon@indianabones.ca</p>
    </Section>
  );
};

export default DronePage;
