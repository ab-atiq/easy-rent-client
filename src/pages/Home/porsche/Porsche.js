import { Box, Grid } from '@mui/material';
import Car from "../../../images/car.png";
import './Porsche.css';
import React from 'react';

const Porsche = () => {
    return (
        <div className="main">
            <div className="text">
                <h1>Long-Journey experience with
                    <br /> short commute convenience.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aliquid repellendus id illum sit quasi?
                    <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod harum vitae tempora quia quidem nostrum molestiae,
                    <br /> dignissimos fuga qui exercitationem.</p>
            </div>
            <div className="car">
                <img src={Car} alt="" />
            </div>
        </div>
    );
};

export default Porsche;