import React from "react";
import Navigation from '../../Shared/Navigation/Navigation';
import gift from '../../images/suzon/Gift-icon-01-130x130.png';
import logo from '../../images/suzon/logo.svg';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/esm/Container";
import EmailIcon from '@mui/icons-material/Email';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import './TopBar.css';
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="topbar-bg">
      <div className="text-light" style={{backgroundColor:'rgba(255, 255, 255, 0.05'}}>
        <Container className="py-2 d-flex justify-content-between">
          <div className="d-flex">
            <p>Your Gift genie is here!</p>
            <p className="ms-2"><EmailIcon/> nazmulsuzon100@gmail.com</p>
            <p className="ms-2"><PhoneEnabledIcon/> +8801824876735</p>
          </div>
          <div> 
            <Link className="text-light me-2"><FacebookIcon/></Link>
            <Link className="text-light me-2"><LinkedInIcon/></Link>
            <Link className="text-light me-2"><PinterestIcon/></Link>
            <Link className="text-light me-2"><InstagramIcon/></Link>
          </div>
        </Container>
      </div>
      <img className="d-block ms-auto me-auto pt-4" src={logo} alt="" />
      <Navigation/>
      <div className="d-flex justify-content-center align-items-center flex-column" style={{marginTop:'50px'}}>
        <img  src={gift} alt="" />
        <h1 className="text-light">Best Handcrafted Gifts</h1>
        <p className="text-light">Assembled with love and passion.</p>
        <Button className="bg-light border-0 rounded-pill px-4"><Link className="text-decoration-none fw-bold" style={{color:'#F3A395'}} to='/shop'>View All Products</Link></Button>
      </div>
    </div>
  );
};

export default TopBar;
