// services/api.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({ skip = 0, limit = 10 }) => `products?skip=${skip}&limit=${limit}`,
    }),
  }),
});

export const { useGetAllProductsQuery } = productApi;

