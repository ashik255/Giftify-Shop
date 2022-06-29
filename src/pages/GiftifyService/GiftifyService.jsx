import { Paper } from "@mui/material";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BestGift from "./BestGift";
import Packaging from "./Packaging";
import Delivery from "./Delivery";

const GiftifyService = () => {

  return (
    <Container className="mt-5">
      <Row xs={1} md={3} lg={3}>
        <Paper
          style={{ backgroundColor: "rgb(246,245,242)" }}
          className="policy-card"
        >
          <Col className="d-flex">
            <BestGift/>
            <div className="ps-3 align-self-center pt-5 pb-4">
              <h5>Best Gift Collection</h5>
              <p>Well Curated gift collecting</p>
            </div>
          </Col>
        </Paper>

        <Paper
          style={{ backgroundColor: "rgb(246,245,242)" }}
          className="policy-card"
        >
          <Col className="d-flex">
            <Packaging/>
            <div className="ps-3 align-self-center pt-5 pb-4">
              <h5>Elegant Packaging</h5>
              <p>Wide range of packaging/wrapping options</p>
            </div>
          </Col>
        </Paper>

        <Paper
          style={{ backgroundColor: "rgb(246,245,242)" }}
          className="policy-card"
        >
          <Col className="d-flex">
            <Delivery></Delivery>
            <div className="ps-3 align-self-center pt-5 pb-4">
              <h5>Express Delivery Service</h5>
              <p>Deliver it anywhere in Bangladesh</p>
            </div>
          </Col>
        </Paper>
      </Row>
    </Container>
  );
};

export default GiftifyService;
