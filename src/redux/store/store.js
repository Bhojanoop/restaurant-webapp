import { configureStore } from "@reduxjs/toolkit";
import { messageReducer } from "../reducer/message/messageReducer.js";
import { authReducer } from "../reducer/auth/authReducer.js";


const store = configureStore({
    reducer: {
        authReducer: authReducer,
        messageReducer: messageReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export default store