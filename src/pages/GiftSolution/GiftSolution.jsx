import React from "react";
import Typed from "react-typed";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import img1 from '../../images/suzon/Gift Solution/1.jpeg';
import img2 from '../../images/suzon/Gift Solution/2.webp';
import img3 from '../../images/suzon/Gift Solution/3.webp';
import "./GiftSolution.css";

const GiftSolution = () => {
  return (
    <div style={{marginTop:'100px'}}>
      <div className="d-flex justify-content-center">
        <Typed
          strings={["Redefined", "Elegant", "Express", "Premium"]}
          typeSpeed={150}
          backSpeed={100}
          loop
          className="type-animation"
        ></Typed>
      </div>
      <h1 className="text-center fw-bold py-3">
        One Stop Gift Solution in Bangladesh
      </h1>
      <Container>
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card>
              {/* <Card.Img className="giftify-img p-3" variant="top" src={img1} /> */}
              <div className="giftify-img ">
              <img src={img1} className="" alt="" height={430} />
              </div>
              <p className="gift-details text-center fw-bold fs-4 pt-3">SIGNATURE GIFT BUNDLES</p>
            </Card>
          </Col>
          <Col>
            <Card>
            <div className="giftify-img ">
              <img src={img2} className="" alt="" height={430} />
              </div>
              <p className="gift-details text-center fw-bold fs-4 pt-3">PERSONALIZED GIFT ITEMS</p>
            </Card>
          </Col>
          <Col>
            <Card>
            <div className="giftify-img ">
              <img src={img3} className="" alt="" height={430} />
              </div>
              <p className="gift-details text-center fw-bold fs-4 pt-3">WOODEN GIFT BOXES</p>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GiftSolution;
