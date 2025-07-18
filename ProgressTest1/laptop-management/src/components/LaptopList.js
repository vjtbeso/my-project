import React, { useEffect, useState } from "react";
import { Card, Button, Row, Col, Form } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

function LaptopList() {
  const [laptops, setLaptops] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/Laptops")
      .then((res) => setLaptops(res.data));
  }, []);

  const filtered = laptops.filter(
    (l) =>
      l.brand.toLowerCase().includes(search.toLowerCase()) ||
      l.model.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Laptop Management</h2>
      <Form className="mb-4">
        <Form.Control
          type="text"
          placeholder="Search by brand or model..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Form>

      <Row className="g-4 justify-content-center">
        {filtered.map((lap) => (
          <Col key={lap.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={lap.image}
                style={{ height: "180px", objectFit: "contain" }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-center">
                  {lap.brand} - {lap.model}
                </Card.Title>
                <Card.Text className="text-center text-muted">
                  {lap.year} - {lap.price}
                </Card.Text>
                <div className="mt-auto">
                  <Link to={`/laptops/${lap.id}`}>
                    <Button variant="primary" className="w-100">
                      View Details
                    </Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default LaptopList;
