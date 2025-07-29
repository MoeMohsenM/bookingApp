import React, { useEffect, useState } from "react";
import axios from "../network/axios";
import BestOfferItem from "./BestOfferItem";
import { Box, Typography } from "@mui/material";

export default function BestOffersWrapper() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    axios.get("/best_offer")
      .then((res) => setOffers(res.data))
      .catch((err) => console.error("Error fetching best offers:", err));
  }, []);

  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Best Offers
      </Typography>

      <Box sx={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
        {offers.map((offer) => (
          <BestOfferItem
            key={offer.id}
            name={offer.name}
            location={offer.location}
            image={offer.image}
          />
        ))}
      </Box>
    </Box>
  );
}
