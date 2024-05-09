import { createSlice } from "@reduxjs/toolkit";

export const priceOrderSlice = createSlice({
  name: "priceOrder",
  initialState: {
    priceOrder: "dec",
  },
  reducers: {
    switchPriceOrder: (state) => {
      state.priceOrder = state.priceOrder === "dec" ? "inc" : "dec";
    },
  },
});

export const { switchPriceOrder } = priceOrderSlice.actions;

export default priceOrderSlice.reducer;
