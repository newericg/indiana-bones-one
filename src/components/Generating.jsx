import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex justify-center items-center h-[3.5rem] px-6 bg-secondary opacity-80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      {/* <img className="w-5 h-5 mr-4" src={loading} alt="Loading" /> */}
      When walking won't do the trick
    </div>
  );
};

export default Generating;
