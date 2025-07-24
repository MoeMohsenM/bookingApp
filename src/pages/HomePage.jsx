// import React, { useEffect, useState } from 'react';
// import axiosInstance from '../network/axios';
// import HotelCard from "../components/HotelCard"

// function HomePage() {
//   const [hotels, setHotels] = useState([]);

//   useEffect(() => {
//     axiosInstance.get('/hotels')
//       .then((res) => setHotels(res.data))
//       .catch((err) => console.error("Failed to fetch hotels:", err));
//   }, []); 

//   return (
//     <div>
//       {hotels.map((hotel) => (
//         <HotelCard key={hotel.id} hotel={hotel} />
//       ))}
//     </div>
//   );
// }

// export default HomePage;


import React, { useEffect, useState } from 'react';
import axiosInstance from '../network/axios';
import { useDispatch, useSelector } from 'react-redux';
import { chooseHotel, bookHotel } from "../features/Hotel/HotelSlice";

function HomePage() {
  const [hotels, setHotels] = useState([]);
  const dispatch = useDispatch();
  const selectedHotel = useSelector((store) => store.hotel); // To view selected state

  useEffect(() => {
    axiosInstance.get('/hotels')
      .then((res) => setHotels(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleChoose = (hotel) => {
    dispatch(chooseHotel(hotel));
  };

  const handleBook = () => {
    // Use dummy dates just to test reducer
    dispatch(bookHotel("2025-08-01", "2025-08-05"));
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Hotels</h1>
      {hotels.map((hotel) => (
        <div key={hotel.id} style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
          <h2>{hotel.hotelName}</h2>
          <p>{hotel.description}</p>
          <button onClick={() => handleChoose(hotel)}>Choose Hotel</button>
        </div>
      ))}

      <hr />

      <h2>Selected Hotel:</h2>
      <pre>{JSON.stringify(selectedHotel, null, 2)}</pre>

      {selectedHotel.id && !selectedHotel.isBooked && (
        <button onClick={handleBook}>Book Hotel</button>
      )}

      {selectedHotel.isBooked && (
        <p style={{ color: "green" }}>Hotel booked from {selectedHotel.checkInDate} to {selectedHotel.checkOutDate} 🎉</p>
      )}
    </div>
  );
}

export default HomePage;
