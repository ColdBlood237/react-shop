import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addPrice: (state, action) => {
      const index = action.payload[0];
      const price = action.payload[1];
      //console.log(state.products);
      //state.products[index].price = price;
    },
    sortByPriceAscending: (state) => {
      // Create a shallow copy of the original array
      const newArray = state.products.slice();
      for (let i = 0; i < newArray.length - 1; i++) {
        for (let j = 0; j < newArray.length - i - 1; j++) {
          if (newArray[j].price > newArray[j + 1].price) {
            // Swap the elements
            let temp = newArray[j];
            newArray[j] = newArray[j + 1];
            newArray[j + 1] = temp;
          }
        }
      }
      state.products = newArray;
    },
    sortByPriceDescending: (state) => {
      // Create a shallow copy of the original array
      const newArray = state.products.slice();
      for (let i = 0; i < newArray.length - 1; i++) {
        for (let j = 0; j < newArray.length - i - 1; j++) {
          if (newArray[j].price < newArray[j + 1].price) {
            // Swap the elements
            let temp = newArray[j];
            newArray[j] = newArray[j + 1];
            newArray[j + 1] = temp;
          }
        }
      }
      state.products = newArray;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
        // remove duplicates
        state.products = state.products.filter(
          (value, index, self) =>
            index === self.findIndex((t) => t.name === value.name)
        );
        state.products[0].price = 400;
        state.products[1].price = 450;
        state.products[2].price = 800;
        state.products[3].price = 500;
        state.products[4].price = 700;
        state.products[5].price = 100;
        state.products[6].price = 1500;
        state.products[7].price = 150;
        state.products[8].price = 100;
        state.products[9].price = 300;
        state.products[10].price = 350;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("https://api.restful-api.dev/objects");
    const data = await response.json();
    return data;
  }
);

export const { addPrice, sortByPriceAscending, sortByPriceDescending } =
  productsSlice.actions;

export default productsSlice.reducer;
