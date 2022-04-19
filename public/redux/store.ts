import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./slices/darkmode";

const store = configureStore({
    reducer : {
        darkmode : darkModeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default  store