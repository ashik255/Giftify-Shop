import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import logo from "../../images/suzon/logo.svg";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CopyrightIcon from '@mui/icons-material/Copyright';
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-img" style={{ marginTop: "90px" }}>
      <Container>
        <Row xs={1} md={2} lg={3} className="g-4 text-dark py-4">
          <Col>
            <h5 className="fw-bold">Information</h5>
            <br />
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Meet the Team</p>
            <p>Our Partners</p>
          </Col>
          <Col>
            <h5 className="fw-bold">Extras</h5>
            <br />
            <p>Order Tracking</p>
            <p>Terms and Condition</p>
            <p>Privacy Policy</p>
            <p>FAQs</p>
          </Col>
          <Col>
            <h5 className="fw-bold">Have a Question?</h5>
            <br />
            <p>
              <WatchLaterIcon /> Sunday-Thursday: 24 Hours
            </p>
            <p>
              <LocationOnIcon /> Dhaka, Bangladesh
            </p>
            <p>
              <PhoneEnabledIcon /> +8801824876735
            </p>
            <p>
              <EmailIcon /> nazmulsuzon100@gmail.com
            </p>
          </Col>
        </Row>
      </Container>
      <div className="footerImg-bg pt-3 pb-4">
        <img src={logo} className="d-block ms-auto me-auto pt-4" alt="" />
        <Container className="d-flex justify-content-between mt-3">
            <div>
                <Link><FacebookIcon/></Link>
                <Link><LinkedInIcon/></Link>
                <Link><PinterestIcon/></Link>
                <Link><InstagramIcon/></Link>
                <Link><TwitterIcon/></Link>
                <Link><YouTubeIcon/></Link>
            </div>
            <div>
                <small>Giftify is a project of Bangladesh | <CopyrightIcon/> 2022 All rights reserved</small>
            </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
