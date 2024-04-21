import React from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import {
  UserIcon,
  TruckIcon,
  WrenchIcon,
  PaperAirplaneIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";
const StepperComp = ({ activeStep, setIsFirstStep, setIsLastStep }) => {
  return (
    <div className="mt-6">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step>
          <UserIcon className="h-5 w-5" />
        </Step>
        <Step>
          <TruckIcon className="h-5 w-5" />
        </Step>
        <Step>
          <WrenchIcon className="h-5 w-5" />
        </Step>
        <Step>
          <PaperAirplaneIcon className="h-5 w-5" />
        </Step>
        <Step>
          <CalendarDaysIcon className="h-5 w-5" />
        </Step>
      </Stepper>
    </div>
  );
};

export default StepperComp;
