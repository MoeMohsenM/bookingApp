import React, { useEffect, useState } from 'react';
import axiosInstance from '../network/axios';
import HotelCard from '../components/HotelCard';

function HomePage() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axiosInstance.get('/hotels')
      .then((res) => setHotels(res.data))
      .catch((err) => console.error('Failed to fetch hotels:', err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Hotels</h1>
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
}

export default HomePage