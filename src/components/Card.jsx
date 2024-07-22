import React from "react";
import HP from "../assets/headphone.jpg";

const Card = () => {
  return (
    <div className="border border-white p-4 rounded-md max-w-[300px] shadow-2xl">
      <div className="relative h-60 mb-4">
        <img
          src={HP}
          alt="/"
          className="absolute w-full  h-full object-fill  rounded"
        />
      </div>
      <div className="text-gray-300">
        <p className="text-4xl font-bold font-serif">Apple Headphone</p>
        <p className="font-bold text-black">Price: $280</p>
        <p className="text-sm font-light pt-4">
          These are the headphones you need to have to have an amazing life
        </p>
      </div>
    </div>
  );
};

export default Card;
