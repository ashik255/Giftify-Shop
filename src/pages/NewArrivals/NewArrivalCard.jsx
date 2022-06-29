import React from "react";
import { Card, Col } from "react-bootstrap";

const NewArrivalCard = (props) => {
  const { img, name, price } = props.data;

  return (
    <>
      <Col>
        <Card
          style={{
            minHeight: "450px",
          }}
        >
          <div className="giftify-img ">
              <img src={img} className="" alt="" style={{width:'100%', height:'280px'}} />
              </div>
          <Card.Body className="text-center">
            <Card.Title>{name}</Card.Title>
            <p>{price}</p>
            <p>Brand: Giftify</p>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default NewArrivalCard;
