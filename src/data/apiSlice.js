// store/productsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    hasMore: true,  // Assume there are more products to load
  },
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
    appendProducts: (state, action) => {
      const existingIds = new Set(state.items.map((item) => item.id));
      const uniqueProducts = action.payload.filter(
        (item) => !existingIds.has(item.id)
      );

      state.items = [...state.items, ...uniqueProducts];
    },
    setHasMore: (state, action) => {
      state.hasMore = action.payload;
    },
  },
});

export const { setProducts, appendProducts, setHasMore } = productsSlice.actions;
export default productsSlice.reducer;
