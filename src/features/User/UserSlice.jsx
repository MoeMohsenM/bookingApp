import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  email: "",
  country: "",
  phone: "",
  bookings: [],
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createNewUser: {
      prepare(fullName, email, country, phone) {
        return {
          payload: { fullName, email, country, phone },
        };
      },
      reducer(state, action) {
        const { fullName, email, country, phone } = action.payload;
        state.fullName = fullName;
        state.email = email;
        state.country = country;
        state.phone = phone;
        state.isAuthenticated = false;
      },
    },
    bookHotel(state, action) {
  if (!state.bookings) {
    state.bookings = [];
  }
  state.bookings.push(action.payload);
}
,

    // ✅ login now accepts payload with user data
    login(state, action) {
      const { fullName, email, country, phone } = action.payload;
      state.fullName = fullName;
      state.email = email;
      state.country = country;
      state.phone = phone;
      state.isAuthenticated = true;
    },

    logout(state) {
      state.fullName = "";
      state.email = "";
      state.country = "";
      state.phone = "";
      state.isAuthenticated = false;
    },
  },
});

export const { createNewUser, login, logout, bookHotel } = userSlice.actions;
export default userSlice.reducer;
