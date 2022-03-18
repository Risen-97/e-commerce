import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products-slice";

export const store = configureStore({
  reducer: {
    cart: productsReducer,
  },
});

export default store;
