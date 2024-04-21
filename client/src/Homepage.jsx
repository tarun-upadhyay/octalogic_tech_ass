import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import StepperComp from "./Components/StepperComp";
import UserDetail from "./Components/UserDetail";
import WheelsDetails from "./Components/WheelsDetails";
import TypeOfVehicle from "./Components/TypeOfVehicle";
import VehicleModel from "./Components/VehicleModel";
import DatePickerComp from "./Components/DatePickerComp";
import "react-datepicker/dist/react-datepicker.css";

const Homepage = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <div className="w-[90%] md:w-[60%] lg:w-[50%] mx-auto">
      <div className="my-10">
        <h1 className="text-4xl font-bold text-[#26a69a] text-center">
          Welcome to Vehicle Details form
        </h1>
        <StepperComp
          setIsFirstStep={setIsFirstStep}
          setIsLastStep={setIsLastStep}
          activeStep={activeStep}
        />
        {activeStep === 0 && (
          <section className="mt-16 p-10 mx-auto shadow-xl rounded-md bg-white">
            <UserDetail handleNext={handleNext} />
          </section>
        )}
        {activeStep === 1 && (
          <section className="mt-16 p-10 mx-auto shadow-xl rounded-md bg-white">
            <WheelsDetails handleNext={handleNext} />
          </section>
        )}
        {activeStep === 2 && (
          <section className="mt-16 p-10 mx-auto shadow-xl rounded-md bg-white">
            <TypeOfVehicle handleNext={handleNext} />
          </section>
        )}
        {activeStep === 3 && (
          <section className="mt-16 p-10 mx-auto shadow-xl rounded-md bg-white">
            <VehicleModel handleNext={handleNext} />
          </section>
        )}
        {activeStep === 4 && (
          <section className="mt-16 p-10 mx-auto shadow-xl rounded-md bg-white">
            <DatePickerComp handleNext={handleNext} />
          </section>
        )}
        <div className="mt-16 flex justify-between">
          <Button
            onClick={handlePrev}
            disabled={isFirstStep}
            className={`${isFirstStep ? "invisible" : "visible"}`}
          >
            Prev
          </Button>
          {isLastStep ? (
            <Button className="bg-[#26a69a]">Submit</Button>
          ) : (
            <Button onClick={handleNext} disabled={isLastStep}>
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
