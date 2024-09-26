import React from "react";
import Section from "../components/Section";
import Reveal from "../libs/Reveal";
import Heading from "../components/Heading";
import { quickWhip } from "../constants";
import Button from "../components/Button";
import { indyDog2 } from "../assets";

const QuickWhipPage = () => {
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
          title="Quick Whip Tutorial"
          tag="Discounted Dog Hiking"
        />
      </Reveal>
      <Reveal>
        <div className="w-full sm:w-1/2 mx-auto flex flex-col items-center gap-5 text-justify sm:text-center">
        <img className="sm:h-[35rem] w-[30rem]" src={indyDog2} alt="" />
          <p className="mt-5"> {quickWhip[0].tutorial} </p>
          <h2 className="my-5 text-xl text-color-400">Rules</h2>
          <p>Period: {quickWhip[0].period} </p>
          <p>Time: {quickWhip[0].time} </p>
          <p>{quickWhip[0].rules} </p>
          <p>{quickWhip[0].ruleTwo} </p>
        </div>
      </Reveal>

      <Reveal>
        <Button target="_blank" white className="my-20" href="https://indianabonesdogadventures.simplybook.me/v2/#book/location/4/category/1/provider/any/">
          {" "}
          Count me in!
        </Button>
      </Reveal>
    </Section>
  );
};

export default QuickWhipPage;
