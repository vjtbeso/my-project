// src/components/ProductList.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, updateCart, deleteFromCart } from '../redux/cartSlice';
import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap';

const products = [
  {
    id: '001',
    name: 'Laptop Pro',
    price: 1299.99,
    description: 'A high-performance laptop for professionals.',
    catalogs: ['Electronics', 'Laptops']
  },
  {
    id: '002',
    name: 'Smartphone X',
    price: 799.99,
    description: 'Sleek design with top-notch features.',
    catalogs: ['Electronics', 'Mobiles']
  },
  {
    id: '003',
    name: 'Wireless Headphones',
    price: 199.99,
    description: 'Noise-cancelling over-ear headphones.',
    catalogs: ['Accessories', 'Audio']
  },
  {
    id: '004',
    name: 'Mechanical Keyboard',
    price: 89.99,
    description: 'RGB backlit mechanical keyboard for gamers.',
    catalogs: ['Accessories', 'Keyboards']
  },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (id, value) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Number(value),
    }));
  };

  return (
    <Container className="mt-4">
      <h2 className="text-primary">Product List</h2>
      <Row>
        {products.map(product => (
          <Col md={6} lg={4} className="mb-4" key={product.id}>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">${product.price}</Card.Subtitle>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>
                  <strong>Catalogs:</strong> {product.catalogs.join(', ')}
                </Card.Text>

                <Form.Group className="mb-2">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    min={1}
                    value={quantities[product.id] || 1}
                    onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                  />
                </Form.Group>

                <Button
                  variant="success"
                  className="me-2 mb-1"
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add to Cart
                </Button>
                <Button
                  variant="warning"
                  className="me-2 mb-1"
                  onClick={() =>
                    dispatch(updateCart({ id: product.id, quantity: quantities[product.id] || 1 }))
                  }
                >
                  Update Quantity
                </Button>
                <Button
                  variant="danger"
                  className="mb-1"
                  onClick={() => dispatch(deleteFromCart({ id: product.id }))}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
