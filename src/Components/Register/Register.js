import { Button, Container, Grid, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Register = () => {
    const [RegisterData, setRegisterData] = useState({});
    // const { user, registerUser, isLoading, authError } = useAuth();
    // const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newSubmitData = { ...RegisterData };
        newSubmitData[field] = value;
        setRegisterData(newSubmitData);
    }

    const handleRegistration = e => {
        // if (RegisterData.password !== RegisterData.password2) {
        //     alert("Password does not matched. Please, check");
        //     return
        // }
        // registerUser(RegisterData.email, RegisterData.password, RegisterData.name, navigate);
        // e.preventDefault();
    }

    return (
        <Box>
            {/* <ResponsiveAppBar /> */}
            <Container sx={{ pt: 3 }}>
                <Grid container spacing={0} alignItems='center' justifyContent='center'>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h4' sx={{ py: 2 }} >
                            Please Register
                        </Typography>
                        {
                            // !isLoading &&
                            <form onSubmit={handleRegistration}>
                                <TextField fullWidth onChange={handleOnChange} label="Name" name="name" type="text" sx={{ pb: 2 }} />
                                <TextField fullWidth onChange={handleOnChange} label="Email" name="email" type="email" sx={{ pb: 2 }} />
                                <TextField fullWidth onChange={handleOnChange} label="Password" name="password" type='password' sx={{ pb: 2 }} />
                                <TextField fullWidth onChange={handleOnChange} label="Re-type Password" name="password2" type='password' sx={{ pb: 2 }} />
                                <Button type='submit' variant='contained' sx={{ width: "100%", fontSize: '25px' }}>Register</Button>
                                <NavLink to='/login' style={{ textDecoration: "none" }}>
                                    <Button variant="text" style={{ fontSize: '20px' }}>Old user? Please Login</Button>
                                </NavLink>
                            </form>
                        }
                        {/* 
                        {isLoading &&
                            <CircularProgress />
                        }

                        {
                            user.email &&
                            <Alert severity="success">Register Successfully</Alert>
                        }
                        {
                            authError &&
                            <Alert severity="error">{authError}</Alert>
                        } */}
                    </Grid>
                    {/* <Grid item xs={12} md={6}>
                        <img style={{ width: '100%', }} src="https://i.ibb.co/N12cZ7t/login.png" alt="" />
                    </Grid> */}
                </Grid>
            </Container>
        </Box>
    );
};

export default Register;