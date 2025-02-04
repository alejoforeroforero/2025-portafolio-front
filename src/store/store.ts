import { configureStore } from "@reduxjs/toolkit";
import { profileSlice } from "./slices/profile-slice";
import { experienceSlice } from "./slices/experience-slice";

export const store = configureStore({
    reducer:{
        profile:profileSlice.reducer,
        experience:experienceSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;