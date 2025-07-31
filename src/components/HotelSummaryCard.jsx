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

  const displayPrice = Array.isArray(pricing) && pricing.length > 0 ? pricing[0] : null;

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
    <div
      style={{
        display: "flex",
        border: "1px solid #ddd",
        borderRadius: "12px",
        overflow: "hidden",
        marginBottom: "20px",
        position: "relative",
        width: "100%",
        backgroundColor: "#fff",
        boxShadow: "0 4px 16px rgba(10, 88, 202, 0.07)",
        transition: "transform 0.15s, box-shadow 0.15s",
        cursor: "pointer",
      }}
      onMouseOver={e => {
        e.currentTarget.style.transform = "translateY(-2px) scale(1.01)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(10, 88, 202, 0.13)";
      }}
      onMouseOut={e => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "0 4px 16px rgba(10, 88, 202, 0.07)";
      }}
    >
      <img
        src={images.main}
        alt={name}
        style={{
          width: "180px",
          objectFit: "cover",
          borderRadius: "12px 0 0 12px",
          borderRight: "1px solid #eee",
        }}
      />
      <div style={{ padding: "18px 20px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <h3 style={{ margin: 0, fontSize: "20px", fontWeight: 600 }}>{name}</h3>
          <span style={{ fontWeight: "bold", color: "#0A58CA" }}>
            {address.city}, {address.country}
          </span>
          <p style={{ fontSize: "14px", color: "#666", margin: "4px 0 8px" }}>Near {address.street}</p>
          <div style={{ display: "flex", gap: "10px", margin: "8px 0" }}>
            {amenities.includes("Parking") && <FaParking title="Parking" />}
            {amenities.includes("Wifi") && <FaWifi title="WiFi" />}
            {/* Add more icons for amenities if available */}
          </div>
          <div style={{ fontSize: "13px", marginTop: "8px", color: "#333" }}>
            <span>From: 📅 {formattedCheckIn}</span> | <span>To: 📅 {formattedCheckOut}</span>
          </div>
          <div style={{ fontSize: "13px", marginTop: "4px", color: "#333" }}>
            <span>
              Nights: {(() => {
                const inDate = new Date(checkInDate);
                const outDate = new Date(checkOutDate);
                const diff = (outDate - inDate) / (1000 * 60 * 60 * 24);
                return diff > 0 ? diff : 1;
              })()}
            </span>
            {displayPrice && (
              <>
                {" | "}
                <span>
                  Total: <strong style={{ color: "#E08A00" }}>${displayPrice.discountedPrice * ((new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24) || 1)}</strong>
                </span>
              </>
            )}
          </div>
        </div>
        <div style={{ marginTop: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
          {displayPrice && displayPrice.discount && (
            <span style={{
              background: "#ffd700",
              color: "#333",
              borderRadius: "8px",
              padding: "2px 8px",
              fontWeight: 600,
              fontSize: "12px"
            }}>
              {displayPrice.discount}% OFF
            </span>
          )}
          <button
            style={{
              marginLeft: "auto",
              background: "#0A58CA",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "6px 16px",
              fontWeight: 500,
              cursor: "pointer",
              fontSize: "14px",
              transition: "background 0.2s"
            }}
            onClick={() => alert('Feature coming soon!')}
          >
            View Details
          </button>
        </div>
      </div>
      <div
        style={{
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
          boxShadow: "0 2px 8px rgba(10, 88, 202, 0.13)"
        }}
      >
        <span style={{ marginRight: "4px" }}>{rating.score}</span>
        <MdStar color="white" />
      </div>
    </div>
  );
};

export default HotelSummaryCard;
