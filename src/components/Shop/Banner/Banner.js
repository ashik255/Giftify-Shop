import React from 'react';
import {Row,Container } from 'react-bootstrap';
import TopBar from '../../../pages/TopBar/TopBar';
import bgImg from '../../../images/Arup/zass_main_hero33.jpg.webp';
import imageone from '../../../images/Arup/button arrow.jpg'
import Navigation from '../../../Shared/Navigation/Navigation';
import './banner.css';

const Banner = () => {
    return (
    
        <Row> 
            <div className='navigation'>
            <Navigation/>
            </div>
        
   
            <div className='banner-bg'>
                <div style={{textAlign:'center'}}>
               <button className='button'>Home</button> <span className='button'>|</span> <button className='button'>Shop</button>
                    <h1>Shop</h1>
                    <p>Find beautiful gifts for you and your loved ones; and customize them as you want them to be.</p>
                </div>

            </div>
            <div className='refine-products'>
                <h5>Refine Products</h5>
                <hr className='inline'></hr>
            </div>
            </Row>
            
        
    );
};

export default Banner;