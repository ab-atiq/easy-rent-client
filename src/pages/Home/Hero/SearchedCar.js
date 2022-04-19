import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import './Hero.css';

const SearchedCar = ({ car, findCars }) => {
    const {brandName,model,rating,trips,price,pickup, status,imgUrl} = car || {}
    return (
        <>
        {
        findCars?.length &&
            <div className='car-card-container'>
                <Grid container>
                    <Grid item md={4} className='car-card'>
                        <img className='car-card-img' src={imgUrl} alt="" />
                        <Typography variant="h4" component="div" gutterBottom>
                            {`Brand: ${brandName}`}
                        </Typography>
                        <Typography variant="h6" component="div" gutterBottom>
                            {`Model: ${model}`}
                        </Typography>
                        <Typography variant="h6" component="div" gutterBottom>
                            {`${rating} star`} {`(${trips} trips)`}     
                        </Typography>
                        <hr />
                        <Typography variant="h6" component="div" gutterBottom>
                            {`Pickup: ${pickup}`}
                        </Typography>
                        <Typography variant="h6" component="div" gutterBottom>
                            {`Price: ${price}`}
                        </Typography>
                        <Typography variant="h6" component="div" gutterBottom>
                            {`Status: ${status}`}
                        </Typography>
                        <Button variant="contained">Book Now</Button>
                    </Grid>
                </Grid>
            </div>}
        </>
    );
};

export default SearchedCar;