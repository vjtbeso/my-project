// src/App.js
import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container className="py-4">
      <h1 className="text-center text-primary mb-4">🛒 Redux Shopping Cart</h1>
      <ProductList />
      <hr />
      <Cart />
    </Container>
  );
}

export default App;
