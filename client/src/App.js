import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import { FormContextProvider } from "./formContext/FormContextProvider";
import "react-datepicker/dist/react-datepicker.css";
import "react-loading-skeleton/dist/skeleton.css";

import AllBooking from "./AllBooking";
const App = () => {
  return (
    <main className="font-conf bg-gray-100 pb-10">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <FormContextProvider>
              <Homepage />
            </FormContextProvider>
          }
        />
        <Route path="/all-bookings" element={<AllBooking />}></Route>
      </Routes>
    </main>
  );
};

export default App;
