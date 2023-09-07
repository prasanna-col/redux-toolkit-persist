import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userdetails: [],
    cardDetails: []
};

const usercreateSlice = createSlice({
    name: "slicename",
    initialState,
    reducers: {
        getUsers: (state, action) => {
            // console.log("hghghg", state.users, action.payload);
            state.userslist = action.payload;
        },
        updatecard: (state, action) => {
            state.cardDetails = action.payload;
        }
    },
});

export const { getUsers, updatecard } = usercreateSlice.actions;

export default usercreateSlice.reducer;