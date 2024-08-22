import { companyServices } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50 text-4xl">
        We are accepting new clients! Join Team Indy!
      </h5>
      <ul className="flex my-5">
        {companyServices.map((item, index) => (
          <li
            className="flex flex-col items-center justify-center flex-1 h-[15.5rem]"
            key={index}
          >
            <img src={item.image} width={134} height={28} alt={item.image} />
            <p className="uppercase py-5">
              { item.text }
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
