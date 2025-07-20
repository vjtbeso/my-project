import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";
import { Card, Button } from "react-bootstrap";

export default function ProductList() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <div className="container mt-4">
      <h2>Product List</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Card.Text>Catalogs: {product.catalogs.join(", ")}</Card.Text>
                <Button onClick={() => dispatch(addToCart(product))}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
