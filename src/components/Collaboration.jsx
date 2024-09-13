import { brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import { indianabones_logo2 } from "../assets";
import { dogCollab } from "../assets";
import Reveal from "../libs/Reveal";
import Heading from "./Heading";

const Collaboration = () => {
  return (
    <Section className="mt-10">
      <Reveal>
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center"
          title="What we do"
          tag="Services"
        />
      </Reveal>
      <div className="container lg:flex">
        <div className="max-w-[35rem]">
          <ul className="max-w-[22rem] mb-10 md:mb-14 mx-6 sm:mx-0">
            <Reveal>
              {collabContent.map((item) => (
                <li className="mb-3 py-3" key={item.id}>
                  <div className="flex items-center">
                    <img src={check} width={24} height={24} alt="check" />
                    <h6 className="body-2 ml-5">{item.title}</h6>
                  </div>
                  {item.text && (
                    <p className="body-2 mt-3 text-n-3">{item.text}</p>
                  )}
                </li>
              ))}
            </Reveal>
          </ul>
          <a href="/whatwedo" className="flex justify-center sm:justify-start">
            <Button>Read more</Button>
          </a>
        </div>
        <Reveal>
          <div className="lg:ml-auto xl:w-[38rem] mt-20 sm:mt-4">
            <p className="body-2 mb-8 text-center text-white md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
              {collabText}
            </p>

            <div className="relative left-1/2 flex w-[18rem] aspect-square border border-color-800 rounded-full -translate-x-1/2 scale:75 md:scale-100">
              <div className="flex w-60 aspect-square m-auto border border-color-800 rounded-full">
                <div className="w-[16rem] aspect-square m-auto">
                  <div className="flex items-center justify-center w-full h-full rounded-full">
                    <img
                      src={indianabones_logo2}
                      width={120}
                      height={120}
                      alt="indiana bones logo"
                    />
                  </div>
                </div>
              </div>

              {/* <ul>
                {collabApps.map((app, index) => (
                  <li
                    key={app.id}
                    className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                      index * 45
                    }`}
                  >
                    <div
                      className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                        index * 45
                      }`}
                    >
                      <img
                        className="m-auto"
                        width={app.width}
                        height={app.height}
                        alt={app.title}
                        src={app.icon}
                      />
                    </div>
                  </li>
                ))}
              </ul> */}

              <LeftCurve />
              <RightCurve />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
};

export default Collaboration;
