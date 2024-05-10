import { createSlice } from "@reduxjs/toolkit";

export const productIdSlice = createSlice({
  name: "productDetails",
  initialState: {
    productId: 0,
  },
  reducers: {
    setProductId: (state, action) => {
      // const products = action.payload[0];
      // const index = action.payload[1];
      // state.productDetails = products[index];
      state.productId = action.payload;
    },
  },
});

export const { setProductId } = productIdSlice.actions;

export default productIdSlice.reducer;
