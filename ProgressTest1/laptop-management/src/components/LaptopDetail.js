import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function LaptopDetail() {
  const { id } = useParams();
  const [laptop, setLaptop] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/Laptops/${id}`)
      .then((res) => setLaptop(res.data))
      .catch(() => setLaptop(null));
  }, [id]);

  if (!laptop)
    return (
      <Container className="text-center mt-5">
        <h3>404 - Laptop Not Found</h3>
        <Link to="/laptops">
          <Button variant="secondary" className="mt-3">
            Back to List
          </Button>
        </Link>
      </Container>
    );

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow rounded">
            <Card.Img
              variant="top"
              src={laptop.image}
              style={{ height: "300px", objectFit: "contain", padding: "1rem" }}
            />
            <Card.Body>
              <Card.Title className="text-center mb-3">
                {laptop.brand} - {laptop.model}
              </Card.Title>
              <Card.Text className="text-center text-muted">
                <strong>Year:</strong> {laptop.year} <br />
                <strong>Price:</strong> {laptop.price}
              </Card.Text>
              <div className="text-center mt-4">
                <Link to="/laptops">
                  <Button variant="primary">Back to Laptop List</Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default LaptopDetail;
