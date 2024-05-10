import { useDispatch } from "react-redux";
import { setProductId } from "../redux/productIdSlice";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function ProductCard({ id }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [currentProduct, setCurrentProduct] = useState(products[products.findIndex((product) => product.id === id)]);

  return (
    <div className="card mb-8 w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="w-24" src={currentProduct.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{currentProduct.name}</h2>
        <p>{currentProduct.description}</p>
        <div className="card-actions justify-end">
          <Link to={`/products/${currentProduct.id}`}>
            <button onClick={() => dispatch(setProductId(id))} className="btn btn-secondary">
              see details
            </button>
          </Link>
          <button className="btn btn-primary disabled">{currentProduct.price} €</button>
        </div>
      </div>
    </div>
  );
}
