import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Shop from "../Shop/Shop";

const ProductCard = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/shopData")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div className="border-black">
      <Container className="">
        <Row xs={2} md={4} className="g-3">
          {product.map((products) => (
            <Shop products={products}></Shop>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductCard;
