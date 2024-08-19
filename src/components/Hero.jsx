import { useRef } from "react";
import { curve, dogHeader } from "../assets";
import Button from "./Button";
// import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import Section from "./Section";
import { BackgroundCircles, BottomLine } from "./design/Hero";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div>
          <div className="relative z-10 max-w-[62rem] mx-auto text-center mb-[3.875rem] lg:mb-[6.25rem]">
            <h1 className="h1 mb-6">
              Indiana Bones Dog {` `}
              <span className="inline-block relative">
                Adventures{" "}
                <img
                  src={curve}
                  className="absolute top-full left-0 w-full xl:-mt-2"
                  width={624}
                  height={28}
                  alt="Curve"
                />
              </span>
            </h1>
            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
              When walking won't do the trick
            </p>
            <Button href="/pricing" white>
              Join Team Indy
            </Button>
          </div>
          <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24 flex justify-center align-middle">
            <div className="relative z-1 p-0.5">
              <div className="relative">
                <div />

                <div className="md:aspect-[688/490] lg:aspect-[1024/490] -mt-28 sm:-mt-72">
                  <img
                    src={dogHeader}
                    className="w-full scale-[1.2] md:scale-[1]"
                    width={1024}
                    height={490}
                    alt="AI"
                  />

                </div>
              </div>
            </div>
            <BackgroundCircles />
          </div>

        </div>

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
