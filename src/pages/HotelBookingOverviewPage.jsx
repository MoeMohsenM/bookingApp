import React from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bookHotel } from "../features/User/UserSlice";

export default function HotelBookingOverviewPage() {
  const { register, handleSubmit } = useForm();
  const hotel = useSelector((state) => state.hotel);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log("User Data:", user);
  function handlePay() {
    dispatch(bookHotel(hotel)); // Push current hotel to bookings array
    navigate("/summary");
  }

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ maxWidth: 700, margin: "0 auto", padding: 4 }}>
        {/* Your Details */}
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Your Details
        </Typography>
        <Typography variant="body2" mb={3}>
          Whether you are in town for business or leisure, San Francisco
          Marriott Marquis welcomes travelers to Northern California with
          exceptional service, spacious...
        </Typography>

        <Box display="flex" gap={2} mb={2}>
          <FormControl fullWidth>
            <InputLabel>Title</InputLabel>
            <Select {...register("title")} defaultValue="Mr" label="Title">
              <MenuItem value="Mr">Mr</MenuItem>
              <MenuItem value="Ms">Ms</MenuItem>
              <MenuItem value="Mrs">Mrs</MenuItem>
            </Select>
          </FormControl>

          <TextField
            fullWidth
            label="First Name"
            defaultValue={user.fullName.split(" ")[0]}
            {...register("firstName")}
          />

          <TextField
            fullWidth
            label="Last Name"
            defaultValue={user.fullName.split(" ")[1]}
            placeholder="Enter your last name"
            {...register("lastName")}
          />
        </Box>

        <TextField
          fullWidth
          label="Email"
          defaultValue={user.email}
          sx={{ mb: 2 }}
          {...register("email")}
        />

        <Box display="flex" gap={2} mb={4}>
          <FormControl fullWidth>
            <InputLabel>Country</InputLabel>
            <Select
              {...register("country")}
              defaultValue="Egypt"
              label="Country"
            >
              <MenuItem value="Egypt">Egypt</MenuItem>
              <MenuItem value="USA">USA</MenuItem>
              <MenuItem value="Germany">Germany</MenuItem>
            </Select>
          </FormControl>

          <TextField
            fullWidth
            label="Mobile"
            defaultValue={user.phone}
            {...register("mobile")}
          />
        </Box>

        {/* Payment Details */}
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Payment Details
        </Typography>

        <TextField
          fullWidth
          label="Card Number"
          defaultValue="**** **** **** ****"
          sx={{ mb: 2 }}
          {...register("cardNumber")}
        />

        <Box display="flex" gap={2} mb={2}>
          <TextField
            fullWidth
            label="CVV"
            defaultValue="123"
            {...register("cvv")}
          />
          <TextField
            fullWidth
            label="Expiry Date"
            defaultValue="8/8/2030"
            {...register("expiry")}
          />
        </Box>

        <TextField
          fullWidth
          label="Card Holder"
          defaultValue={user.fullName}
          sx={{ mb: 3 }}
          {...register("cardHolder")}
        />

        <Button
          onClick={handlePay}
          variant="contained"
          fullWidth
          type="submit"
          sx={{ py: 1.5 }}
        >
          PAY NOW
        </Button>
      </Box>
    </form>
  );
}
