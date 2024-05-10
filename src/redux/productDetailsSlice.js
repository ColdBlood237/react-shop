import { createSlice } from "@reduxjs/toolkit";

export const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState: {
    productDetails: "dec",
  },
  reducers: {
    setProductDetails: (state, action) => {
      // const products = action.payload[0];
      // const index = action.payload[1];
      // state.productDetails = products[index];
      state.productDetails = action.payload;
    },
  },
});

export const { setProductDetails } = productDetailsSlice.actions;

export default productDetailsSlice.reducer;
