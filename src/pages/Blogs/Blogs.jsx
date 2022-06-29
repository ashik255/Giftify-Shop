import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import img1 from '../../images/suzon/blogs/HOW-TO-BURN-CANDLES-SAFELY-01-2-640x480.jpg.webp';
import img2 from '../../images/suzon/blogs/6951-scaled-e1626299964665-640x480.jpg.webp';
import img3 from '../../images/suzon/blogs/Mzc5MzAxMzQw-scaled-e1626299990291-640x480.jpg.webp';
import './Blogs.css';

const Blogs = () => {
  return (
    <Container style={{marginTop:'110px'}}>
      <h1 className="fw-bold text-center mb-5">From The Blog</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
      <Col>
            <Card style={{minHeight:'440px'}} className="blog-card">
              {/* <Card.Img className="giftify-img" style={{height:'300px'}} variant="top" src={img1} /> */}
              <div className="blog-img">
                <img style={{height:'300px'}} src={img1} alt="" />
              </div>
              <Card.Body>
                <Card.Title> <a className="text-decoration-none text-dark" target="_blank" rel="noopener noreferrer" href="https://upohar.xyz/how-to-burn-candles-safely/">HOW TO BURN CANDLES SAFELY</a> </Card.Title>
                <Card.Text>
                Using candles safely in your home is incredibly important. Burning an open flame indoors should be taken seriously at all ...
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
      <Col>
            <Card style={{minHeight:'440px'}} className="blog-card">
              <div className="blog-img">
                <img style={{height:'300px'}} src={img2} alt="" />
              </div>
              <Card.Body>
                <Card.Title> <a className="text-decoration-none text-dark" target="_blank" rel="noopener noreferrer" href="https://upohar.xyz/personalized-gifts-are-absolutely-special/">PERSONALIZED GIFTS ARE ABSOLUTELY SPECIAL!</a> </Card.Title>
                <Card.Text>
                Do you ever struggle to think of a thoughtful gift to give?
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
      <Col>
            <Card style={{minHeight:'440px'}} className="blog-card">
              <div className="blog-img">
                <img style={{height:'300px'}} src={img3} alt="" />
              </div>
              <Card.Body>
                <Card.Title> <a className="text-decoration-none text-dark" target="_blank" rel="noopener noreferrer" href="https://upohar.xyz/why-corporate-gift-giving-is-important/"> Why Corporate gift-giving is Important?</a></Card.Title>
                <Card.Text>
                There's nothing like the thrill of getting corporate gifts, but there's a bigger explanation why they're useful.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
      </Row>
    </Container>
  );
};

export default Blogs;
