import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import googleProductsReducer from "./googleProductsSlice";
import appleProductsReducer from "./appleProductsSlice";
import samsungProductsReducer from "./samsungProductsSlice";
import beatsProductsReducer from "./beatsProductsSlice";

export default configureStore({
  reducer: {
    products: productsReducer,
    googleProducts: googleProductsReducer,
    appleProducts: appleProductsReducer,
    samsungProducts: samsungProductsReducer,
    beatsProducts: beatsProductsReducer,
  },
});
