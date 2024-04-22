import { Button } from "@material-tailwind/react";
import React, { useContext, useState } from "react";
import StepperComp from "./Components/StepperComp";
import UserDetail from "./Components/UserDetail";
import WheelsDetails from "./Components/WheelsDetails";
import TypeOfVehicle from "./Components/TypeOfVehicle";
import VehicleModel from "./Components/VehicleModel";
import DatePickerComp from "./Components/DatePickerComp";

import { FormContext } from "./formContext/FormContextProvider";
import { intialState } from "./formContext/action";

const Homepage = () => {
  const { formState, formDispatch } = useContext(FormContext);
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  const handleSubmitBooking = () => {
    fetch("https://octalogic-tech-ass.onrender.com/api/v1/booking/create", {
      method: "POST",
      body: JSON.stringify(formState), 
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        alert("Already booked!!!");
        throw new Error("Failed to create booking");
      })
      .then((data) => {
        console.log(data);
        alert("Booking Completed");
        setActiveStep(0);
        formDispatch(intialState());
        
      })
      .catch((err) => {
        console.error(err);
        
      });
  };
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
            <UserDetail />
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
            <Button
              onClick={handleSubmitBooking}
              className="bg-[#26a69a]"
              disabled={
                formState.startDate === "" ||
                formState.endDate === "" ||
                formState.firstName.length < 2 ||
                formState.firstName.length < 2 ||
                formState.wheels.length === "" ||
                formState.vehicleType === "" ||
                formState.vehicleModel === ""
              }
            >
              Submit
            </Button>
          ) : (
            <>
              {(() => {
                switch (activeStep) {
                  case 0:
                    return (
                      <Button
                        onClick={handleNext}
                        disabled={
                          isLastStep ||
                          formState.firstName.length < 2 ||
                          formState.lastName.length < 2
                        }
                      >
                        Next
                      </Button>
                    );
                  case 1:
                    return (
                      <Button
                        onClick={handleNext}
                        disabled={isLastStep || formState.wheels.length === ""}
                      >
                        Next
                      </Button>
                    );
                  case 2:
                    return (
                      <Button
                        onClick={handleNext}
                        disabled={isLastStep || formState.vehicleType === ""}
                      >
                        Next
                      </Button>
                    );
                  case 3:
                    return (
                      <Button
                        onClick={handleNext}
                        disabled={isLastStep || formState.vehicleModel === ""}
                      >
                        Next
                      </Button>
                    );

                  default:
                    return null;
                }
              })()}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
