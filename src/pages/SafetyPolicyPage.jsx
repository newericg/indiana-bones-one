import React from "react";
import Section from "../components/Section";
import Reveal from "../libs/Reveal";
import Heading from "../components/Heading";
import { safetyMeasures, safetyStaffOnly } from "../constants";
import { indyDog1 } from "../assets";

const SafetyPolicyPage = () => {
  return (
    <Section className="mt-10">
      <Reveal>
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center"
          title="Indy Safety and Operational Policy "
          tag="Indiana Bones"
        />
      </Reveal>
      <Reveal>
        <main className="flex flex-col gap-20 justify-center items-center w-full px-10">
          <h1 className="text-2xl">Policy IBN-POL-003</h1>
          <div className="flex flex-col-reverse sm:flex-row justify-center gap-20">
            <div>
              <h2 className="uppercase bold mb-15">Summary</h2>
              <ul className="list-disc text-color-400">
                {safetyMeasures.map((item) => (
                  <li className="my-2">{item.title}</li>
                ))}
              </ul>
            </div>
            <div className="flex items-center">
              <img
                src={indyDog1}
                className="h-[20rem] w-[20rem] sm:h-[30rem] sm:w-[25rem] rounded-lg"
                alt=""
              />
            </div>
          </div>
          <h1 className="underline uppercase ">Safety Measures</h1>
          {safetyMeasures.map((measure) => (
            <div className="text-left mx-auto sm:w-1/2">
              <h1 className="text-xl"> {measure.title} </h1>
              <ul className="list-disc text-color-300">
                <li className="my-2">
                  <b>Policy:</b> {measure.policy}
                </li>
                <li className="my-2">
                  <b>Records:</b> {measure.records}
                </li>
                <li className="my-2">
                  <b>Review Frequency:</b> {measure.reviewFrequency}
                </li>
              </ul>
            </div>
          ))}
          <div>
            <h3 className="underline my-20 text-center">
              The information below is for the Indiana Bones Staff only.
            </h3>
            {safetyStaffOnly.map((safety) => (
            <div className="text-left mx-auto sm:w-1/2 my-20">
              <h1 className="text-xl my-5"> {safety.mainTitle}</h1>
              <ul className="list-disc text-color-300">
                {safety.itens.map((item) => (
                    <li className="my-2"> <b>{item.title}:</b>  {item.text} </li>
                ))}
              </ul>
            </div>
          ))}
          </div>
        </main>
      </Reveal>
    </Section>
  );
};

export default SafetyPolicyPage;
