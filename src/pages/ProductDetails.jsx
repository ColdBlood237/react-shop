import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { modifyOneProduct } from "../redux/productsSlice";
import { setProductDetails } from "../redux/productDetailsSlice";

export default function ProductDetails() {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails.productDetails);
  const products = useSelector((state) => state.products.products);
  const [editMode, setEditMode] = useState(false);
  const [nameInput, setNameInput] = useState(productDetails.name);
  const [imgInput, setImgInput] = useState(productDetails.image);
  const [priceInput, setPriceInput] = useState(productDetails.price);
  const [descriptionInput, setDescriptionInput] = useState(productDetails.description);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      setProductDetails({
        id: productDetails.id,
        name: nameInput,
        image: imgInput,
        price: priceInput,
        description: descriptionInput,
      })
    );
    dispatch(
      modifyOneProduct({
        id: productDetails.id,
        name: nameInput,
        image: imgInput,
        price: priceInput,
        description: descriptionInput,
      })
    );

    setEditMode(false);
  }

  return (
    <>
      <Navbar />
      {editMode ? (
        <form className="flex flex-col w-96 mx-auto mt-12 gap-4" onSubmit={handleSubmit}>
          <label className="input input-bordered flex items-center gap-2">
            Name
            <input
              type="text"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              className="grow"
              required
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Img URL
            <input
              type="text"
              value={imgInput}
              onChange={(e) => setImgInput(e.target.value)}
              className="grow"
              required
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            price
            <input
              type="number"
              min="0"
              value={priceInput}
              onChange={(e) => setPriceInput(e.target.value)}
              className="grow"
              required
            />
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Description</span>
            </div>
            <textarea
              value={descriptionInput}
              onChange={(e) => setDescriptionInput(e.target.value)}
              className="textarea textarea-bordered h-24"
              required
            ></textarea>
          </label>
          <div className="flex justify-end gap-2">
            <button onClick={() => setEditMode(false)} className="btn btn-error">
              cancel
            </button>
            <button type="submit" className="btn btn-primary">
              send
            </button>
          </div>
        </form>
      ) : (
        <div className="flex flex-col mx-auto gap-8 w-96">
          <h1 className="text-3xl">{productDetails.name}</h1>
          <img className="w-96" src={productDetails.image} alt={productDetails.name} />
          <p className="text-2xl">{productDetails.price} €</p>
          <p>{productDetails.description}</p>
          <button onClick={() => setEditMode(true)} className="btn">
            edit
          </button>
        </div>
      )}
    </>
  );
}
