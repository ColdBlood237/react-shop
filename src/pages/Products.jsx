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
  const [selectedOrder, setSelectedOrder] = useState("dec");
  const [selectedCategory, setSelectedCategory] = useState("none");

  function handleRadioChange(e) {
    console.log(e.target.value);
    setSelectedOrder(e.target.value);
    dispatch(switchPriceOrder());
  }

  function handleSelectChange(e) {
    setSelectedCategory(e.target.value);
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
              checked={selectedOrder === "dec"}
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
              checked={selectedOrder === "inc"}
              onChange={handleRadioChange}
            />
          </label>
        </div>
      </div>
      <select
        className="select select-bordered w-full max-w-xs mb-8"
        value={selectedCategory}
        onChange={handleSelectChange}
      >
        <option value="none" disabled>
          ---
        </option>
        <option value="Google">Google</option>
        <option value="Apple">Apple</option>
        <option value="Samsung">Samsung</option>
        <option value="Beats">Beats</option>
      </select>
      <div className="mx-auto flex flex-wrap justify-around">
        {selectedCategory === "none"
          ? products.map((product) => (
              <div
                key={product.id}
                className="card mb-8 w-96 bg-base-100 shadow-xl"
              >
                <figure>
                  <img className="w-24" src={product.image} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product.name}</h2>
                  <p>{product.description}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                      {product.price} €
                    </button>
                  </div>
                </div>
              </div>
            ))
          : products
              .filter((product) => product.name.startsWith(selectedCategory))
              .map((product) => (
                <div
                  key={product.id}
                  className="card mb-8 w-96 bg-base-100 shadow-xl"
                >
                  <figure>
                    <img src={product.image} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    <p>{product.description}</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">
                        {product.price} €
                      </button>
                    </div>
                  </div>
                </div>
              ))}
      </div>
    </div>
  );
}
