// src/components/Cart.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Container, ListGroup, Badge } from 'react-bootstrap';

const Cart = () => {
  const cartItems = useSelector(state => state.cart);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Container className="mt-4">
      <h2 className="text-success">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <Card className="shadow-sm">
          <ListGroup variant="flush">
            {cartItems.map(item => (
              <ListGroup.Item key={item.id}>
                <div className="d-flex justify-content-between">
                  <div>
                    <strong>{item.name}</strong> - Quantity: {item.quantity}
                  </div>
                  <Badge bg="secondary">${(item.price * item.quantity).toFixed(2)}</Badge>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Card.Footer>
            <h5>Total: ${total.toFixed(2)}</h5>
          </Card.Footer>
        </Card>
      )}
    </Container>
  );
};

export default Cart;
