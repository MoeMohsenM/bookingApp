import React from "react";
import { FaParking, FaWifi } from "react-icons/fa";
import { MdStar } from "react-icons/md";

const HotelSummaryCard = ({ hotel }) => {
  const {
    name,
    address,
    rating,
    pricing,
    images,
    amenities,
    checkInDate,
    checkOutDate,
  } = hotel;

  const displayPrice = pricing[0]; // Assume single room is displayed
  const formattedCheckIn = new Date(checkInDate).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const formattedCheckOut = new Date(checkOutDate).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div style={styles.card}>
      <img src={images.main} alt={name} style={styles.image} />
      <div style={styles.details}>
        <div style={styles.titleSection}>
          <h3 style={styles.title}>{name}</h3>
          <span style={styles.location}>
            {address.city}, {address.country}
          </span>
          <p style={styles.address}>Near {address.street}</p>
        </div>

        <div style={styles.amenities}>
          {amenities.includes("Parking") && <FaParking />}
          {amenities.includes("Wifi") && <FaWifi />}
        </div>

        <p style={styles.discount}>
          {displayPrice.discount}{" "}
          <strong style={styles.price}>${displayPrice.discountedPrice}</strong>
        </p>

        <div style={styles.footer}>
          <span>From: 📅 {formattedCheckIn}</span> |
          <span> To: 📅 {formattedCheckOut}</span>
        </div>
      </div>

      <div style={styles.rating}>
        <span style={styles.ratingValue}>{rating.score}</span>
        <MdStar color="white" />
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: "flex",
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    marginBottom: "16px",
    position: "relative",
  },
  image: {
    width: "250px",
    objectFit: "cover",
  },
  details: {
    padding: "16px",
    flex: 1,
  },
  titleSection: {
    marginBottom: "8px",
  },
  title: {
    margin: 0,
    fontSize: "18px",
  },
  location: {
    fontWeight: "bold",
    color: "#444",
  },
  address: {
    fontSize: "14px",
    color: "#666",
  },
  amenities: {
    display: "flex",
    gap: "12px",
    margin: "8px 0",
  },
  discount: {
    color: "#E08A00",
    fontSize: "14px",
  },
  price: {
    color: "#000",
    fontSize: "18px",
    marginLeft: "8px",
  },
  footer: {
    fontSize: "13px",
    marginTop: "8px",
    color: "#333",
  },
  rating: {
    position: "absolute",
    right: "12px",
    top: "12px",
    backgroundColor: "#0A58CA",
    color: "white",
    borderRadius: "20px",
    padding: "4px 10px",
    display: "flex",
    alignItems: "center",
    fontWeight: "bold",
  },
  ratingValue: {
    marginRight: "4px",
  },
};

export default HotelSummaryCard;
