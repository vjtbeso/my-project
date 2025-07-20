import React from "react";
import { useSelector } from "react-redux";

export default function Cart() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="container mt-4">
      <h2>Cart</h2>
      {cart.map((item, index) => (
        <div key={index}>
          {item.name} - ${item.price}
        </div>
      ))}
    </div>
  );
}
