import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

import "./shop.css";

const Shop = (props) => {
  const { name, price, img } = props.products;
  console.log(props.products);
  return (
    <Col>
      <Card style={{ minHeight: "450px" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{price}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Shop;
