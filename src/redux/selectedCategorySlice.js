import { createSlice } from "@reduxjs/toolkit";

export const selectedCategorySlice = createSlice({
  name: "selectedCategory",
  initialState: {
    selectedCategory: "none",
  },
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setSelectedCategory } = selectedCategorySlice.actions;

export default selectedCategorySlice.reducer;
