import Arrow from "../assets/svg/Arrow";
import ClipPath from "../assets/svg/ClipPath";
import { benefits } from "../constants";
import { GradientLight } from "./design/Benefits";
import Heading from "./Heading";
import Section from "./Section";
import { LiaDogSolid } from "react-icons/lia";
import Reveal from "../libs/Reveal";

const Benefits = () => {
  return (
    <Section className="sm:pb-0">
      <div className="container relative z-2 sm:mt-0">
        <Reveal>
          <Heading
            className="md:max-w-md lg:max-w-2xl text-center "
            title="What sets us apart?"
            tag="Features"
          />
        </Reveal>

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <Reveal>
              <div
                className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                style={{
                  backgroundImage: `url(${item.backgroundUrl})`,
                }}
                key={item.id}
              >
                <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                  <h5 className="h5 mb-5">{item.title}</h5>
                  <p className="body-2 mb-6 text-n-4">{item.text}</p>
                  <div className="flex items-center mt-auto">
                  <LiaDogSolid  size={50} color="#5E7A5E" />
                    {/* <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                      Read more
                    </p>
                    <Arrow /> */}
                  </div>
                </div>

                {item.light && <GradientLight />}

                <div
                  className="absolute inset-0.5 bg-primary"
                  style={{ clipPath: "url(#benefits)" }}
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        width={380}
                        height={362}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>

                <ClipPath />
              </div>

            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
