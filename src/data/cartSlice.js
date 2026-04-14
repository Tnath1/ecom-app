import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
        return;
      }

      state.items.push({
        id: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail || product.images?.[0] || "",
        availabilityStatus: product.availabilityStatus || "In stock",
        rating: product.rating || 0,
        reviewsCount: product.reviews?.length || 0,
        quantity: 1,
      });
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find((cartItem) => cartItem.id === action.payload);

      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find((cartItem) => cartItem.id === action.payload);

      if (!item) {
        return;
      }

      if (item.quantity === 1) {
        state.items = state.items.filter(
          (cartItem) => cartItem.id !== action.payload
        );
        return;
      }

      item.quantity -= 1;
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (cartItem) => cartItem.id !== action.payload
      );
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
