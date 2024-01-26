import { configureStore } from "@reduxjs/toolkit";
// import { apiSlice } from "./api/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import shopsSlice from "../features/shops/shopsSlice";
import authSlice from "../features/auth/authSlice";
export const store = configureStore({
  reducer: {
    // [apiSlice.reducerPath]: apiSlice.reducer,
    shops: shopsSlice,
    auth:authSlice
  },

  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(apiSlice.middleware),

  // devTools: true,
});

setupListeners(store.dispatch);
