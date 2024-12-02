import React from "react";
import Section from "../components/Section";
import Reveal from "../libs/Reveal";
import Heading from "../components/Heading";
import { indyDog3 } from "../assets";
import { cancellationGeneralInformation, cancellationPolicyBoardingSitting, cancellationPolicyMembership, cancellationStaffOnly } from "../constants";
import { cancellationPolicyNonMembers } from "../constants";

const summary = ['This policy outlines cancellation and rescheduling procedures for membership holders, sporadic booking clients, and dog boarding/sitting services. We strive to provide high-quality service while maintaining fairness and transparency.']

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
              <h2 className="uppercase text-xl bold mb-15 text-center">Summary</h2>
              <p className=" text-color-400 text-center">
                { summary }
              </p>
            </div>
            {/* <div className="flex items-center justify-center">
              <img
                src={indyDog3}
                className="h-[20rem] w-[20rem] sm:h-[30rem] sm:w-[25rem] rounded-lg"
                alt=""
              />
            </div> */}
          </div>
          <h1 className="underline uppercase text-xl text-center">I. Membership Holders</h1>
          <div className="lg:w-1/2">
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
          <h1 className="underline uppercase text-xl text-center">II. Sporadic Booking (Non-Members)</h1>
          <div className="lg:w-1/2">
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
          <h1 className="underline uppercase text-xl text-center">III. Dog Boarding and Dog Sitting</h1>
          <div className="lg:w-1/2">
            { cancellationPolicyBoardingSitting.map((item) => (
              <div className="text-left mx-auto sm:w-3/4 mb-20">
                <h2 className="text-xl my-5"> {item.type} </h2>
                <ul className="list-disc text-color-300">
                  { item.itens.map((i) => (
                    <div>
                      <li className="my-2"> 
                        <b className="underline"> { i.title ?  i.title + ':' : null } </b>
                        { i.info ? i.info : null } 
                      </li>
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

          <h1 className="underline uppercase text-xl text-center">IV. General Information</h1>
          <div className="lg:w-1/2">
            { cancellationGeneralInformation.map((item) => (
              <div className="text-left mx-auto sm:w-3/4 mb-20">
                <h2 className="text-xl my-5"> {item.type} </h2>
                <ul className="list-disc text-color-300">
                  { item.itens.map((i) => (
                    <div>
                      <li className="my-2"> 
                        <b className="underline"> { i.title ?  i.title + ':' : null } </b>
                        { i.info ? i.info : null } 
                      </li>
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
              Indiana Bones Dog Adventures - Internal ISO 9001:2015 Compliance Plan
            </h3>
            <h2 className="text-center">
            This document outlines Indiana Bones Dog Adventures' Quality Management System (QMS) elements in accordance with ISO 9001:2015 standards. This is for internal use only.
            </h2>
            {cancellationStaffOnly.map((safety) => (
            <div className="text-left mx-auto sm:w-1/2 my-20">
              <h1 className="text-xl my-5"> {safety.mainTitle}</h1>
              <ul className="list-disc text-color-300">
                {safety.itens.map((item) => (
                  <div>
                    <li className="my-2"> <b>{item.title}:</b>  {item.text} </li>
                    { item.itens ? item.itens.map((i) => (
                      <li className="ml-5"> { i } </li>
                    )) : null}
                    

                  </div>
                ))}
              </ul>
            </div>
          ))}
          </div>
          
        </main>
      </Reveal>
    </Section>
  )
}

export default CancellationPolicyPage