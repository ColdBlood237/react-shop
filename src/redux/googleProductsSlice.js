import { createSlice } from "@reduxjs/toolkit";

export const googleProductsSlice = createSlice({
  name: "googleProducts",
  initialState: {
    googleProducts: [],
  },
  reducers: {
    initializeGoogleProducts: (state, action) => {
      state.googleProducts = action.payload.filter((product) => {
        return product.name.split(" ")[0] === "Google";
      });
    },
  },
});

export const { initializeGoogleProducts } = googleProductsSlice.actions;

export default googleProductsSlice.reducer;
