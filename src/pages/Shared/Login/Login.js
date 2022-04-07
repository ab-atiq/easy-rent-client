import React from 'react';
import Grid from '@mui/material/Grid';
import loginImage from '../../../img/login.jpg';
import './Login.css';
import { Button, Container } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <Container>
            <Grid container className='login-container'>
                <h3 className="login-header">Please Log in</h3>
                <Grid item xs={12} md={6}>
                    <img src={loginImage} alt="" />
                </Grid>
                <Grid item xs={12} md={6}>

                </Grid>
            </Grid>
            <NavLink
                style={{ textDecoration: 'none' }}
                to="/register">
                <Button variant="text">New User? Please Register</Button>
            </NavLink>
        </Container>
    );
};

export default Login;