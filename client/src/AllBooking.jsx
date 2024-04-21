import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
const getRandomColorClass = () => {
  const colors = [
    "bg-red-100",
    "bg-blue-200",
    "bg-green-200",
    "bg-yellow-100",
    "bg-purple-200",
    "bg-pink-200",
    "bg-indigo-200",
    "bg-gray-200",
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};
const AllBooking = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://octalogic-tech-ass.onrender.com/api/v1/booking")
      .then((response) => response.json())
      .then((data) => {
        setBookings(data.bookings);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching bookings:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto pb-24 h-screen">
      <h1 className="text-4xl font-bold text-[#26a69a] text-center my-10">
        All Bookings
      </h1>
      {loading ? (
        <Skeleton count={20} />
      ) : bookings && bookings.length > 0 ? (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className={`p-3 font-bold md:p-5 md:px-8 shadow-2xl rounded-xl ${getRandomColorClass()}`}
            >
              <p className="font-bold my-1">
                Name: {booking.firstName} {booking.lastName}
              </p>
              <p>Start Date: {booking.startDate}</p>
              <p>End Date: {booking.endDate}</p>
              <p>Vehicle Type Id: {booking.vehicleTypeId}</p>
              <p>Vehicle Model Id: {booking.vehicleModelId}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No bookings found</p>
      )}
    </div>
  );
};

export default AllBooking;
