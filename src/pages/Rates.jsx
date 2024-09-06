import React from "react";
import Section from "../components/Section";
import Reveal from "../libs/Reveal";
import Heading from "../components/Heading";
import { rates } from "../constants";
import Button from "../components/Button";

const Rates = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem] mb-[5.25rem] min-h-screen text-center flex flex-col justify-center items-center px-8 sm:px-32"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <Reveal>
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center "
          title="Indy Services"
          tag="Rates"
        />
      </Reveal>

      {rates.map((item) => (
        <Reveal width="100%">
          <div className="border-2 border-color-400/5 rounded-xl  md:w-2/3 sm:min-h-[30rem] mx-auto my-10">
            <div className="flex flex-col sm:flex-row h-full">
              <div className=" w-100 sm:w-1/4 flex items-center justify-center object-cover opacity-70 rounded-xl">
                <img
                  src={item.picture}
                  alt="rates-picture-dog"
                  className="rounded-xl h-[18rem] sm:h-full w-full object-cover"
                />
              </div>
              <div className="sm:w-3/4 flex flex-col justify-between p-5 sm:p-10 text-left text-color-200">
                <div>
                  <h1 className="h5 sm:h4 text-center sm:text-left"> {item.title} </h1>
                  <p className="color-secondary text-justify mt-5"> {item.info}</p>
                  {item.services.map((i) => (
                    <div className="flex justify-between items-center gap-4 mt-6 w-full">
                      <div className="w-full sm:w-2/3">
                        <h1 className="h6 sm:h5"> {i.title} </h1>
                        {console.log(typeof i.description)}
                        {typeof i.description === "string" ? (
                          <p className="text-justify"> {i.description} </p>
                        ) : (
                          <ul>
                            {i.description.map((desc) => (
                              <li> {desc} </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      {i.price ? (
                        <div className="w-1/4">
                          <p className="h6 sm:h5 text-center">{i.price}</p>{" "}
                        </div>
                      ) : null}
                    </div>
                  ))}
                  {item.obs ? (
                    <p className="italic mt-5"> {item.obs} </p>
                  ) : null}
                </div>
                <div className="w-full flex justify-center sm:justify-start">
                  <Button href="https://indianabonesdogadventures.simplybook.me/v2/#book" target="_blank" className="mx-auto sm:mx-1 w-1/2 md:w-1/6 mt-10">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </Section>
  );
};

export default Rates;
