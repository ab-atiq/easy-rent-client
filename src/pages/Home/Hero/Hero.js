import React from 'react';
import { useForm } from "react-hook-form";
import './Hero.css';
import { Button, Grid, TextField, Card, CardContent, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';

const Hero = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [value, setValue] = React.useState(new Date());

    const handleChange = (newValue) => {
        setValue(newValue);
    };
    const onSubmit = data => {
        console.log(data);
        reset();
    };
    return (
        <div className='hero'>
            <Typography className='title' gutterBottom variant="h3">
                Car Rental - Search, Compare and Save
            </Typography>
            <Grid container>
                <Grid item md={8} style={{margin:'0 auto'}}>
                    <Typography style={{margin:'0 0 30px 0'}} className='title' gutterBottom variant="h5">
                    <span style={{marginRight:'3rem'}}> Free cancellations on most bookings </span> <span style={{marginRight:'3rem'}}>60,000+ locations </span> <span style={{marginRight:'3rem'}}> Customer support in 40+ languages </span>
                    
                    </Typography>
                </Grid>
            </Grid>
            <div className='form-container'>
               
            </div>
        </div>
    );
};

export default Hero;