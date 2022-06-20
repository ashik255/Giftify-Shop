import React from 'react';
import { Link } from 'react-router-dom';
import './GiftCustomize.css';

const GiftCustomize = () => {
    return (
        <div className='customize-bg d-flex justify-content-center align-items-center flex-column' style={{marginTop:'90px'}}>
            <h1 className='fw-bold'>Customize Your Own Gift</h1>
            <p className='fs-5'>Have something in mind? Let us know.</p>
            <p className='fs-5'>We will try to make it happe!</p>
            <Link className='text-decoration-none customize-link'>Custom Gift Request</Link>
        </div>
    );
};

export default GiftCustomize;