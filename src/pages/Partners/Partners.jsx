import React from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import img1 from '../../images/suzon/partner/aushtadoshi-05.png.webp';
import img2 from '../../images/suzon/partner/Baking-delight-bd.png.webp';
import img3 from '../../images/suzon/partner/BBL-brand-logo-e1644003717119.png.webp';
import img4 from '../../images/suzon/partner/Brand-logo-resize-22.png.webp';
import img5 from '../../images/suzon/partner/chasing-perfection-bd-17.png.webp';
import img6 from '../../images/suzon/partner/el-armario.png.webp';
import img7 from '../../images/suzon/partner/gift-love-10.png.webp';
import img8 from '../../images/suzon/partner/healthyfoods-logo-06.png.webp';
import img9 from '../../images/suzon/partner/plant-affairs-09.png.webp';
import img10 from '../../images/suzon/partner/rbd-logo-small-01.png.webp';
import img11 from '../../images/suzon/partner/Rizqan-Delights.png.webp';
import './Partners.css';

const Partners = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="partners-bg">
      <Container style={{marginTop:'80px'}}>
      <h2 className="text-center py-4 text-light"> Our Gift Partners </h2>
        <div className="px-3 pb-4">
        <Slider {...settings}>
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
          <div>
            <img src={img3} alt="" />
          </div>
          <div>
            <img src={img4} alt="" />
          </div>
          <div>
            <img src={img5} alt="" />
          </div>
          <div>
            <img src={img6} alt="" />
          </div>
          <div>
            <img src={img7} alt="" />
          </div>
          <div>
            <img src={img8} alt="" />
          </div>
          <div>
            <img src={img9} alt="" />
          </div>
          <div>
            <img src={img10} alt="" />
          </div>
          <div>
            <img src={img11} alt="" />
          </div>
        </Slider>
        </div>
    </Container>
    </div>
  );
};

export default Partners;
