import { check2, grid, loading1 } from "../assets";
import { roadmap } from "../constants";
import Button from "./Button";
import { Gradient } from "./design/Roadmap";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import Reveal from "../libs/Reveal";
import Arrow from "../assets/svg/Arrow";
import { Link } from "react-router-dom";
import { events } from "../constants";

const Roadmap = () => (
  <Section className="overflow-hidden">
    <div className="container md:pb-10">
      <Reveal>
        <Heading tag="Events" title="Check our latest events!" />
      </Reveal>
      <Reveal>
        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.slice(0, 4).map((item) => {
            const status = item.status === "done" ? "Done" : "Coming up!";

            return (
              <div
                className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                  item.colorful ? "bg-conic-gradient" : "bg-color-900"
                }`}
                key={item.id}
              >
                <div className="relative p-8 bg-primary rounded-[2.4375rem] overflow-hidden xl:p-15 w-full">
                  <div className="absolute top-0 left-0">
                    <img
                      className=" cover"
                      src={grid}
                      width={550}
                      height={550}
                      alt="Grid"
                    />
                  </div>
                  <div className="relative z-1">
                    <div className="flex items-center justify-between max-w-[27rem] mb-15 md:mb-20">
                      <Tagline>{item.date}</Tagline>

                      <div className="flex items-center px-4 py-1 bg-white rounded text-color-900 ">
                        <img
                          className="mr-2.5"
                          src={item.status === "done" ? check2 : loading1}
                          width={16}
                          height={16}
                          alt={status}
                        />
                        <div className="tagline">{status}</div>
                      </div>
                    </div>

                    <div className="mb-10 -my-10 mx-5 ">
                      <img
                        className="w-full rounded-xl opacity-85 transition duration-300 ease-in-out hover:shadow-lg object-cover"
                        src={item.imageUrl}
                        alt={item.title}
                      />
                    </div>
                    <h4 className="h4 mb-4">{item.title}</h4>
                    <p className="body-2 text-n-4">{item.text}</p>
                    <div className="flex mt-5">
                      <Link
                        state={item.detailsPage}
                        to={item.details}
                        className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider hover:po"
                      >
                        Read more
                      </Link>
                      <Arrow />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* <Gradient /> */}
        </div>
      </Reveal>
      {/* <Reveal>
      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button href="/events">More events</Button>
      </div>
    </Reveal> */}
    </div>
  </Section>
);

export default Roadmap;
