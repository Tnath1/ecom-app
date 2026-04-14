
import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../data/product.api";
import productsReducer from "./apiSlice";
import cartReducer from "./cartSlice";
import likedReducer from "./likedSlice";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    products: productsReducer,
    cart: cartReducer,
    liked: likedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
