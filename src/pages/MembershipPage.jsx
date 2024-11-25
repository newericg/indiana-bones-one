import React from "react";
import Heading from "../components/Heading";
import Section from "../components/Section";
import Reveal from "../libs/Reveal";
import Button from "../components/Button";
import { banner4, banner5, dogHikingPageImg3 } from "../assets";
import { membershipBenefits } from "../constants";

const membershipResume = [
  "Our service offers a variety of benefits designed specifically for dog owners. As a member, you can select recurring weekly spots based on your membership tier (subject to availability), which will ensure that your furry companion receives regular exercise and socialization. The membership agreement is automatically renewed every three months, and the payment is processed monthly for your convenience. The term 'renew' and its variations can also refer to the start of a new monthly payment cycle after one month of the agreement has passed.",
];

const MembershipPage = () => {
  return (
    <Section
      className="mb-[5.25rem] min-h-screen text-center flex flex-col items-center px-8 md:px-32"
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
    >
      <picture className="flex sm:h-[40rem] w-screen">
        <img
          src={banner5}
          alt="dog barking in the woods"
          className="object-cover w-full"
        />
      </picture>
      <Reveal>
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center mt-10"
          title="Indy Membership"
          tag="Benefits"
        />
      </Reveal>
      <Reveal>
        <main className="flex flex-col items-center w-full text-justify sm:text-center text-n-4 lg:px-32">
          <div className="flex flex-col items-center lg:w-1/2">
            <div>
              <Reveal>
                <p>{membershipResume}</p>
              </Reveal>

              <Reveal>
                <h1 className=" text-xl uppercase my-10">
                  The benefits include:
                </h1>
              </Reveal>
              <ul className="flex flex-col">
                {membershipBenefits.map((i, key) => (
                  <Reveal className="ml-0">
                    <li className="my-4 text-justify">
                      <b className="underline">{i.item}:</b> {i.info}
                    </li>
                  </Reveal>
                ))}
              </ul>
              <p className="mt-32">
                Overall,  Indy Membership provides a comprehensive package of
                benefits to ensure that your dog receives regular exercise,
                care, and attention, while also offering cost-saving
                opportunities and additional perks for members.
              </p>
            </div>
              <Button white className="my-10 text-center border-white mx-auto" href="https://indianabonesdogadventures.simplybook.me/v2/#membership" target="_blank">Choose Plan!</Button>
          </div>
        </main>
      </Reveal>
    </Section>
  );
};

export default MembershipPage;
