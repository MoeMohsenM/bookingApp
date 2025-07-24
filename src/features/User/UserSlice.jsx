import { createSlice } from "@reduxjs/toolkit";

const initialState={
    fullName:"",
    email:"",
    country: "",
    phone:""
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers: {
        createNewUser :{
            prepare(fullName,email,country,phone){
                return {
                    payload:{
                        fullName,
                        email,
                        country,
                        phone,
                    }
                }
            },
            reducer(state,action){
                state.fullName=action.payload.fullName,
                state.email=action.payload.email,
                state.country=action.payload.country,
                state.phone=action.payload.phone
            }
        }
    }
})

export const {createNewUser} =userSlice.actions
export default userSlice.reducer;