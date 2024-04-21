import React from "react";

const Navbar = () => {
  return (
    <div className="w-[90%] md:w-[70%] mx-auto">
      <nav className="flex flex-col md:flex-row justify-between p-5">
        <img
          src="https://octalogic.in/images/logos/octalogic.svg"
          alt="navbar"
          className="h-20 w-20 hidden md:block"
        />
        <ul className="text-xl font-bold">
          <li className="inline-block m-5 cursor-pointer">Home</li>
          <li className="inline-block m-5 cursor-pointer">All Bookings</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;