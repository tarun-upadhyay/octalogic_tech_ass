import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import { FormContext } from "../formContext/FormContextProvider";
import { addEndDate, addStartDate } from "../formContext/action";

const DatePickerComp = () => {
  const { formState, formDispatch } = useContext(FormContext);
  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState(formState.startDate);
  const [endDate, setEndDate] = useState(formState.endDate);
  return (
    <div className="">
      <h3 className="text-xl mb-4 leading-7 mt-4 font-bold">Select Dates</h3>
      <div className="my-6 flex gap-5 justify-center">
        <label htmlFor="" className="flex flex-col gap-1">
          Start Date
          <DatePicker
            selectsStart
            selected={startDate}
            onChange={(date) => {
              const dateval = new Date(date);
              const dateString = dateval.toDateString();
              formDispatch(addStartDate(dateString));
              return setStartDate(date);
            }}
            startDate={startDate}
            placeholderText="Choose start date"
            className="p-2 bg-green-100"
          />
        </label>
        <label htmlFor="" className="flex flex-col gap-1">
          End Date
          <DatePicker
            selectsEnd
            selected={endDate}
            onChange={(date) => {
              const dateval = new Date(date);
              const dateString = dateval.toDateString();
              formDispatch(addEndDate(dateString));

              return setEndDate(date);
            }}
            endDate={endDate}
            startDate={startDate}
            minDate={startDate}
            placeholderText="Choose end date"
            className="p-2 bg-blue-100"
          />
        </label>
      </div>
    </div>
  );
};

export default DatePickerComp;
