import { createReducer } from "@reduxjs/toolkit";
import { login, logout } from "../../action/auths/authAction";


const initialState = {
    isAuthenticated: false,
    access_token: null,
    refresh_token: null,
    access_token_exp: null
}

export const authReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(login, (state, action) => {
            state.isAuthenticated = action.payload.isAuthenticated
            state.access_token = action.payload.access_token
            state.refresh_token = action.payload.refresh_token
            state.access_token_exp = action.payload.access_token_exp
        })
        .addCase(logout, (state, payload) => {
            state.isAuthenticated = false
            state.access_token = null
            state.refresh_token = null
            state.access_token_exp = null
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token')
        })
})