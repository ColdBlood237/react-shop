import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import googleProductsReducer from "./googleProductsSlice";
import appleProductsReducer from "./appleProductsSlice";
import samsungProductsReducer from "./samsungProductsSlice";
import beatsProductsReducer from "./beatsProductsSlice";
import priceOrderReducer from "./priceOrderSlice";
import selectedCategoryReducer from "./selectedCategorySlice";

export default configureStore({
  reducer: {
    products: productsReducer,
    googleProducts: googleProductsReducer,
    appleProducts: appleProductsReducer,
    samsungProducts: samsungProductsReducer,
    beatsProducts: beatsProductsReducer,
    priceOrder: priceOrderReducer,
    selectedCategory: selectedCategoryReducer,
  },
});
