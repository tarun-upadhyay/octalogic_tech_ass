import React, { useContext } from "react";
import { FormContext } from "../formContext/FormContextProvider";
import { addLastName, addName } from "../formContext/action";

const UserDetail = () => {
  const { formState, formDispatch } = useContext(FormContext);
  return (
    <div className="">
      <h3 className="text-xl mb-4 leading-7 mt-4 font-bold">
        First, what's your name?
      </h3>
      <div className="my-6 flex flex-col gap-5">
        <label htmlFor="">
          First Name
          <input
            className="flex h-10 w-full outline-none border-b-2 border-[#2ab2ce] bg-transparent text-lg placeholder:text-gray-400   disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="First name"
            name="firstName"
            onChange={(e) => formDispatch(addName(e.target.value))}
            value={formState.firstName}
          ></input>
        </label>
        <label htmlFor="">
          Last Name
          <input
            className="flex h-10 w-full outline-none border-b-2 border-[#2ab2ce] bg-transparent text-lg placeholder:text-gray-400   disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={(e) => formDispatch(addLastName(e.target.value))}
            value={formState.lastName}
          ></input>
        </label>
      </div>
    </div>
  );
};

export default UserDetail;
