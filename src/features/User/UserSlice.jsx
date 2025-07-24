import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  email: "",
  country: "",
  phone: "",
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
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const { createNewUser, login, logout } = userSlice.actions;
export default userSlice.reducer;
