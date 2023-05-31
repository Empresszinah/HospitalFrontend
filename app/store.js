import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "../features/toggle/toggleSlice";
import filterSlice from "../features/filter/filterSlice";

export const store = configureStore({
    reducer: {
    
        toggle: toggleSlice,
        filter: filterSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
