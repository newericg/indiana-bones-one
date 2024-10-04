import CountUp from "react-countup";
import { companyServices } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h1 className="tagline mb-6 text-center text-n-1/50 text-xl sm:text-4xl w-2/3">
        We are accepting new clients! Join Team Indy!
      </h1>
      <ul className="flex flex-col sm:flex-row sm:my-5 w-1/2 text-n-1/50">
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
    </div>
  );
};

export default CompanyLogos;
