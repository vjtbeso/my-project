import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/actions";
import { useNavigate } from "react-router-dom";

export default function ProductForm() {
  const [product, setProduct] = useState({
    id: "",
    name: "",
    price: "",
    catalogs: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addProduct({
        ...product,
        price: parseFloat(product.price),
        catalogs: product.catalogs.split(",").map((c) => c.trim()),
      })
    );
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          placeholder="ID"
          onChange={(e) => setProduct({ ...product, id: e.target.value })}
        />
        <input
          className="form-control mb-2"
          placeholder="Name"
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
        <input
          className="form-control mb-2"
          placeholder="Price"
          type="number"
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
        <input
          className="form-control mb-2"
          placeholder="Catalogs (comma-separated)"
          onChange={(e) => setProduct({ ...product, catalogs: e.target.value })}
        />
        <button className="btn btn-primary" type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
}
