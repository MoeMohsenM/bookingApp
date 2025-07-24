// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { chooseHotel, bookHotel } from '../features/Hotel/HotelSlice';

// function HotelCard({ hotel }) {
//   const dispatch = useDispatch();
//   const selectedHotel = useSelector((state) => state.hotel);

//   const handleChoose = () => {
//     dispatch(chooseHotel(hotel));
//   };

//   const handleBook = () => {
//     dispatch(bookHotel("2025-08-01", "2025-08-05")); 
//   };

//   const { hotelName, pricing, address, images } = hotel;

//   return (
//     <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
//       <h2>{hotelName}</h2>
//       <p>
//         {address?.street}, {address?.city}, {address?.state}, {address?.country}
//       </p>
//       <p>
//         Price: {pricing?.[0]?.originalPrice} {pricing?.[0]?.currency}
//       </p>
//       <p>Room Type: {pricing?.[0]?.roomType}</p>
//       {images?.main && (
//         <img
//           src={images.main}
//           alt={hotelName}
//           style={{ width: '300px', borderRadius: '8px', marginTop: '10px' }}
//         />
//       )}

//       <div style={{ marginTop: '10px' }}>
//         <button onClick={handleChoose} style={{ marginRight: '10px' }}>
//           Choose Hotel
//         </button>
//         {selectedHotel?.id === hotel.id && !selectedHotel?.isBooked && (
//           <button onClick={handleBook}>Book Hotel</button>
//         )}
//         {selectedHotel?.id === hotel.id && selectedHotel?.isBooked && (
//           <p style={{ color: 'green', marginTop: '10px' }}>
//             Booked from {selectedHotel.checkInDate} to {selectedHotel.checkOutDate} 🎉
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default HotelCard;


import { useDispatch } from "react-redux";
import { chooseHotel } from "../features/Hotel/HotelSlice";
import { useNavigate } from "react-router-dom";

function HotelCard({ hotel }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChoose = () => {
    dispatch(chooseHotel(hotel));
    navigate(`/hotel/${hotel.id}`);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
      <h2>{hotel.hotelName}</h2>
      <p>{hotel.description}</p>
      <img
        src={hotel.images?.main}
        alt={hotel.hotelName}
        style={{ width: "200px", borderRadius: "8px" }}
      />
      <br />
      <button onClick={handleChoose} style={{ marginTop: "1rem" }}>
        View Details
      </button>
    </div>
  );
}

export default HotelCard;
