import { configureStore } from "@reduxjs/toolkit";
import { doctorApi } from "./services/doctorApi";

export const store = configureStore({
    reducer: {
        [doctorApi.reducerPath]: doctorApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(doctorApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
