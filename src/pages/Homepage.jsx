import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../redux/productsSlice";

export default function Homepage() {
  let appleProducts = [];
  let googleProducts = [];
  let samsungProducts = [];
  let beatsProducts = [];

  const products = useSelector((state) => state.products.products);
  const productsStatus = useSelector((state) => state.products.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (productsStatus === "idle") {
      dispatch(fetchProducts());
    }

    appleProducts = products.filter((product) => {
      return product.name.split(" ")[0] === "Apple";
    });
    googleProducts = products.filter((product) => {
      return product.name.split(" ")[0] === "Google";
    });

    samsungProducts = products.filter((product) => {
      return product.name.split(" ")[0] === "Samsung";
    });

    beatsProducts = products.filter((product) => {
      return product.name.split(" ")[0] === "Beats";
    });

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
      </div>
      <div>
        <h3>samsung</h3>
      </div>
      <div>
        <h3>apple</h3>
      </div>
      <div>
        <h3>beats</h3>
      </div>
    </>
  );
}
