import React from "react";
import { Carousel } from "react-bootstrap";
import Navigation from '../../Shared/Navigation/Navigation';
import './TopBar.css';
import gift from '../../images/suzon/Gift-icon-01-130x130.png';
import heart from '../../images/suzon/heart_white_big-130x130.png';

const TopBar = () => {
  return (
    <div className="topbar-bg">
      <Navigation/>
      <Carousel>
      <Carousel.Item interval={2000}>
        <img style={{display:'block', marginLeft:'auto', marginRight:'auto'}} src={gift} alt="" />
        <Carousel.Caption>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img style={{display:'block', marginLeft:'auto', marginRight:'auto'}} src={heart} alt="" />
        <Carousel.Caption sx={{mt:2}}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default TopBar;
