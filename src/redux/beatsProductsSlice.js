import { createSlice } from "@reduxjs/toolkit";

export const beatsProductsSlice = createSlice({
  name: "beatsProducts",
  initialState: {
    beatsProducts: [],
  },
  reducers: {
    initializeBeatsProducts: (state, action) => {
      state.beatsProducts = action.payload.filter((product) => {
        return product.name.split(" ")[0] === "Beats";
      });
    },
  },
});

export const { initializeBeatsProducts } = beatsProductsSlice.actions;

export default beatsProductsSlice.reducer;
