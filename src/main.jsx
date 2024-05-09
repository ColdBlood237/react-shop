import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./pages/Products.jsx";
import Homepage from "./pages/Homepage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import "./styles/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/:id",
    element: <ProductDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
