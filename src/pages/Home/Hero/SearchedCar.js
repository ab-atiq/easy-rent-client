import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const SearchedCar = ({ car, findCars, buttonSubmitted }) => {
    const { brandName, model, rating, trips, price, pickup, status, imgUrl, _id } = car || {}
    const navigate = useNavigate()
    const handleUserDetails = () => {
        navigate(`/userdetails/${_id}`)
    }
    return (
        <>
            {
                buttonSubmitted &&
                
               ( (findCars?.length) ?
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
                            <Button onClick={handleUserDetails} variant="contained">Book Now</Button>
                        </Grid>
                    </Grid>
                </div>:
                <div>
                    <Typography variant="h6" component="div" gutterBottom>
                        No car available
                    </Typography>
                </div>)
            }
        </>
    );
};

export default SearchedCar;