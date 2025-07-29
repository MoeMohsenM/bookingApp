import React from "react";
import { useSelector } from "react-redux";
import HotelSummaryCard from "../components/HotelSummaryCard";

const SummaryPage = () => {
  const bookings = useSelector((state) => state.user.bookings);

  return (
    <div>
      <h2>Booking Summary</h2>
      {bookings.length > 0 ? (
        bookings.map((hotel) => (
          <HotelSummaryCard key={hotel.id + hotel.checkInDate} hotel={hotel} />
        ))
      ) : (
        <p>No bookings yet.</p>
      )}
    </div>
  );
};

export default SummaryPage;
