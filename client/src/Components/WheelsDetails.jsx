import { Radio } from "@material-tailwind/react";
import React, { useContext, useEffect } from "react";
import { FormContext } from "../formContext/FormContextProvider";
import { addWheels } from "../formContext/action";

const WheelsDetails = () => {
  const { formState, formDispatch } = useContext(FormContext);
  const handleRadioChange = (value) => {
    formDispatch(addWheels(value));
  };

  return (
    <div className="">
      <h3 className="text-xl mb-4 leading-7 mt-4 font-bold">
        Numbers of wheels ?
      </h3>
      <div className="my-6 flex gap-5 justify-center">
        <Radio
          name="color"
          color="green"
          label="Two Wheeler"
          checked={formState.wheels === "2"}
          onChange={() => handleRadioChange("2")}
        />
        <Radio
          name="color"
          color="red"
          label="Four Wheeler"
          checked={formState.wheels === "1"}
          onChange={() => handleRadioChange("1")}
        />
      </div>
    </div>
  );
};

export default WheelsDetails;
