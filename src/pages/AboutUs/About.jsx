import React from "react";
import { Row, Col } from "react-bootstrap";
import "./About.css";
import bg from "../../images/ripoff.png";
import auraImage from "../../images/aura.jpg";
import hero from "../../images/hero.jpg";
import gifted from "../../images/gift.jpg";

const About = () => {
  return (
    <Row>
      <Row className="about">
        <Col
          md={12}
          xs={12}
          style={{ height: "400px", color: "white" }}
          className="about-col"
        >
          <h1 style={{ marginLeft: "700px" }}>About Us</h1>
        </Col>
        <Row className="back-image">
          <img src={bg} alt="" />
        </Row>
      </Row>

      <Row
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "120px",
          marginBottom: "120px",
        }}
      >
        <Col md={8}>
          <img
            style={{ width: "578px", height: "385px", marginLeft: "300px" }}
            src={auraImage}
            alt=""
          />
        </Col>
        <Col md={4} style={{ marginLeft: "40px", marginRight: "80px" }}>
          <h1 style={{ fontSize: "50px", fontFamily: "cursive" }}>Our Story</h1>
          <h4 style={{ fontFamily: "cursive" }}>
            One Stop Gift Solution for Every Occasion
          </h4>
          <p
            style={{
              fontFamily: "cursive",
              lineHeight: "25px",
              letterSpacing: ".356px",
            }}
          >
            Upohar.xyz, advanced from our experience that all the gifts we
            received usually come from a couple of popular but common gift
            stores in our country. Furthermore, the products have remained
            largely unchanged over decades of gifting and purchasing in
            Bangladesh and it was then that an idea came to us that would break
            new ground. We immediately began studying numerous organizations on
            the internet that would easily fit into the framework of the
            specific Gifting Solution concept.
            <br />
            We envisioned a company that specialized in providing a wide variety
            of gifts for all occasions, with distinctive packaging option
          </p>
        </Col>
      </Row>

      <Row
        className="about-last"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Col md={3} className="card-review">
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h2>Craftsmanship</h2>
            <h6>
              Our expert team process every order with taking care of every
              attention of detail
            </h6>
          </div>
        </Col>
        <Col md={3} className="card-review">
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h2>Quality</h2>
            <h6>
              We always curate and assemble fromthe best sources.NO compromise!
            </h6>
          </div>
        </Col>
        <Col md={3} className="card-review">
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h2>Consultancy</h2>
            <h6>
              Our Creative team is providing FREE GIFT Consultancy.Let's sort it
              our together
            </h6>
          </div>
        </Col>
        <Col md={3} className="card-review">
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h2>Express Delivery</h2>
            <h6>
              Wide range of delivery options Deliver it as you want it to
              be.Anywhere in Bangladesh
            </h6>
          </div>
        </Col>
      </Row>

      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "120px",
        }}
      >
        <Col md={6} style={{ marginLeft: "300px" }}>
          <h1 className="We-do">Whats We Do</h1>
          <h4 className="We-do">Your Gift Genie is Here</h4>
          <p className="We-do">
            We have a large selection of gifts suitable for any occasion. Our
            “hands-on” approach to ensuring Full Customer Satisfaction means you
            can rely on Upohar.xyz to make sure your request is fulfilled
            correctly in every case and that your gifts arrive on time, every
            time! A tremendous measure of exertion goes into picking items to
            fill our gift baskets and gifting needs to guarantee total consumer
            loyalty when each gift is received Look through our large selection
            of special baskets for occasions such as Business Gifts, Corporate
            Gift Baskets, Eid, Father’s Day, Birthday, Get Well, Thank You, and
            more to find the perfect gift for that special someone.
          </p>
          <p className="We-do">
            So, whether you’re looking for a single Gift Basket package for
            special somebody, or you need a fantastic plan for your
            organization’s Customers and Associates, Upohar.xyz has the perfect
            gift for any occasi
          </p>
        </Col>

        <Col md={6}>
          <img
            style={{
              width: "578px",
              height: "385px",
              marginLeft: "60px",
              marginRight: "80px",
            }}
            src={gifted}
            alt=""
          />
        </Col>
      </Row>
    </Row>
  );
};

export default About;
