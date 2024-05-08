import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  return (
    <>
      <Navbar />
      <h1>Products list</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </>
  );
}
