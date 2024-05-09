import { createSlice } from "@reduxjs/toolkit";

export const samsungProductsSlice = createSlice({
  name: "samsungProducts",
  initialState: {
    samsungProducts: [],
  },
  reducers: {
    initializeSamsungProducts: (state, action) => {
      state.samsungProducts = action.payload.filter((product) => {
        return product.name.split(" ")[0] === "Samsung";
      });
    },
  },
});

export const { initializeSamsungProducts } = samsungProductsSlice.actions;

export default samsungProductsSlice.reducer;
