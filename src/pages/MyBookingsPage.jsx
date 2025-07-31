import React from "react";
import { useSelector } from "react-redux";
import HotelSummaryCard from "../components/HotelSummaryCard";
import Styles from "../styles/MyBookingsPage.module.scss";
const SummaryPage = () => {
  const bookings = useSelector((state) => state.user.bookings);
  const user = useSelector((state) => state.user);
  console.log(bookings);
  return (
    <div className={Styles.container}>
      <div className={Styles.path}>
        <span>
          <strong>My Bookings </strong>
        </span>{" "}
        <span className={Styles.blue}> My bookings</span>
      </div>

      <div className={Styles.content}>
        <div className={Styles.items}>
          {bookings.length > 0 ? (
            bookings.map((hotel) => (
              <HotelSummaryCard
                className={Styles.item}
                key={hotel.id + hotel.checkInDate}
                hotel={hotel}
              />
            ))
          ) : (
            <p>No bookings yet.</p>
          )}
        </div>
        <div className={Styles.profile}>
          <div>
            <h2>Profile</h2>
            <div className={Styles.avatar}>
              {user.fullName
                ? (user.fullName[0] + (user.fullName.split(" ")[1]?.[0] || "")).toUpperCase()
                : ""}
            </div>
            <h3>{user.fullName}</h3>
            <p>
              <span role="img" aria-label="email">📧</span> {user.email}
            </p>
            <div className={Styles.loyalty}>
              <span>Loyalty Level: </span>
              <strong>
                {bookings.length > 10 ? "Gold" : bookings.length > 5 ? "Silver" : "Bronze"}
              </strong>
              <div className={Styles.progressBar}>
                <div
                  className={Styles.progress}
                  style={{ width: `${Math.min((bookings.length / 10) * 100, 100)}%` }}
                />
              </div>
            </div>
            <hr className={Styles.divider} />
            <div className={Styles.stats}>
              <div>
                <span role="img" aria-label="bookings">🛏️</span>
                <strong>{bookings.length}</strong>
                <span>Bookings</span>
              </div>
              <div>
                <span role="img" aria-label="last booking">🕒</span>
                <strong>
                  {bookings.length > 0
                    ? new Date(
                        bookings[bookings.length - 1].checkInDate
                      ).toLocaleDateString()
                    : "-"}
                </strong>
                <span>Last Booking</span>
              </div>
            </div>
            <div className={Styles.btn}>Edit Profile</div>
            <div className={Styles.total}>
              <strong>Total Paid:</strong>{" "}
              {bookings
                .reduce((acc, booking) => {
                  const price = booking.pricing?.[0]?.discountedPrice || 0;
                  return acc + price;
                }, 0)
                .toLocaleString()} {" "}
              USD
            </div>
            {bookings.length > 0 && (
              <div className={Styles.recentHotels}>
                <strong>Recent Hotels:</strong>
                <ul>
                  {bookings.slice(-3).map((b, i) => (
                    <li key={i}>{b.hotelName || b.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryPage;
