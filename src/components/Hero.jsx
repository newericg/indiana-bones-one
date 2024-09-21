import { useRef } from "react";
import { curve, dogHeader } from "../assets";
import Button from "./Button";
// import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import Section from "./Section";
import { BackgroundCircles, BottomLine } from "./design/Hero";
import Reveal from "../libs/Reveal";
import  {videoHero1, heroHorizontal, heroVertical}  from "../assets";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[8rem] -mt-[5.25rem] relative min-h-screen w-screen"
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      verticalLines
    >
      {/* <div className="container relative" ref={parallaxRef}>
        <div>
          <Reveal>
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
              <h2 className="body-1 max-w-3xl mx-auto mb-6 text-n-4 lg:mb-8">
                When walking won't do the trick
              </h2>
              
                <Button href="/newclients">
                  Join Team Indy
                </Button>

              
            </div>
          </Reveal>

          <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24 flex justify-end align-middle">
            <div className="relative z-1 p-0.5">
              <div className="relative">
                <div />
                <div className="md:aspect-[688/490] lg:aspect-[1024/490] -mt-16 sm:-mt-32">
                  <img
                    src={dogHeader}
                    className="w-full scale-[1.2] md:scale-[1.2]"
                    alt="Indiana Bones Dog"
                  />
                </div>
              </div>
            </div>
            <BackgroundCircles />
          </div>
        </div>
      </div> */}
      <div className="h-screen w-screen overflow-hidden">
        <video autoPlay muted loop id="myVideo" className="hidden sm:block h-[85vh] w-screen m-0 p-0 object-cover">
          <source src={heroHorizontal} type="video/mp4" />
        </video>
        <video autoPlay muted loop id="myVideo" className="sm:hidden h-[90vh] w-screen m-0 p-0 object-cover">
          <source src={heroVertical} type="video/mp4" />
        </video>
      </div>
      <Reveal>
        <CompanyLogos className="relative sm:mb-20 sm:mt-32 company-logos w-screen flex flex-col items-center" />
      </Reveal>

      {/* <BottomLine /> */}
    </Section>
  );
};

export default Hero;
