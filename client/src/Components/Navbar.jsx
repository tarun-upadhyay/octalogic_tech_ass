import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-[90%] md:w-[70%] mx-auto">
      <nav className="flex flex-col md:flex-row justify-between p-5">
       <Link to="/">
       <img
          src="https://octalogic.in/images/logos/octalogic.svg"
          alt="navbar"
          className="h-20 w-20 hidden md:block"
        /></Link>

        <ul className="text-xl font-bold">
          <li className="inline-block m-5 cursor-pointer">
            <Link to={"/"}> Home</Link>
          </li>
          <li className="inline-block m-5 cursor-pointer">
            <Link to={"/all-bookings"}>All Bookings</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
