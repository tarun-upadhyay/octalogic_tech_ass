import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { TrashIcon } from "@heroicons/react/24/solid";
import Swal from "sweetalert2";
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
  }, [loading]);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);
        try {
          const response = await fetch(
            `https://octalogic-tech-ass.onrender.com/api/v1/booking/delete/${id}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          setLoading(false);
          if (!response.ok) {
            setLoading(false);
            Swal.fire({
              title: "Failed in Delete!",
              text: "Your file has not been deleted.",
              icon: "error",
            });
            throw new Error(`Failed to delete booking with id ${id}`);
          }
        } catch (error) {
          console.error("Error deleting booking:", error.message);
        }
        Swal.fire({
          title: "Deleted!",
          text: "Your booking has been deleted.",
          icon: "success",
        });
      }
    });
  };
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
              <div>
                <span className="flex justify-end">
                  <TrashIcon
                    className="h-7 w-7 cursor-pointer text-red-500"
                    onClick={() => handleDelete(booking.id)}
                  />
                </span>
                <p className="font-bold my-1">
                  Name: {booking.firstName} {booking.lastName}
                </p>
                <p className="font-bold my-1">Booking ID: {booking.id}</p>
                <p>Start Date: {booking.startDate}</p>
                <p>End Date: {booking.endDate}</p>
                <p>Vehicle Type : {booking.vehicleTypeName}</p>
                <p>Vehicle Model : {booking.vehicleModelName}</p>
              </div>
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
