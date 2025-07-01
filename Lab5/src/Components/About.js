import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

const About = () => {
  return (
    <Container className="bg-dark text-light py-5" fluid>
      <Row className="mb-4">
        <Col>
          <h2 className="text-danger">About Us</h2>
          <p>hê nhô hê nhô chúc 1 ngày tốt đẹp</p>
          <p>Ở đây chúng tôi có những dịch vụ tốt nhất mà bạn cần.</p>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card bg="secondary" text="light">
            <Card.Body>
              <Card.Title>About Us</Card.Title>
              <ListGroup variant="flush">
                <ListGroupItem className="bg-secondary text-light">
                  <strong>duc</strong> - Founder & CEO
                </ListGroupItem>
                <ListGroupItem className="bg-secondary text-light">
                  <strong>vitbeo</strong> - CTO
                </ListGroupItem>
                <ListGroupItem className="bg-secondary text-light">
                  <strong>duck</strong> - Lead Engineer
                </ListGroupItem>
                <ListGroupItem className="bg-secondary text-light">
                  <strong>vit</strong> - Designer
                </ListGroupItem>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card bg="secondary" text="light">
            <Card.Body>
              <Card.Title>Contact Us</Card.Title>
              <Card.Text>
                liên hệ với tôi nếu bạn có bất kỳ câu hỏi hay phản hồi nào,vui
                lòng liên hệ với{" "}
                <a href="mailto:nhatthach2703@gmail.com" className="text-info">
                  ducndde180603@fpt.edu.vn
                </a>
                .
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
