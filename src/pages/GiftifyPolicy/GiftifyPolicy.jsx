import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import img1 from '../../images/suzon/policy/gift-card.png';
import img2 from '../../images/suzon/policy/consultant.png';
import img3 from '../../images/suzon/policy/money-back.png';
import { Link } from "react-router-dom";
import './GiftifyPolicy.css';

const GiftifyPolicy = () => {
  return (
    <Container style={{marginTop:'100px'}}>
      <Row xs={1} md={3} className="g-4">
        <Col>
          <Card className="policy-card d-flex justify-content-center align-items-center text-center pt-3">
            <Card.Img variant="top" style={{width:'50px'}} src={img1} />
            <Card.Body>
              <Card.Title>Free Gift</Card.Title>
              <Card.Text>
              Get a FREE beautiful card and surprise tokens with every order.*
              </Card.Text>
              <Link className="text-decoration-none fw-bold" style={{color: 'rgb(221,126,126)'}}>ORDER NOW</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="policy-card d-flex justify-content-center align-items-center text-center pt-3">
            <Card.Img variant="top" style={{width:'50px'}} src={img2} />
            <Card.Body>
              <Card.Title>GIFT CONSULTANCY</Card.Title>
              <Card.Text>
              Gifting is not easy. Our creative team is providing FREE Gift Consultancy.
              </Card.Text>
              <Link className="text-decoration-none fw-bold" style={{color: 'rgb(221,126,126)'}}>BOOK AN APPOINTMENT NOW</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="policy-card d-flex justify-content-center align-items-center text-center pt-3">
            <Card.Img variant="top" style={{width:'50px'}} src={img3} />
            <Card.Body>
              <Card.Title>CASH BACK GUARANTEED</Card.Title>
              <Card.Text>
              Get guaranteed TAKA BACK VOUCHER with every order and use it in later orders.
              </Card.Text>
              <Link className="text-decoration-none fw-bold" style={{color: 'rgb(221,126,126)'}}>SHOP NOW</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <hr  className="mt-5"/>
    </Container>
  );
};

export default GiftifyPolicy;
