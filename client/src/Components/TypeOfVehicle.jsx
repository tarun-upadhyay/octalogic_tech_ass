import { Radio } from "@material-tailwind/react";
import React from "react";

const TypeOfVehicle = () => {
  return (
    <div className="">
      <h3 className="text-xl mb-4 leading-7 mt-4 font-bold">Type of vehicle</h3>
      <div className="my-6  gap-5 flex flex-col">
        <Radio name="color" color="green" label="Suv" />
        <Radio name="color" color="red" label="Hatchback" />
      </div>
    </div>
  );
};

export default TypeOfVehicle;
