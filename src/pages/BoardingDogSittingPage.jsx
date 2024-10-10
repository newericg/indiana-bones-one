import React from "react";
import Heading from "../components/Heading";
import Section from "../components/Section";
import Reveal from "../libs/Reveal";
import Button from "../components/Button";
import {
  dogHikingPageImg3,
} from "../assets";
import { banner4 } from "../assets";

const weekendWalksExplained = [
  "Welcome to our exclusive dog-sitting service, tailored specifically for our valued existing clients. We understand that your beloved canines are not just pets, but cherished members of your family.",

  "Our team of experienced and attentive dog sitters is dedicated to ensuring that your furry friends have a blast while in our care. With at least two exciting walks a day, your dogs will have ample opportunities to explore and enjoy themselves. ",

  "We prioritize a discreet and careful approach to our services, guaranteeing the safety and well-being of your pets at all times. So, when you need someone reliable, fun-loving, and discreet to take care of your four-legged companion, our exceptional dog-sitting service is here for you. ",

  "Your dogs deserve nothing but the best, and we are committed to providing just that!",
];

const BoardingDogSittingPage = () => {
  return (
    <Section
    className="pt-[8rem] -mt-[5.25rem] mb-[5.25rem] min-h-screen text-center flex flex-col items-center px-8 sm:px-32"
    crossesOffset="lg:translate-y-[5.25rem]"
    customPaddings
    verticalLines
    >
        <picture className="flex sm:h-[40rem] w-screen">
        <img
          src={banner4}
          alt="dog barking in the woods"
          className="object-cover w-full"
        />
      </picture>
      <Reveal>
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center mt-10"
          title="Boarding & Dog Sitting | Vancouver"
          tag="Services"
        />
      </Reveal>

      <main className="flex flex-col items-center w-full text-justify sm:text-center text-n-4">
        <div className="flex flex-col lg:w-1/2 items-center">
          <Reveal>
            <picture className="flex sm:h-[30rem] sm:w-[40rem] my-12 rounded-xl">
              <img
                src={dogHikingPageImg3}
                alt="dog barking in the woods"
                className="object-contain w-full "
              />
            </picture>
          </Reveal>
          <div>
            <Reveal>
              <h1 className=" text-xl uppercase">
                {" "}
                Boarding & Dog Sitting Explained{" "}
              </h1>
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
            href="https://indianabonesdogadventures.simplybook.me/v2/#book/location/3/count/1/provider/any/"
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

export default BoardingDogSittingPage;
