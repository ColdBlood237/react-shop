import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../redux/productsSlice";
import { initializeGoogleProducts } from "../redux/googleProductsSlice";
import { initializeSamsungProducts } from "../redux/samsungProductsSlice";
import { initializeAppleProducts } from "../redux/appleProductsSlice";
import { initializeBeatsProducts } from "../redux/beatsProductsSlice";
import Category from "../components/Category";

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
    }

    dispatch(initializeGoogleProducts(products));
    dispatch(initializeSamsungProducts(products));
    dispatch(initializeAppleProducts(products));
    dispatch(initializeBeatsProducts(products));

    // console.log(appleProducts);
    // console.log(googleProducts);
    // console.log(samsungProducts);
    // console.log(beatsProducts);
  }, [productsStatus, dispatch]);

  return (
    <div className="text-center">
      <Navbar />
      <h1 className="text-3xl font-bold mb-8">Home page</h1>
      <h2 className="text-2xl mb-6">categories: </h2>
      <div className="flex flex-wrap justify-around">
        <Category name="Google" products={googleProducts} />
        <Category name="Apple" products={appleProducts} />
        <Category name="Beats" products={beatsProducts} />
        <Category name="Samsung" products={samsungProducts} />
      </div>
    </div>
  );
}
