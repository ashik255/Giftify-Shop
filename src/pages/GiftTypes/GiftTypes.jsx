import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import aura from "../../images/suzon/types/Aura-banner-home-2.png.webp";
import luxuria from "../../images/suzon/types/Luxuria-banner-home-2-600x280.bk-2-1.png.webp";
import "./GiftTypes.css";

const GiftTypes = () => {
  return (
    <Container className="mt-5">
      <Row xs={1} md={2} lg={2} className="g-4">
        <Col>
          <Card className="contain">
            <div className="types-img">
              <img src={aura} className="w-100" alt="" />
            </div>
            <div>
              <h2 className="type-details">Aura</h2>
              <p className="type-details2">Scented Candle | Handmade Soap</p>
            </div>
          </Card>
        </Col>
        <Col>
          <Card className="contain2">
            <div className="types-img">
              <img src={luxuria} className="w-100" alt="" />
            </div>
            <div>
              <h2 className="type-details3">Luxuria</h2>
              <p className="type-details4">Artificial Scented Flower Bouqets</p>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default GiftTypes;
