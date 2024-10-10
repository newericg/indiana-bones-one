import React from "react";
import Heading from "../components/Heading";
import Section from "../components/Section";
import Reveal from "../libs/Reveal";
import Button from "../components/Button";
import {
  dogHikingPageImg4,
} from "../assets";
import { banner2 } from "../assets";

const weekendWalksExplained = [
  "Our experienced and trained staff will take your dog on a one-hour adventure in a carefully chosen park near your place to ensure maximum safety for your dog during the Weekend Walk. Our team will handle your dog with extra care and attention, ensuring that they are comfortable throughout the walk. We will employ positive reinforcement techniques to encourage good behavior and build trust with your pet.",
  "With the Weekend Walk, your dog will have an opportunity to engage in physical exercise, explore their surroundings, and gradually build confidence in a controlled and secure environment.Our team will ensure that the walk is tailored to your dog's needs, providing them with a positive and enriching experience. Book your dog's Weekend Walk today and give them the adventure they deserve!",

  "A maximum of two dogs is allowed per walker.",
];

const WeekendDogWalkingPage = () => {
  return (
    <Section
    className="pt-[8rem] -mt-[5.25rem] mb-[5.25rem] min-h-screen text-center flex flex-col items-center px-8 sm:px-32"
    crossesOffset="lg:translate-y-[5.25rem]"
    customPaddings
    verticalLines
    > 
    <picture className="flex sm:h-[40rem] w-screen">
        <img
          src={banner2}
          alt="dog barking in the woods"
          className="object-cover w-full"
        />
      </picture>
      <Reveal>
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center mt-10"
          title="Weekend Dog Walking | Vancouver"
          tag="Services"
        />
      </Reveal>

      <main className="flex flex-col items-center w-full text-justify sm:text-center text-n-4">
        <div className="flex flex-col lg:w-1/2 items-center">
          <Reveal>
            <picture className="flex sm:h-[30rem] sm:w-[40rem] my-12 rounded-xl border-1">
              <img
                src={dogHikingPageImg4}
                alt="dog barking in the woods"
                className="object-contain w-full rounded-xl border-1"
              />
            </picture>
          </Reveal>
          <div>
            <Reveal>
              <h1 className=" text-xl uppercase"> Weekend Walks Explained</h1>
            </Reveal>
            {weekendWalksExplained.map((item, key) => (
              <Reveal>
                <p className="my-5 sm:my-10"> {item} </p>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-center">
          <Button
            href="https://indianabonesdogadventures.simplybook.me/v2/#book/location/3/category/5/service/55/count/1/provider/any/"
            target="_blank"
            className="mx-auto sm:mx-1 w-1/2 md:w-[10rem] mt-10"
          >
            Book Now
          </Button>
        </div>
      </main>
    </Section>
  );
};

export default WeekendDogWalkingPage;
