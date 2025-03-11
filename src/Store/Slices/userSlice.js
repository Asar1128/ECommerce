import { createSlice } from "@reduxjs/toolkit";

// User Authentication Slice
const UserInitialState = {
    isAuthenticated: null,
    user: null,
};

const userSlice = createSlice({
    name: "user",
    initialState: UserInitialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        },
    },
});