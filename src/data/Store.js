// import { configureStore } from "@reduxjs/toolkit";

// export const store = configureStore({
//   reducer: {},
// });

// import { configureStore } from "@reduxjs/toolkit";

// import { productApi } from "./product.api";

// export const store = configureStore({
//   reducer: {
//     [productApi.reducerPath]: productApi.reducer,
//   },

//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(productApi.middleware),
// });


// store/index.js
import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../data/product.api";
import productsReducer from "./apiSlice";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
