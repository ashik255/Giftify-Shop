import React from 'react';
import Blogs from '../Blogs/Blogs';
import Footer from '../Footer/Footer';
import GiftCustomize from '../GiftCustomize/GiftCustomize';
import GiftifyPolicy from '../GiftifyPolicy/GiftifyPolicy';
import GiftifyService from '../GiftifyService/GiftifyService';
import GiftSolution from '../GiftSolution/GiftSolution';
import GiftTypes from '../GiftTypes/GiftTypes';
import HandPickedCard from '../HandPicked/HandPickedCard';
import NewArrivals from '../NewArrivals/NewArrivals';
import Partners from '../Partners/Partners';
import TopBar from '../TopBar/TopBar';

const HomePage = () => {
    return (
        <div>
            <TopBar/>
            <GiftSolution/>
            <HandPickedCard/>
            <GiftifyPolicy/>
            <GiftTypes/>
            <GiftCustomize/>
            <NewArrivals/>
            <Partners/>
            <GiftifyService/>
            <Blogs/>
            <Footer/>
        </div>
    );
};

export default HomePage;