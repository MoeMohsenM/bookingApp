import { useSelector } from "react-redux";

function HotelDetailsPage() {
  const hotel = useSelector((state) => state.hotel);

  if (!hotel?.id) {
    return <p style={{ padding: '2rem' }}>No hotel selected.</p>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{hotel.hotelName}</h1>
      <img
        src={hotel.images?.main}
        alt={hotel.hotelName}
        style={{ width: "300px", borderRadius: "8px" }}
      />
      <p style={{ marginTop: "1rem" }}>{hotel.description}</p>

      <h3>Address</h3>
      <p>
        {hotel.address.street}, {hotel.address.city}, {hotel.address.state},{" "}
        {hotel.address.country}
      </p>

      <h3>Room Info</h3>
      <p>Room Type: {hotel.pricing[0]?.roomType}</p>
      <p>Price: {hotel.pricing[0]?.originalPrice}</p>
    </div>
  );
}

export default HotelDetailsPage;
