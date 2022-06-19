import { Button, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./shop.css";

const Shop = (props) => {
  const { name, price, img } = props.products;
  // console.log(props.products);
  return (
    <Col>
      <Card style={{ minHeight: "500px" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{price}</Card.Text>
        </Card.Body>
        <Button className="m-2" variant="primary">
          Add to Card
        </Button>
      </Card>
    </Col>
  );
};

export default Shop;
