import React from "react";

const Card = ({ title, text, img }) => {
  return (
    <div className="bg-gradient-to-r from-neutral-800  via-color-900/10 to-primary sm:flex py-10 sm:p-10 my-5 rounded-3xl 2xl:w-2/4 gap-10 mx-5">
      <div className="sm:flex flex-col justify-center align-middle p-5 sm:px-10 2xl:w-3/4">
        <h1 className="text-2xl text-left mb-5"> {title}</h1>
        <p className="text-n-4 text-justify 2xl:leading-8">{text}</p>
      </div>
      <div className="2xl:w-1/4 sm:mt-0 flex items-center justify-center p-5">
        <img className="rounded-xl w-1/2 h-auto sm:w-full" src={img} alt="" />
      </div>
    </div>
  );
};

export default Card;
