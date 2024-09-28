import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    currentUserID : null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInSuccess: (state, action) => {
            console.log(action);
            state.currentUserID = action.payload[0];
            state.currentUser = action.payload[1];
            
        },
        signInFailure: (state, action) => {
            state.currentUser = null,
            console.log(action);
            
        },
        logout: (state) =>{
            state.currentUser = null;
        },
    },
})

export const { 
    signInSuccess, 
    signInFailure, 
    updateSuccess, 
    updateFailure,
    deleteUserSuccess,
    deleteUserFailure,
    logout
    } = userSlice.actions;
export default userSlice.reducer;
