import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { switchPriceOrder } from "../redux/priceOrderSlice";
import { useEffect, useState } from "react";
import {
  sortByPriceAscending,
  sortByPriceDescending,
} from "../redux/productsSlice";
import { setSelectedCategory } from "../redux/selectedCategorySlice";

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const priceOrder = useSelector((state) => state.priceOrder.priceOrder);
  const selectedCategory = useSelector(
    (state) => state.selectedCategory.selectedCategory
  );
  const [selectedOrder, setSelectedOrder] = useState("dec");
  // const [selectedCategory, setSelectedCategory] = useState("none");
  const [searchInput, setSearchInput] = useState("");

  function handleRadioChange(e) {
    console.log(e.target.value);
    setSelectedOrder(e.target.value);
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
        onChange={(e) => dispatch(setSelectedCategory(e.target.value))}
      >
        <option value="none" disabled>
          ---
        </option>
        <option value="Google">Google</option>
        <option value="Apple">Apple</option>
        <option value="Samsung">Samsung</option>
        <option value="Beats">Beats</option>
      </select>
      <label className="input input-bordered flex items-center max-w-xs mx-auto gap-2 mb-8">
        <input
          type="text"
          className="grow"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      <div className="mx-auto flex flex-wrap justify-around">
        {selectedCategory === "none"
          ? products
              .filter((product) =>
                product.name
                  .toLowerCase()
                  .includes(searchInput.toLowerCase().trim())
              )
              .map((product) => (
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
              .filter((product) =>
                product.name
                  .toLowerCase()
                  .includes(searchInput.toLowerCase().trim())
              )
              .map((product) => (
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
              ))}
      </div>
    </div>
  );
}
