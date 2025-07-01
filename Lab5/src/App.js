import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Home from "./Components/Home";
import News from "./Components/News";
import Quiz from "./Components/Quiz";
import About from "./Components/About";
import Contact from "./Components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // đảm bảo đã import App.css

function App() {
  return (
    <div className="App">
      {/* Add flex layout here */}
      <Router>
        <Navbar bg="dark" variant="dark" expand="md">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto mx-5">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/quiz">
                Quiz
              </Nav.Link>
              <Nav.Link as={Link} to="/news">
                News
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* 👇 Bọc phần nội dung bằng main-content */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
