import React, { useState } from "react";
import DatePicker from "react-datepicker";
const DatePickerComp = () => {
  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  return (
    <div className="">
      <h3 className="text-xl mb-4 leading-7 mt-4 font-bold">Select Dates</h3>
      <div className="my-6 flex gap-5 justify-center">
        <label htmlFor="" className="flex flex-col gap-1">
          Start Date
          <DatePicker
            selectsStart
            selected={startDate}
            onChange={(date) => setStartDate(date)}
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
            onChange={(date) => setEndDate(date)}
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
