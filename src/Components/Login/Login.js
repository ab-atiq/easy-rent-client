import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
// import ResponsiveAppBar from '../../Shared/AppBar/AppBar';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    // const { user, loginUser, authError, isLoading, signInWithGoogle } = useAuth();

    // const location = useLocation();
    // const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newSubmitData = { ...loginData };
        newSubmitData[field] = value;
        setLoginData(newSubmitData);
    }

    const handleLogin = e => {
        // loginUser(loginData.email, loginData.password, location, navigate);
        // e.preventDefault();
    }

    const googleSignIn = () => {
        // signInWithGoogle(location, navigate);
    }

    return (
        <Box>
            {/* <ResponsiveAppBar /> */}
            <Container sx={{ pt: 3 }}>
                <Grid container spacing={0} alignItems='center' justifyContent='center'>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h4' sx={{ py: 2 }} >
                            Please login
                        </Typography>
                        {
                            // !isLoading &&
                            <form onSubmit={handleLogin}>
                                <TextField fullWidth onChange={handleOnChange} label="Email" name="email" type="email" sx={{ pb: 2 }} />
                                <TextField fullWidth onChange={handleOnChange} label="Password" name="password" type='password' sx={{ pb: 2 }} />
                                <Button type='submit' variant='contained' sx={{ width: "100%", fontSize: '25px' }}>Login</Button>
                                <NavLink to='/register' style={{ textDecoration: "none" }}>
                                    <Button variant="text" style={{ fontSize: '20px' }}>New user? Please register</Button>
                                </NavLink>
                            </form>
                        }
                        <p>--------------------------</p>
                        <Button variant="contained" onClick={googleSignIn} style={{ fontSize: '20px' }}>SignIn use Google</Button>
                        <br />
                        {/* {
                            user.email &&
                            <Alert severity="success">Login Successfully</Alert>
                        }
                        {
                            authError &&
                            <Alert severity="error">{authError}</Alert>
                        }
                        {isLoading &&
                            <CircularProgress />
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

export default Login;