import { createSlice } from "@reduxjs/toolkit";

const likedSlice = createSlice({
  name: "liked",
  initialState: {
    items: [],
  },
  reducers: {
    toggleLikedProduct: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        state.items = state.items.filter((item) => item.id !== product.id);
        return;
      }

      state.items.push({
        id: product.id,
        title: product.title,
        price: product.price,
        description: product.description,
        thumbnail: product.thumbnail || product.images?.[0] || "",
        availabilityStatus: product.availabilityStatus || "In stock",
        rating: product.rating || 0,
        reviewsCount: product.reviews?.length || 0,
      });
    },
    removeLikedProduct: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { toggleLikedProduct, removeLikedProduct } = likedSlice.actions;

export default likedSlice.reducer;
