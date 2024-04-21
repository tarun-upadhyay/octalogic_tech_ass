import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";

const App = () => {
  return (
    <main className="font-conf bg-gray-100 h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </main>
  );
};

export default App;
