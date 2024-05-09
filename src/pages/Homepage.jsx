import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addPrice, fetchProducts } from "../redux/productsSlice";
import { initializeGoogleProducts } from "../redux/googleProductsSlice";
import { initializeSamsungProducts } from "../redux/samsungProductsSlice";
import { initializeAppleProducts } from "../redux/appleProductsSlice";
import { initializeBeatsProducts } from "../redux/beatsProductsSlice";

export default function Homepage() {
  const products = useSelector((state) => state.products.products);
  const productsStatus = useSelector((state) => state.products.status);
  const googleProducts = useSelector(
    (state) => state.googleProducts.googleProducts
  );
  const samsungProducts = useSelector(
    (state) => state.samsungProducts.samsungProducts
  );
  const appleProducts = useSelector(
    (state) => state.appleProducts.appleProducts
  );
  const beatsProducts = useSelector(
    (state) => state.beatsProducts.beatsProducts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (productsStatus === "idle") {
      dispatch(fetchProducts());
      dispatch(addPrice([0, 33]));
    }

    dispatch(initializeGoogleProducts(products));
    dispatch(initializeSamsungProducts(products));
    dispatch(initializeAppleProducts(products));
    dispatch(initializeBeatsProducts(products));

    console.log(appleProducts);
    console.log(googleProducts);
    console.log(samsungProducts);
    console.log(beatsProducts);
  }, [productsStatus, dispatch]);

  return (
    <>
      <Navbar />
      <h1>Home page</h1>
      <h2>categories: </h2>
      <div>
        <h3>google</h3>
        <ul>
          {googleProducts.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>samsung</h3>
        <ul>
          {samsungProducts.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>apple</h3>
        <ul>
          {appleProducts.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>beats</h3>
        <ul>
          {beatsProducts.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
