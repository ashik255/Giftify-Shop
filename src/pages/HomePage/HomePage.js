import React from 'react';
import GiftCustomize from '../GiftCustomize/GiftCustomize';
import GiftifyPolicy from '../GiftifyPolicy/GiftifyPolicy';
import GiftSolution from '../GiftSolution/GiftSolution';
import GiftTypes from '../GiftTypes/GiftTypes';
import HandPickedCard from '../HandPicked/HandPickedCard';
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
        </div>
    );
};

export default HomePage;