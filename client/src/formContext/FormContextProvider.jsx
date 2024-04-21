import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

const initalState = {
  firstName: "",
  lastName: "",
  wheels: "",
  vehicleType: "",
  vehicleModel: "",
  startDate: "",
  endDate: "",
};

export const FormContext = createContext();

export const FormContextProvider = ({ children }) => {
  const [formState, formDispatch] = useReducer(reducer, initalState);
  return (
    <FormContext.Provider value={{ formState, formDispatch }}>
      {children}
    </FormContext.Provider>
  );
};
