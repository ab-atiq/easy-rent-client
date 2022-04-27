import { Button, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import React from 'react';
import Rating from 'react-rating';
import * as AiIcons from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const SearchedCar = ({ car, findCars, buttonSubmitted }) => {
    const { brandName, model, rating, trips, price, pickup, status, imgUrl, _id } = car || {}
    const navigate = useNavigate()
    const handleUserDetails = () => {
        navigate(`/userdetails/${_id}`)
    };
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    return (
        <>
            {
                buttonSubmitted &&

                ((findCars?.length) ?
                    <div className='car-card-container'>
                        <Grid container>
                            <Grid item md={4} className='car-card'>
                                <Item>
                                <img className='car-card-img' src={imgUrl} alt="" />
                                <Typography variant="h4" component="div" gutterBottom>
                                    {`Brand: ${brandName}`}
                                </Typography>
                                <Typography variant="h6" component="div" gutterBottom>
                                    {`Model: ${model}`}
                                </Typography>
                                <Rating
                                    initialRating={rating}
                                    emptySymbol={<AiIcons.AiOutlineStar className='emptystar' />}
                                    fullSymbol={<AiIcons.AiFillStar className='fillstar' />}
                                    readonly
                                />
                                <Typography variant="h6" component="div" gutterBottom>
                                    {`(${trips} trips)`}
                                </Typography>
                                <hr />
                                <Typography variant="h6" component="div" gutterBottom>
                                    {`Pickup: ${pickup}`}
                                </Typography>
                                <Typography variant="h6" component="div" gutterBottom>
                                    {`Price:$ ${price}`}
                                </Typography>
                                <Typography variant="h6" component="div" gutterBottom>
                                    {`Status: ${status}`}
                                </Typography>
                                <Button onClick={handleUserDetails} variant="contained">Book Now</Button>
                                </Item>
                            </Grid>
                        </Grid>
                    </div> :
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