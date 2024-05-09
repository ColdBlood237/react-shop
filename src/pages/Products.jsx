import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { switchPriceOrder } from "../redux/priceOrderSlice";
import { useEffect, useState } from "react";
import {
  sortByPriceAscending,
  sortByPriceDescending,
} from "../redux/productsSlice";

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const priceOrder = useSelector((state) => state.priceOrder.priceOrder);
  const [selectedValue, setSelectedValue] = useState("dec");

  function handleRadioChange(e) {
    console.log(e.target.value);
    setSelectedValue(e.target.value);
    dispatch(switchPriceOrder());
  }

  useEffect(() => {
    if (priceOrder === "inc") {
      dispatch(sortByPriceAscending());
    } else {
      dispatch(sortByPriceDescending());
    }
  }, [priceOrder]);

  return (
    <div className="text-center">
      <Navbar />
      <h1 className="text-3xl font-bold mb-8">Products list</h1>
      <p className="underline">filters:</p>
      <div className="w-1/2 mx-auto flex justify-between mb-6">
        <div className="form-control">
          <label className="label cursor-pointer gap-2">
            <span className="label-text">price decreasing</span>
            <input
              type="radio"
              name="priceOrder"
              value="dec"
              className="radio checked:bg-red-500"
              checked={selectedValue === "dec"}
              onChange={handleRadioChange}
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer gap-2">
            <span className="label-text">price increasing</span>
            <input
              type="radio"
              name="priceOrder"
              value="inc"
              className="radio checked:bg-blue-500"
              checked={selectedValue === "inc"}
              onChange={handleRadioChange}
            />
          </label>
        </div>
      </div>
      <ul className="w-1/2 mx-auto">
        {products.map((product) => (
          <li key={product.id} className="mb-2 flex justify-between">
            <span>{product.name}</span>
            <span>{product.price}€</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
