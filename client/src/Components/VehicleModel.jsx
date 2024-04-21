import { Radio } from "@material-tailwind/react";
import React, { useContext, useEffect, useState } from "react";
import { FormContext } from "../formContext/FormContextProvider";
import { addVehicleModel, addVehicleType } from "../formContext/action";
import Skeleton from "react-loading-skeleton";

const VehicleModel = () => {
  let [vehicleModel, setvehicleModel] = useState([]);
  let [loading, setLoading] = useState(true);
  const { formState, formDispatch } = useContext(FormContext);
  useEffect(() => {
    fetch(
      `http://localhost:5000/api/v1/vehicle/vehicleModel/${formState.vehicleType}`
    )
      .then((response) => response.json())
      .then((data) => {
        setvehicleModel(data.vehiclesModels);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Vehical Models:", error);
        setLoading(false);
      });
  }, []);
  const handleRadioChange = (value) => {
    formDispatch(addVehicleModel(value));
  };
  return (
    <div className="">
      <h3 className="text-xl mb-4 leading-7 mt-4 font-bold">Specific Model</h3>
      <div className="my-6  gap-5 flex flex-col text-xl font-bold">
        {loading ? <Skeleton count={5} /> : null}
        {vehicleModel.length > 0 && vehicleModel.length > 0
          ? vehicleModel.map((el, i) => (
              <Radio
                name="color"
                color={i % 2 === 0 ? "green" : "red"}
                label={el.vehicleModel}
                key={el.id}
                checked={formState.vehicleModel === el.id}
                onChange={() => handleRadioChange(el.id)}
              />
            ))
          : vehicleModel.length === 0 && !loading && <h1>No Data found</h1>}
      </div>
    </div>
  );
};

export default VehicleModel;
