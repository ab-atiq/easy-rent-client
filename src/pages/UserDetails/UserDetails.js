import { Button, Grid, TextField, Typography } from '@mui/material';
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const UserDetails = () => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const navigate = useNavigate();
    const { id } = useParams();
    const [singleCar, setSingleCar] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/api/car/${id}`)
            .then(res => res.json())
            .then(data => setSingleCar(data))
    }, [id]);
    const { user } = useAuth()
    const { brandName, model, imgUrl, price, pickup } = singleCar || {}
    const onSubmit = (data) => {
        data.carInfo = singleCar;
        data.email = user?.email;
        data.imgURL = user?.photoURL;
        fetch('http://localhost:5000/init', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data =>(
                window.location.replace(data)
            ))
        reset();
    };
    return (
        <div className='login-container'>
            <Typography className='login-header' variant="h4" gutterBottom component="div">
                Hey <span style={{ color: 'tomato' }}>{brandName} {model} {pickup}</span> is waiting for your rental confirmation
            </Typography>
            <div className='login-grid'>
                <Grid container spacing={3} maxWidth="lg" justifyContent="center"
                    alignItems="center">
                    <Grid item xs={12} md={6}>
                        <img style={{ maxWidth: '100%' }} src={imgUrl} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField {...register("name")} className='login-input' id="outlined-basic" label="Name" variant="outlined" type="text"/> <br />
                            <TextField {...register("number")} className='login-input' id="outlined-basic" label="2nd Mobile Number" variant="outlined" type="number"/> <br />
                            {errors.exampleRequired && <span>This field is required</span>}
                            {/* <Button type="submit" variant="contained" color="primary" onClick={handleClick} disabled={isFetching}>Login</Button> */}
                            <Button variant='contained' type='submit'> Pay BDT: {price} </Button>
                        </form>
                    </Grid>
                    <Button sx={{marginTop:'20px'}} variant='contained' onClick={() => navigate(-1)}>Go back</Button>
                </Grid>
            </div>
        </div>
    );
};

export default UserDetails;