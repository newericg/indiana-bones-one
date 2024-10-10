import React from "react";
import Heading from "../components/Heading";
import Section from "../components/Section";
import Reveal from "../libs/Reveal";
import Button from "../components/Button";
import { dogHikingPageImg6 } from "../assets";
import { banner3 } from "../assets";

const weekendWalksExplained = [
  "Embark on an unforgettable adventure with our unique dog camping trip service! Designed exclusively for your furry friends, these tailor-made excursions promise the ultimate outdoor experience. Your dog's happiness and well-being are our top priorities so we require a minimum of 2 days for each camping trip. This ensures ample time for exploration, play, and bonding among our four-legged companions. To maintain a cozy and intimate setting, we limit each trip to a maximum of 4 dogs, guaranteeing a personalized and tailored experience for each pup.",

  "Our dog camping trips are available exclusively on weekends, making it convenient for busy pet owners to plan a getaway and allow their dogs to explore the wonders of nature. We have carefully selected a range of awe-inspiring locations for our camping trips, including Golden Years, Manning Park, Birkenhead Lake, Nairn Falls, Sasquatch, Tofino, and Porpoise Bay. Each destination offers various outdoor activities, from majestic waterfalls and invigorating hikes to serene lakeside retreats. Please note that our trips are available during the spring and summer seasons, allowing your dog to enjoy the pleasant weather and immerse themselves in the beauty of nature. To reserve your dog's spot on a camping trip, kindly email us at logistics@indianabones.ca. We kindly request that you make your reservation at least 2 weeks in advance to ensure availability. At Indiana Bones Dog Adventures, we believe every dog deserves an exciting exploration of the great outdoors. Join us today and give your furry friend an experience they will never forget!",
];

const CampingTripPage = () => {
  return (
    <Section
    className="pt-[8rem] -mt-[5.25rem] mb-[5.25rem] min-h-screen text-center flex flex-col items-center px-8 sm:px-32"
    crossesOffset="lg:translate-y-[5.25rem]"
    customPaddings
    verticalLines
    >
      <picture className="flex sm:h-[40rem] w-screen">
        <img
          src={banner3}
          alt="dog barking in the woods"
          className="object-cover w-full"
        />
      </picture>
      <Reveal>
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center mt-10"
          title="Camping Trip"
          tag="Services"
        />
      </Reveal>

      <main className="flex flex-col items-center w-full text-justify sm:text-center text-n-4">
        <div className="flex flex-col lg:w-1/2 items-center">
          <Reveal>
            <picture className="flex sm:h-[30rem] sm:w-[40rem] my-12 rounded-xl">
              <img
                src={dogHikingPageImg6}
                alt="dog barking in the woods"
                className="object-contain w-full "
              />
            </picture>
          </Reveal>
          <div>
            <Reveal>
              <h1 className=" text-xl uppercase"> Camping Trip Explained </h1>
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
            href="https://indianabonesdogadventures.simplybook.me/v2/#book/location/6/count/1/provider/any/"
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

export default CampingTripPage;
