function HotelCard({ hotel }) {
  const { hotelName, pricing, address,images} = hotel;

  return (
    <div>
      <h2>{hotelName}</h2>
      <p>
        {address.street}, {address.city}, {address.state}, {address.country}
      </p>
     <p>
  Price: {pricing[0].originalPrice}
</p>
<p>
  Room Type: {pricing[0].roomType}
</p>
<img
        src={images?.main}
        alt={hotelName}
        className="hotel-image"
      />

    </div>
  );
}
export default HotelCard