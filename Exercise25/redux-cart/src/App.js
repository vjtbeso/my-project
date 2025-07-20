import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import Cart from "./components/cart"; // ✅ đảm bảo chữ C viết hoa đúng với tên file

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark px-3">
        <Link className="navbar-brand text-white" to="/">
          Products
        </Link>
        <div className="navbar-nav">
          <Link className="nav-link text-white" to="/add">
            Add Product
          </Link>
          <Link className="nav-link text-white" to="/cart">
            Cart
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add" element={<ProductForm />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
