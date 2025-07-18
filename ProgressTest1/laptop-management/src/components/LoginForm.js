import React, { useState } from "react";
import {
  Form,
  Button,
  Card,
  Modal,
  Container,
  Row,
  Col,
  Alert,
} from "react-bootstrap";
import axios from "axios";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function LoginForm({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.get(
        `http://localhost:3001/UserAccounts?username=${username}&password=${password}`
      );
      if (res.data.length > 0) {
        setUser(res.data[0]);
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
          navigate("/laptops");
        }, 2000);
      } else {
        setError("Invalid username or password!");
      }
    } catch (err) {
      setError("Server connection failed!");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row>
        <Col>
          <Card className="p-4 shadow rounded" style={{ width: "22rem" }}>
            <Card.Body>
              <Card.Title className="text-center mb-4">
                Laptop Manager Login
              </Card.Title>
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter username"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    required
                  />
                </Form.Group>
                <Button type="submit" variant="primary" className="w-100">
                  Login
                </Button>
              </Form>
              {error && (
                <Alert variant="danger" className="mt-3">
                  {error}
                </Alert>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Body className="text-center">
          Welcome, {username}! Login Successful!
        </Modal.Body>
      </Modal>
    </Container>
  );
}

LoginForm.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default LoginForm;
