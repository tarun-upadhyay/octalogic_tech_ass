import { Radio } from "@material-tailwind/react";
import React from "react";

const VehicleModel = () => {
  return (
    <div className="">
      <h3 className="text-xl mb-4 leading-7 mt-4 font-bold">Specific Model</h3>
      <div className="my-6  gap-5 flex flex-col text-xl font-bold">
        <Radio name="color" color="green" label="Suv" />
        <Radio name="color" color="red" label="Hatchback" />
      </div>
    </div>
  );
};

export default VehicleModel;
