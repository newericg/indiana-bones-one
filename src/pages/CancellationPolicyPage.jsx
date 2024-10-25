import React from "react";
import Section from "../components/Section";
import Reveal from "../libs/Reveal";
import Heading from "../components/Heading";
import { indyDog3 } from "../assets";
import { cancellationPolicyMembership } from "../constants";
import { cancellationPolicyNonMembers } from "../constants";

const summary = ['This document outlines the cancellation policy for both membership holders and sporadic booking (non-members) clients of Indiana Bones Dog Adventures. It includes definitions, payment terms, discontinuation of services, and procedures for cancellations and rescheduling. The policy is structured to align with ISO 9001:2015 standards, ensuring high-quality service and customer satisfaction.']

const CancellationPolicyPage = () => {
  return (
    <Section className="mt-10">
      <Reveal>
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center"
          title="Cancellation Policy"
          tag="Indiana Bones"
        />
      </Reveal>
      <Reveal>
        <main className="flex flex-col gap-20 justify-center items-center w-full px-10">
          <h1 className="text-2xl">Policy Number: IBN-POL-001</h1>
          <div className="flex flex-col-reverse sm:flex-row justify-center gap-20 md:w-1/2">
            <div className="md:w-1/2">
              <h2 className="uppercase bold mb-15">Summary</h2>
              <p className=" text-color-400">
                { summary }
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={indyDog3}
                className="h-[20rem] w-[20rem] sm:h-[30rem] sm:w-[25rem] rounded-lg"
                alt=""
              />
            </div>
          </div>
          <h1 className="underline uppercase">I. Membership Holders</h1>
          <div>
            { cancellationPolicyMembership.map((item) => (
              <div className="text-left mx-auto sm:w-3/4 mb-20">
                <h2 className="text-xl my-5"> {item.type} </h2>
                <ul className="list-disc text-color-300">
                  { item.itens.map((i) => (
                    <div>
                      <li className="my-2"> { i.title ? i.title + ': ' + i.info : i.info } </li>
                      { i.info2 ? i.info2.map((ii) => (
                        <li className="ml-10"> { ii } </li>
                      )) : null
                      
                    }
                    </div>
                  ))}
                </ul>

              </div>
            ))}
          </div>
          <h1 className="underline uppercase">II. Sporadic Booking (Non-Members)</h1>
          <div>
            { cancellationPolicyNonMembers.map((item) => (
              <div className="text-left mx-auto sm:w-3/4 mb-20">
                <h2 className="text-xl my-5"> {item.type} </h2>
                <ul className="list-disc text-color-300">
                  { item.itens.map((i) => (
                    <div>
                      <li className="my-2"> { i.title ? i.title + ': ' + i.info : i.info } </li>
                      { i.info2 ? i.info2.map((ii) => (
                        <li className="ml-10"> { ii } </li>
                      )) : null
                      
                    }
                    </div>
                  ))}
                </ul>

              </div>
            ))}
          </div>
          
          <div>
            <h3 className="underline my-20 text-center">
              The information below is for the Indiana Bones Staff only.
            </h3>
           
          </div>
        </main>
      </Reveal>
    </Section>
  )
}

export default CancellationPolicyPage