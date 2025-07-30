import React, { useEffect, useState } from "react";
import axiosInstance from "../network/axios";
import { useSearchParams } from "react-router-dom";
import Styles from "../styles/HotelSearchPage.module.scss"
export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const [hotels, setHotels] = useState([]);

  const country = searchParams.get("country");

  useEffect(() => {
    axiosInstance.get("/hotels").then((res) => {
      const allHotels = res.data;

      const filtered = country
        ? allHotels.filter((hotel) => hotel.address.countryIsoCode
 === country)
        : allHotels;

      setHotels(filtered);
    });
  }, [country]);

  return (
    <div className={Styles.container}>
      <div className={Styles.path}>
        <span><strong>Hotels</strong></span> | Total :<span className={Styles.blue}> {hotels.length} result</span>
        </div>
      <h2>Hotels in {country || "All Countries"}</h2>
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel.id}>
            {hotel.name} - {hotel.address.city} ({hotel.address.country})
          </li>
        ))}
      </ul>
    </div>
  );
}
