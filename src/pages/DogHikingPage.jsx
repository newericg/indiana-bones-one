import React from "react";
import Section from "../components/Section";
import Reveal from "../libs/Reveal";
import Heading from "../components/Heading";
import { dogHikingPageImg, dogHikingPageImg2 } from "../assets";
import Button from "../components/Button";

const summary = [
  {
    type: "What",
    text: "Dog Hiking",
  },
  {
    type: "When",
    text: "Weekdays - holidays included - mornings and afternoons.",
  },
  {
    type: "Where",
    text: "West Van trails.",
  },
  {
    type: "How:",
    text: "We pick up and drop off - a maximum of 6 dogs",
  },
  {
    type: "How long:",
    text: "1.5 hours.",
  },
  {
    type: "How much:",
    text: "$45/hike.",
  },
];

const hikingExplained = [
  "Welcome to our dog hiking service! We offer a friendly and exciting dog hiking experience for your furry friends. Our pack sizes are kept small, with a maximum of 6 dogs per pack, ensuring a safe and social environment for your pets. We provide morning and afternoon hikes, allowing flexibility in scheduling.",
  "During each hike, your dogs will enjoy 1.5 hours of off-leash hiking time, allowing them to explore and roam freely in nature. With transportation included, our total service duration ranges from 2:30 to 4 hours.",
  "The trails we use, Cypress Falls and Brother's Creek Trail, offer beautiful scenery and a variety of terrain for your dogs to conquer. Trust us to provide a fun and fulfilling hiking experience for your beloved pets!",
];

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

      <main className="flex flex-col items-center w-full text-justify sm:text-center text-n-4">
        <div className="lg:flex">
          <Reveal>
            <picture className="flex sm:h-[30rem] sm:w-[40rem]">
              <img
                src={dogHikingPageImg2}
                alt="dog barking in the woods"
                className="object-contain w-full"
              />
            </picture>
          </Reveal>
          <div className="flex flex-col justify-start sm:items-center sm:justify-center">
            <Reveal>
              <p className="mb-10 text-xl">Summary</p>
            </Reveal>
            <ul>
              {summary.map((item, key) => (
                
                  <li className=" my-2 w-full text-center">
                    <b>{item.type}:</b>  {item.text}
                  </li>
                
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:mt-40 lg:w-1/2 items-center">
          <Reveal>
            <picture className="flex sm:h-[30rem] sm:w-[40rem] my-12">
              <img
                src={dogHikingPageImg}
                alt="dog barking in the woods"
                className="object-contain w-full"
              />
            </picture>
          </Reveal>
          <div>
            <Reveal>
              <h1 className=" text-xl uppercase"> Dog Hiking Explained</h1>
            </Reveal>
            {hikingExplained.map((item, key) => (
              <Reveal>
                <p className="my-5 sm:my-10"> {item} </p>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-center">
          <Button
            href="https://indianabonesdogadventures.simplybook.me/v2/#book"
            target="_blank"
            className="mx-auto sm:mx-1 w-1/2 md:w-1/6 mt-10"
          >
            Book Now
          </Button>
        </div>
      </main>
    </Section>
  );
};

export default DogHikingPage;
