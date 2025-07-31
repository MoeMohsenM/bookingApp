import { FaStar, FaParking, FaWifi } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import Styles from "../styles/HotelSearchCard.module.scss";
import { chooseHotel } from "../features/Hotel/HotelSlice";

function HotelSearchCard({ hotel }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBook = () => {
    dispatch(chooseHotel(hotel));
    navigate("/booking");
  };

  const priceObj = hotel?.pricing?.[0] || {};
  const totalNights = 2;
  const totalPrice = priceObj.discountedPrice
    ? priceObj.discountedPrice * totalNights
    : 0;

  return (
    <div
      className={Styles.card}
      style={{
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
      <Link className={Styles.imageLink} to={`/detail/${hotel?.id}`}>
        <figure style={{ position: "relative", margin: 0 }}>
          <img
            src={hotel?.images?.main}
            alt="Hotel"
            style={{ borderRadius: "8px 0 0 8px", height: "180px" }}
          />
          {priceObj.discount && (
            <span
              style={{
                position: "absolute",
                top: 10,
                left: 10,
                background: "#ffd700",
                color: "#333",
                borderRadius: "8px",
                padding: "2px 8px",
                fontWeight: 600,
                fontSize: "12px",
                zIndex: 2,
              }}
            >
              {priceObj.discount}% OFF
            </span>
          )}
          {hotel?.rating?.score >= 4.5 && (
            <span
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                background: "#0A6ADA",
                color: "#fff",
                borderRadius: "8px",
                padding: "2px 8px",
                fontWeight: 600,
                fontSize: "12px",
                zIndex: 2,
              }}
            >
              Featured
            </span>
          )}
        </figure>
      </Link>

      <div className={Styles.cardContent}>
        <div className={Styles.cardHeader}>
          <h4>{hotel?.name}</h4>
          <div className={Styles.rating}>
            <p>{hotel?.rating?.score}</p>
            <FaStar />
          </div>
        </div>

        <p className={Styles.address}>{hotel?.address?.street}</p>

        <div className={Styles.amenities}>
          {hotel?.amenities?.includes("Parking") && <FaParking title="Parking" />}
          {hotel?.amenities?.includes("Wifi") && <FaWifi title="WiFi" />}
          {hotel?.amenities?.filter(a => a !== "Parking" && a !== "Wifi").slice(0, 2).map((text, index) => (
            <span key={index}>{text}</span>
          ))}
        </div>

        <div className={Styles.cardFooter}>
          <div>
            <p className={Styles.price}>
              {priceObj.discount && (
                <span style={{ color: "#E08A00", fontWeight: 600, marginRight: 4 }}>{priceObj.discount}%</span>
              )}
              <span>${priceObj.discountedPrice || "-"}</span>
              <span style={{ fontSize: "12px", color: "#888", marginLeft: 6 }}>/night</span>
            </p>
            <p style={{ fontSize: "12px", color: "#444", margin: 0 }}>
              Total for {totalNights} nights: <strong>${totalPrice}</strong>
            </p>
          </div>
          <div className={Styles.buttons}>
            <Link to={`/hotel/${hotel?.id}`}>
              <button className={Styles.viewBtn}>View details</button>
            </Link>
            <button onClick={handleBook} className={Styles.bookBtn} style={{ fontWeight: 700, fontSize: 13 }}>
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelSearchCard;
