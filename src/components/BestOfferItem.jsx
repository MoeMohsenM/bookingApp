import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

export default function BestOfferItem({ name, location, image }) {
  return (
    <Card sx={{ width: 250, borderRadius: 3, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="160"
        image={image}
        alt={name}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography variant="subtitle1" fontWeight="bold">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {location}
        </Typography>
      </CardContent>
    </Card>
  );
}
