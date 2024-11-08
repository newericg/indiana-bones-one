import CountUp from "react-countup";
import Reveal from "../libs/Reveal";
import { companyServices } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <Reveal width="100%">
      <div className={className}>
        <div className="flex flex-col justify-center items-center bg-black-layer py-32">
          <h1 className="tagline mb-6 text-center text-n-1/50 text-xl sm:text-4xl">
            We are accepting new clients! Join Team Indy!
          </h1>
          <h2 className="text-n-1/50 tagline text-md sm:text-lg text-center px-10">
            Coverage area: Vancouver, West Van, and North Van.
          </h2>
          
          <ul className="flex flex-col sm:flex-row sm:my-5 text-n-1/50 w-full">
            {companyServices.map((item, index) => (
              <li
                className="flex flex-col items-center justify-center flex-1 h-[15.5rem] my-10"
                key={index}
              >
                <CountUp
                  delay={3}
                  end={item.number}
                  duration={5.75}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                  className="text-2xl sm:text-5xl"
                />
                <p className="uppercase sm:py-5">{item.text}</p>
              </li>
            ))}
          </ul>
          <h4 className="text-n-1/50 tagline mt-5 text-xs sm:text-md text-center">
          Except for Lynn Valley, Canyon Heights, West Bay, Renfrew-Collingwood, Renfrew-Heights, Killarney, Sunset, and Victoria-Fraserview.
          </h4>
        </div>
      </div>
    </Reveal>
  );
};

export default CompanyLogos;
