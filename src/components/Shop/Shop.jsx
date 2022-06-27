import { useState } from "react";
import { Button, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import BookingModal from "../BookingModal/BookingModal";
import "./shop.css";

const Shop = ({ products }) => {
  // const { name, price, img } = props.products;
  const [open, setOpen] = useState(false);
  const [singleProduct, setSingleProduct] = useState({});
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  // console.log(props.products);
  const handleAddToCart = (id) => {
    
    const newSingelProduct = products?.find((el) => el?.id === id);
    setSingleProduct(newSingelProduct);
    handleOpen();
  };

  return (
    <>
      {products?.map((product, idx) => {
        return (
          <>
            <Col key={idx}>
              <Card style={{ minHeight: "500px" }}>
                <Card.Img variant="top" src={product?.img} />
                <Card.Body>
                  <Card.Title>{product?.name}</Card.Title>
                  <Card.Text>{product?.price}</Card.Text>
                </Card.Body>
                <Button
                  onClick={() => handleAddToCart(product?.id)}
                  className="m-2"
                  variant="primary"
                >
                  Add to Card
                </Button>
              </Card>
            </Col>
            
          </>
        );
      })}
      <BookingModal
    product={singleProduct}
     open={open}
     handleClose={handleClose}>
     
    </BookingModal>
    </>
  );
};

export default Shop;
