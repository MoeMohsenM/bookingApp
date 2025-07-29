// import React, { useEffect, useState } from "react";
// import axiosInstance from "../network/axios";

// export default function SearchPage() {
//   const [hotels, setHotels] = useState([]);

//   useEffect(() => {
//     axiosInstance.get("/hotels").then((res) => setHotels(res.data));
//   }, []);

//   return (
//     <div>
//       <h2>All Hotels</h2>
//       <ul>
//         {hotels.map((hotel) => (
//           <li key={hotel.id}>
//             {hotel.name} - {hotel.city} ({hotel.country})
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import axiosInstance from "../network/axios";
import { useSearchParams } from "react-router-dom";

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
    <div>
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
