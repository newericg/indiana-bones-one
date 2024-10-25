import React from "react";
import Section from "../components/Section";
import Reveal from "../libs/Reveal";
import Heading from "../components/Heading";
import { indyDog2 } from "../assets";
import { cancellationPolicyMembership } from "../constants";
import { privacyPolicy } from "../constants";

const summary = [
  "This Privacy Policy outlines the types of information collected by Indiana Bones Dog Adventures and how it is used. The policy applies to information collected online through our website, https://indianabones.ca, and does not cover information collected offline or through other channels. For any additional questions or information about our Privacy Policy, please contact us.",
];

const PrivacyPolicyPage = () => {
  return (
    <Section className="mt-10">
      <Reveal>
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center"
          title="Privacy Policy"
          tag="Indiana Bones"
        />
      </Reveal>
      <Reveal>
        <main className="flex flex-col gap-20 justify-center items-center w-full px-10">
          <h1 className="text-2xl">Policy Number: IBN-POL-002</h1>
          <div className="flex flex-col-reverse sm:flex-row justify-center gap-20 md:w-1/2">
            <div className="md:w-1/2">
              <h2 className="uppercase bold mb-15">Summary</h2>
              <p className=" text-color-400">{summary}</p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={indyDog2}
                className="h-[20rem] w-[20rem] sm:h-[30rem] sm:w-[25rem] rounded-lg"
                alt=""
              />
            </div>
          </div>
          <div className=" md:w-1/2">
            {privacyPolicy.map((item) => (
              <div className="text-left mx-auto sm:w-3/4 mb-20">
                <h2 className="text-xl my-5"> {item.title} </h2>
                <p className="my-2 text-color-300"> {item.info} </p>
                <ul className="list-disc text-color-300">
                  
                    {item.infoList
                      ? item.infoList.map((i) => (
                          <li className="ml-10"> {i} </li>
                        ))
                      : null}
                  
                </ul>
                { item.info2 ? <p className="my-2 text-color-300"> {item.info2} </p> : null
                }
              </div>
            ))}
          </div>
        </main>
      </Reveal>
    </Section>
  );
};

export default PrivacyPolicyPage;
