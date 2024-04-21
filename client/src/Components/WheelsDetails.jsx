import { Radio } from "@material-tailwind/react";
import React from "react";

const WheelsDetails = () => {
  return (
    <div className="">
      <h3 className="text-xl mb-4 leading-7 mt-4 font-bold">
        Numbers of wheels ?
      </h3>
      <div className="my-6 flex gap-5 justify-center">
        <Radio name="color" color="green" label="Two Wheeler" />
        <Radio name="color" color="red" label="Four Wheeler" />
      </div>
    </div>
  );
};

export default WheelsDetails;
