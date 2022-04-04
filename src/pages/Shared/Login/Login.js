import React from 'react';
import Grid from '@mui/material/Grid';
import loginImage from '../../../img/login.jpg';
import './Login.css';

const Login = () => {
    return (
        <Grid container className='login-container'>
            <h3 className="login-header">Please Log in</h3>
            <Grid item xs={12} md={6}>
                <img src={loginImage} alt="" />
            </Grid>
            <Grid item xs={12} md={6}>

            </Grid>
        </Grid>
    );
};

export default Login;