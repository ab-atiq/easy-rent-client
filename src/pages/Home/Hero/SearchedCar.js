import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import './Hero.css';

const SearchedCar = ({ car, findCars }) => {
    return (
        <>
        {
        findCars?.length &&
            <div className='x'>
                <Grid container>
                    <Grid item md={4} className='car-card'>
                        <img src={car?.imgUrl} alt="" />
                        <Typography variant="h4" component="div" gutterBottom>
                            {`Brand: ${car?.brandName}`}
                        </Typography>
                        <Typography variant="h6" component="div" gutterBottom>
                            {`Pickup: ${car?.pickup}`}
                        </Typography>
                        <Button variant="contained">Book Now</Button>
                    </Grid>
                </Grid>
            </div>}
        </>
    );
};

export default SearchedCar;