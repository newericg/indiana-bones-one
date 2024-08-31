import React from "react";
import Heading from "../components/Heading";
import Section from "../components/Section";
import { newClientsInfos } from "../constants";
import Reveal from "../libs/Reveal";
import Button from "../components/Button";

const NewClientsPage = () => {
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
          title="Enrollment Procedure"
          tag="New Clients"
        />
        
      </Reveal>
      <Reveal>
        <h1 className="text-xl">
          The enrolment procedure is divided in 2 parts: Meet and Greet and
          Trials.
        </h1>
        <Button className="my-10 text-center" href="https://indianabonesdogadventures.simplybook.me/v2/" target="_blank"> Book Here</Button>
        {newClientsInfos.map((item, i) => (
          <div className="text-n-1  sm:w-[89rem] flex flex-col items-center">
            <h2 className="mt-12 text-xl">
              {i + 1} - {item.title}
            </h2>
            {item.info ? <p className="my-5 text-n-4 text-justify sm:text-center"> {item.info} </p> : null}
            {item.list ? (
              <ul className="mt-5 ">
                {item.list.map((item) => (
                  <li className="text-n-4 text-justify sm:text-center"> - {item} </li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
        <h2 className="mt-20">Note</h2>
        <p>
          - If the puppy is ready, the approval can be given earlier and the
          same applies vice versa. <br />- Before signing up, please ensure that
          you have checked our coverage area.
        </p>
      </Reveal>
    </Section>
  );
};

export default NewClientsPage;
