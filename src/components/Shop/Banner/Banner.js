import React from 'react';
import {Row, Col, Button } from 'react-bootstrap';
import TopBar from '../../../pages/TopBar/TopBar';
import bgImg from '../../../images/Arup/zass_main_hero33.jpg.webp';
import imageone from '../../../images/Arup/button arrow.jpg'
import Navigation from '../../../Shared/Navigation/Navigation';
import './banner.css';

const Banner = () => {
    return (
    
        <Row> 
            <div>
            <Navigation/>
            </div>
        
   
            <div className='banner-bg'>
                <div style={{textAlign:'center'}}>
                  <Button className='button'>Home</Button><span>|</span><Button  className='button'>Shop</Button>
                    <h1>Shop</h1>
                    <p>Find beautiful gifts for you and your loved ones; and customize them as you want them to be.</p>
                </div>
            </div>
       
        {/* <img style={{height:'80%',width:'90%'}} src={bgImg} alt=""/> */}
       
            </Row>
        
    );
};

export default Banner;