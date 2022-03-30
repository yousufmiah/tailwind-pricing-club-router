import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import Benefit from "../Benefit/Benefit";

const PricingOption = (props) => {
  const { name, price, benefits } = props.option;

  return (
    <div className="bg-white p-4 rounded-lg">
      <h2 className="bg-indigo-300 py-2 rounded text-xl font-bold">{name}</h2>
      <p>
        <span className="text-5xl font-bold">{price}</span>
        <span className="text-xl font-bold text-gray-500 ">/mo</span>
      </p>
      <div>
        <h3 className="text-xl font-bold text-left">Benifits:</h3>
        {benefits.map((benefit) => (
          <Benefit benefit={benefit}></Benefit>
        ))}
      </div>
      <button className="flex justify-center text-white items-center mt-5 hover:text-green-700 bg-green-500 font-bold text-xl py-2 w-full rounded">
        Buy Now <ArrowRightIcon className="w-6 h-6 ml-3 "></ArrowRightIcon>
      </button>
    </div>
  );
};

export default PricingOption;
