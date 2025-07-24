// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   fullName: "",
//   email: "",
//   country: "",
//   phone: "",
//   isAuthenticated: false 
// };

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     createNewUser: {
//       prepare(fullName, email, country, phone) {
//         return {
//           payload: {
//             fullName,
//             email,
//             country,
//             phone
//           }
//         };
//       },
//       reducer(state, action) {
//         state.fullName = action.payload.fullName;
//         state.email = action.payload.email;
//         state.country = action.payload.country;
//         state.phone = action.payload.phone;
//         state.isAuthenticated = true; 
//       }
//     },

//     loginUser: {
//       prepare(email) {
//         return { payload: { email } };
//       },
//       reducer(state, action) {
//         state.email = action.payload.email;
//         state.isAuthenticated = true;
//       }
//     },

//     logoutUser(state) {
//       state.fullName = "";
//       state.email = "";
//       state.country = "";
//       state.phone = "";
//       state.isAuthenticated = false;
//     }
//   }
// });

// export const { createNewUser, loginUser, logoutUser } = userSlice.actions;
// export default userSlice.reducer;


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
