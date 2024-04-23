import { Radio } from "@material-tailwind/react";
import React, { useContext, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { FormContext } from "../formContext/FormContextProvider";
import { addVehicleType } from "../formContext/action";

const TypeOfVehicle = () => {
  let [vehicleTypes, setVehicleTypes] = useState([]);
  let [loading, setLoading] = useState(true);
  const { formState, formDispatch } = useContext(FormContext);
  useEffect(() => {
    fetch(
      `https://octalogic-tech-ass.onrender.com/api/v1/vehicle/vehicleType/${formState.wheels}`
    )
      .then((response) => response.json())
      .then((data) => {
        setVehicleTypes(data.vehicles);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching bookings:", error);
        setLoading(false);
      });
  }, []);
  const handleRadioChange = (value, typeName) => {
    formDispatch(addVehicleType({ value, typeName }));
  };

  return (
    <div className="">
      <h3 className="text-xl mb-4 leading-7 mt-4 font-bold">Type of vehicle</h3>
      <div className="my-6  gap-5 flex flex-col">
        {loading ? <Skeleton count={5} /> : null}
        {vehicleTypes && vehicleTypes.length > 0
          ? vehicleTypes.map((el, i) => (
              <Radio
                name="color"
                color={i % 2 === 0 ? "green" : "red"}
                label={el.vehicleType}
                key={el.id}
                checked={formState.vehicleType === el.id}
                onChange={() => handleRadioChange(el.id, el.vehicleType)}
              />
            ))
          : vehicleTypes &&
            vehicleTypes.length === 0 &&
            !loading && <h1>No Data found</h1>}
      </div>
    </div>
  );
};

export default TypeOfVehicle;
