import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice.js";
import { apiSlice } from "./slice/apiSlice.js";
import toggleReducer from "./slice/toggleSlice.js";
import multiSelection from "./slice/selection.js";
import carData from "./slice/cardataSlice.js";
import videoSlice from "./slice/videoSlice.js";
const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    toggle: toggleReducer,
    step: multiSelection,
    carData: carData,
    video: videoSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
