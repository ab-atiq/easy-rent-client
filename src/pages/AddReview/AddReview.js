import React from 'react';
import { useForm } from "react-hook-form";
import { Button, Grid, Typography, Input, FormHelperText, TextField } from '@mui/material';
import { FormControlUnstyled } from '@mui/base';
import InputLabel from '@mui/material/InputLabel';
import { Label } from '@mui/icons-material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useAuth from '../../hooks/useAuth';


const AddReview = () => {
    const { user } = useAuth()
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        reset();
    };
    return (
        <div className='login-container'>
            <div className='login-grid'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Typography variant="h6" component="div" gutterBottom>
                        Hi <span style={{color:'tomato'}}>{user?.displayName}</span> Your Opinion will help us to improve
                    </Typography>
                    <Grid container spacing={3} maxWidth="lg" justifyContent="center"
                        alignItems="center">
                        <Grid item xs={12} md={6} style={{ paddingTop: '2rem' }}>
                            <input className='login-input' type="text" placeholder="Designation" label="Designation" variant="outlined" required {...register("designation")} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-filled-label">Rating</InputLabel>
                                <Select>
                                    <MenuItem value={1}>One</MenuItem>
                                    <MenuItem value={2}>Two</MenuItem>
                                    <MenuItem value={3}>Three</MenuItem>
                                    <MenuItem value={4}>Four</MenuItem>
                                    <MenuItem value={4.5}>Four and Half</MenuItem>
                                    <MenuItem value={5}>Five</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={12} sx={{ width: '100%' }}>
                            <TextField fullWidth
                                id="outlined-textarea"
                                label="Your Opinion"
                                placeholder="Your Opinion"
                                multiline
                            />
                            {errors.exampleRequired && <span>This field is required</span>}
                        </Grid>
                        <input type="submit" className="btn solid" />
                    </Grid>
                </form>
            </div>
        </div>
    );
};

export default AddReview;