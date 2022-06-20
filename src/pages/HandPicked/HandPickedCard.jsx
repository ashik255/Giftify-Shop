import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import HandPicked from "./HandPicked";

const HandPickedCard = () => {
  const [featuredata, setFeatureData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/shopData")
      .then((res) => res.json())
      .then((data) => {
        setFeatureData(data);
      });
  }, []);

  return (
    <Container className="mb-5">
      <Row className="g-4">
        <HandPicked feature={featuredata} />
      </Row>
    </Container>
  );
};

export default HandPickedCard;
