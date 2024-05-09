import { createSlice } from "@reduxjs/toolkit";

export const appleProductsSlice = createSlice({
  name: "appleProducts",
  initialState: {
    appleProducts: [],
  },
  reducers: {
    initializeAppleProducts: (state, action) => {
      state.appleProducts = action.payload.filter((product) => {
        return product.name.split(" ")[0] === "Apple";
      });
    },
  },
});

export const { initializeAppleProducts } = appleProductsSlice.actions;

export default appleProductsSlice.reducer;
